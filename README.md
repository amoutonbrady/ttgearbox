# TT Gearbox

[![Netlify Status](https://api.netlify.com/api/v1/badges/39e13eca-c0af-4976-ac4b-068b7404ed11/deploy-status)](https://app.netlify.com/sites/ttgearbox/deploys)

Front-end of TT Gearbox [TT Gearbox](https://ttgearbox.com/) deployed on [Netlify](netlify.com)

## Technologies used

* [Svelte](https://svelte.dev/) - Front-end library, allows for tiny assets
* [Sapper](https://sapper.svelte.dev/) - Framework around Svelte that allows SSR & routing
* [TailwindCSS](https://tailwindcss.com/) - CSS framework that generates utility classes based on a JS config
* [PurgeCSS](https://www.purgecss.com/) - Tailwind produce a huge CSS files with all the utility classes. PurgeCSS analyses the markup files and find all the classes used. Once parsed, it can remove all the unused one which lead to a a smaller CSS bundle

## External services

* [Netlify](netlify.com) - Static site website host with continuous deployment, custom domain name, automatique SSL & built-in form handling
* [Google Analytics](https://analytics.google.com/analytics/web/) - Analytics for the site
* [Google Font](https://fonts.google.com/) - Custom font with font swap option
* [Sqoosh App](https://squoosh.app/) - Minification & convertion of images to .webp
* [MaterialDesignIcons](https://materialdesignicons.com/) - Great collection of icons, used in the service section
