module.exports = {
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#0c0910',
      transparent: 'transparent',

      lightgray: '#f5f7f7',
      // shade of grey
      snow: '#F9FAFC',
      dirtysnow: '#E5E9F2',
      carbon: '#C0CCDA',
      smoke: '#8492A6',
      'mid-gray': '#535f73',
      granite: '#3C4758',

      // color
      orange: '#F6511D',
      purple: '#8338EC',
      blue: '#23C8D2',
      red: '#c72f53',
      'light-red': '#f7aeb9',
      green: '#72D54B',
      'light-green': '#e6ffed',
      'mid-green': '#acf2bd',
      yellow: '#F7AC2A',

      radiant: '#6dc200',
      dire: '#c33334'
    },
    fontFamily: {
      mono: ['"Roboto Mono"', '"SF Mono"', 'monospace'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Noto Sans', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    screens: {
      tablet: '768px',
      desktop: '1280px',
    },
    extend: {
      maxWidth: {
        'line-length': '80ch',
      },
    },
    inset: {
      '0': 0,
      '1/2': '50%',
    },
    container: {
      center: true,
      maxWidth: 1440,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'disabled'],
    borderColor: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
