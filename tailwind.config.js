/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/**/.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      "pae-primary": "#FAB42B",
      "pae-primary-light": "#fabe47",
      "pae-background": "#444654",
      "pae-overlay": "#343541",
      "pae-overlay-hover": "#3B3D49",
      "pae-text": "#e0d6ca",
      "pae-error": "red",
      },
    },
  },
  plugins: [],
}
