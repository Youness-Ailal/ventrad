/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#fbf0ee",
        "primary-light-hover": "#f9e9e6",
        "primary-light-active": "#f3d1cb",
        primary: "#d76c58",
        "primary-hover": "#c2614f",
        "primary-active": "#ac5646",
        "primary-dark": "#a15142",
        "primary-darker": "#4b261f",
        "primary-dark-hover": "#814135",
        "primary-dark-active": "#613128",
        "secondary-light": "#ebecee",
        "secondary-light-hover": "#e1e3e6",
        "secondary-light-active": "#c1c4cb",
        secondary: "#374158",
        "secondary-hover": "#323b4f",
        "secondary-active": "#2c3446",
        "secondary-dark": "#293142",
        "secondary-darker": "#13171f",
        "secondary-dark-hover": "#212735",
        "secondary-dark-active": "#191d28",
        "light-blue-bg": "#E9EDF1",
      },
      maxWidth: {
        1400: "1400px",
      },
      aria: {
        current: "current=page",
      },
    },
  },
  plugins: [],
};
