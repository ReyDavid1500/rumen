import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "buttons": 'Permanent Marker, cursive',
        "body": 'Saira Extra Condensed'
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "dark-blue": "#003049",
        "light-green": "#00A896",
        "regular-blue": "#028090",
        "rumen-orange": "#F77F00",
        "light-orange": "#FCBF49"
      },
    },

  },
  plugins: [nextui()],
}

