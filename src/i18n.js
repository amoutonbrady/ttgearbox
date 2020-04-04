import { init, getLocaleFromNavigator, register } from 'svelte-i18n';

register('fr', () => import('./langs/fr.json'));

init({
	fallbackLocale: 'fr',
	initialLocale: getLocaleFromNavigator(),
});
