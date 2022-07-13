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
    },
    colors: {
      steelblue: '#497C9Cff',
      celadon: '#0081A7',
      bluegreen: '#00AFB9',
      bbyellow: '#FDFCDC',
      peach: '#FED9B7',
      charcoal: '#2C3F4Bff',
      pink: '#CDB0B7ff',
      white: '#FFFFFF',
      bitter: '#F07167',
    },
  },
  plugins: [],
};
