/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#1E3A8A",
        secondary: "#22C55E",
        accent: "#F59E0B",
        background: "#F9FAFB",
        text: "#111827",
      },
    },
  },
  plugins: [],
};
