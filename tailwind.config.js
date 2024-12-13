/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primaryColor: '#ca4322',
                secondaryColor: '#f9f8d2',
                thirdColor: '#f2deb8',
                forthColor: '#ebc49f',
                fifthColor: '#e4aa86',
            },
            backgroundColor: {
                primaryColor: '#ca4322',
                secondaryColor: '#f9f8d2',
                thirdColor: '#f2deb8',
                forthColor: '#ebc49f',
                fifthColor: '#e4aa86',
            },
            fontFamily: {
                comfortaa: ['Comfortaa', 'sans-serif'],
            },
            margin: {
                18: '4.5rem',
            },
        },
    },
    plugins: [],
};
