import * as sapper from '@sapper/app';

// scroll behavior polyfill
(async () => {
	if (!("scrollBehavior" in document.documentElement.style)) {
		console.log('LOADING POLYFILL...');
		await import("scroll-behavior-polyfill");
	}
})

sapper.start({
	target: document.querySelector('#root'),
});
