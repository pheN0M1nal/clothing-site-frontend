/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                cyan: "hsl(180, 66%, 49%)",
                cyanLight: "hsl(180, 66%, 69%)",
                darkViolet: "hsl(257, 27%, 26%)",
                red: "hsl(0, 87%, 67%)",
                grayishViolet: "hsl(257, 7%, 63%)",
                veryDarkBlue: "hsl(255, 11%, 22%)",
                veryDarkViolet: "hsl(260, 8%, 14%) ",
                stee: "#D2FF28",

                stext: "#494949",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            spacing: {
                180: "32rem",
            },
            textColor: {
                primary: "#494949",
                secondary: "#ffed4a",
                danger: "#e3342f",
            },
        },
    },
    plugins: [],
}
