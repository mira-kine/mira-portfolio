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
      },
    },
    colors: {
      white: '#FFFFFF',
      blue: '#B1C3CAff',
      powder: '#A6BCC9ff',
      charcoal: '#2C3F4Bff',
      pink: '#ECDACCff',
      timberwolf: '#E0D4CCff',
      rosy: '#C39586ff',
      mocha: '#968B80ff',
      coffee: '#83786Cff',
    },
  },
  plugins: [],
};
