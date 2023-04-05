/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'nunito': ['"Nunito Sans"', 'sans-serif']
        },
        extend: {
            colors: {
                "custom-secondary": "hsl(0, 0%, 98%)" /*light theme bg*/,
                "custom-dark": "hsl(200, 15%, 8%)" /*light theme text*/,
                "custom-gray": "hsl(0, 0%, 52%)" /*light theme input bg*/,
                "custom-dark-navy": "hsl(207, 26%, 17%)" /*Dark theme bg*/,
                "custom-navy": "hsl(209, 23%, 22%)" /*Dark theme items bg*/
            },
        }
    },
    plugins: [],
}