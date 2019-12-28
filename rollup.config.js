import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import path from 'path';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => {
	if (['CIRCULAR_DEPENDENCY', 'THIS_IS_UNDEFINED'].includes(warning.code))
		return;
	if (/[/\\]@sapper[/\\]/.test(warning.message)) return;

	onwarn(warning);
};

const dedupe = importee =>
	importee === 'svelte' || importee.startsWith('svelte/');

const resolver = resolve({
	extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss', '.svelte'],
});

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			svelte({
				dev,
				hydratable: true,
				emitCss: true,
			}),
			alias({
				entries: [
					{
						find: '@',
						replacement: path.resolve(__dirname, 'src'),
					},
				],
				resolver,
			}),
			resolve({
				browser: true,
				dedupe,
			}),
			commonjs(),
			json({
				namedExports: false,
				compact: !dev,
			}),

			legacy &&
				babel({
					extensions: ['.js', '.mjs', '.html', '.svelte'],
					runtimeHelpers: true,
					exclude: ['node_modules/@babel/**'],
					presets: [
						[
							'@babel/preset-env',
							{
								targets: '> 0.25%, not dead',
							},
						],
					],
					plugins: [
						'@babel/plugin-syntax-dynamic-import',
						[
							'@babel/plugin-transform-runtime',
							{
								useESModules: true,
							},
						],
					],
				}),

			!dev &&
				terser({
					module: true,
				}),
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			svelte({
				generate: 'ssr',
				dev,
			}),
			alias({
				entries: [
					{
						find: '@',
						replacement: path.resolve(__dirname, 'src'),
					},
				],
				resolver,
			}),
			resolve({
				dedupe,
			}),
			commonjs(),
			json({
				namedExports: false,
				compact: !dev,
			}),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules ||
				Object.keys(process.binding('natives')),
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			alias({
				entries: [
					{
						find: '@',
						replacement: path.resolve(__dirname, 'src'),
					},
				],
				resolver,
			}),
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			commonjs(),
			!dev && terser(),
		],

		onwarn,
	},
};
