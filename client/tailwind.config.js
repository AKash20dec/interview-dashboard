/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {},
  },
  plugins: [require("daisyui")],

  // daisyUI config
  daisyui: {
      themes: false,
      darkTheme: "dark",
      base: true,
      styled: true,
      utils: true,
      rtl: false,
      prefix: "",
      logs: true,
  },

}