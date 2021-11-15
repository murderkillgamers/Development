const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
    ])
    .sass('resources/scss/app.scss', 'public/css/font-awesome.css');

mix.copy('resources/js/telerik2014.3.1223', 'public/js');
mix.copy('resources/css/telerik2014.3.1223', 'public/css');

if (mix.inProduction()) {
    mix.version();
}
