/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "480px",
      },
      maxWidth: {
        xs: "200px",
      },
      textColor: {
        "custom-gray-light": "#969696",
        "custom-gray-dark": "#2b2b2b",
      },
      fontSize: {
        xs: "0.7rem",
        sm: "0.825rem",
        "2xl": "1.6rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        desktop: "url('/pattern-bg-desktop.png')",
        mobile: "url('/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
};
