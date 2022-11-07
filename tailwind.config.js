module.exports = {
  content: ['./src/**/*.{jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'primary': '#10aebd',
          'secondary': '#42DEE1',
          'accent': '#6DECB9',
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          'primary': '#10aebd',
          'secondary': '#42DEE1',
          'accent': '#6DECB9',
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
