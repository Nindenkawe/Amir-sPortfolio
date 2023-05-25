/** @type {import('tailwindcss').Config} */
    module.exports = {
          content: [
        './dist/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
      ],
          media: false, // or 'media' or 'class'
          theme: {
            extend: {},
          },
          variants: {
            extend: {},
          },
      plugins: [],
    }

