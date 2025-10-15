/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './resources/**/*.{blade.php,js,jsx,ts,tsx,vue}',
        './storage/framework/views/*.php',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './node_modules/@laravel/vite-plugin-wayfinder/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                grape: "#ffcc00"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // optional but recommended if Wayfinder formVariants = true
    ],
};
