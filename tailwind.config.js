/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
    },
    extend: {
      textColor: {
        "custom-gray-light": "#969696",
        "custom-gray-dark": "#2b2b2b",
      },
      fontSize: {
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
