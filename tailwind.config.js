/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["Caveat", ...fontFamily.sans],
        nabla: ["Nabla", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix: 'ctp',
      defaultFlavour: "frappe",
    }),
  ],
};
