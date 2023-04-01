module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      garamond: ['EB Garamond', 'serif'],
      handwrite: ['Gaegu', 'cursive'],
    },
    extend: {
      backgroundImage: {
        landing: "url('/public/assets/temp-sky.jpg')",
        sunflower: "url('/public/assets/sunflower-pc.jpg')",
        headshot: "url('/public/assets/headshot_mira.jpg')",
        goodjob: "url('/public/assets/goodjob-gif.gif')",
        heartwifi: "url('/public/assets/heart_wifi_icon.png')",
      },
      safelist: [
        'animate-[fade-in_1s_ease-in-out]',
        'animate-[slide-right_1s_ease-in-out]',
      ],
      animation: {
        fadeIn: 'fade-in-down 3s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
    },
    colors: {
      white: '#FBFBFB',
      charcoal: '#2C3F4Bff',
      pink: '#D69496',
      cyan: '#469B9E',
      matcha: '#AAB08A',
      sand: '#F0E5D8',
    },
    variants: {
      animation: ['motion-safe'],
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
