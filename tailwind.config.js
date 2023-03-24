module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/public/assets/temp-sky.jpg')",
        sunflower: "url('/public/assets/sunflower-pc.jpg')",
        headshot: "url('/public/assets/headshot_mira.jpg')",
        goodjob: "url('/public/assets/goodjob-gif.gif')",
        grumpy: "url('/public/assets/grumpy.webp')",
        tempsky: "url('/public/assets/temp-sky.jpg')",
        lighterretro: "url('/public/assets/lighter_retro_bg2.png')",
      },
    },
    colors: {
      white: '#FFFFFF',
      powder: '#A6BCC9ff',
      charcoal: '#2C3F4Bff',
      pink: '#E3AFB4',
      rosy: '#C39586ff',
      peach: 'F0D5C9',
      violet: '#7C7D9D',
      purple: '#B4A3C4',
      sand: '#F0E5D8',
    },
  },
  plugins: [],
};
