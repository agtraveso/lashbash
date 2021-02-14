module.exports = {
  theme: {
    extend: {
      colors: {
        th: {
          base: '#1e1e1e',
          label: '#d4d4d4',
          'secondary-label': '#858585',
          'tertiary-label': '#3D3D3D',
          debug: '#68d391',
          info: '#569cd6',
          warn: '#ecc94b',
          error: '#c53030'
        }
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: false, // FIXME: not working properly: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
