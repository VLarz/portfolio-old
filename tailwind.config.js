/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
            serif: ['Poppins', 'serif'],
        },
        extend: {
            colors: {
                primary: '#2771D0',
                secondary: '#022144',
                gray: '#808899',
            },
        },
    },
    plugins: [require('autoprefixer'), require('tw-elements/dist/plugin')],
};
