module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      xs: '480px',
      mobile: '640px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1280px',
      xl: '1700px',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      title: ['Playfair Display', 'serif'],
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
      light: '#D0DBCDff', // ash-gray
      dark: '1C1115ff', //dark brown
      primary: '#4DA5B9ff', //teal blue
      primary_light: '#A3C1C9ff', // light blue
      secondary: '#581A1Fff', // burgundy
      secondary_light: '#7C4C4Cff', // rose pink
      accent1: '#648153ff', //green
    },
    variants: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
};
