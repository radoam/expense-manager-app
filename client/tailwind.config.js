module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      blue: '#0070F3'
    },
    extend: {
      width: {
        auto: 'auto'
      },
      minWidth: {
        20: '5rem',
        36: '9rem',
        48: '12rem',
        60: '15rem',
        72: '18rem'
      }
    }
  },
  plugins: []
};
