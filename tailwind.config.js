/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Practical 01/**/*.{html,js}',
        './Practical 02/**/*.{html,js}',
        './Practical 03/**/*.{html,js}', // Add future directories here
        './**/*.{html,js}', // Catch-all for any future directories
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

