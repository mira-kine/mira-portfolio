module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        landing: "url('/public/assets/temp-sky.jpg')",
        sunflower: "url('/public/assets/sunflower-pc.jpg')",
        headshot: "url('/public/assets/headshot_mira.jpg')",
        goodjob: "url('/public/assets/goodjob-gif.gif')",
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.66667%',
      },
    },
  },
  plugins: [],
};
