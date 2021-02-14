import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lasbash · Simple sandbox for Node.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'lashbash is a sandbox to execute pure JavaScript...on Node!. Open source project to test how to run code on server side.'
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'lasbash' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://lashbash.herokuapp.com'
      },
      // TODO: { hid: 'og:image', name: 'og:image', content: '/meta_image.png' },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'lasbash · Simple sandbox for Node.js'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'lashbash is a sandbox to execute pure JavaScript...on Node!. Open source project to test how to run code on server side.'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://lashbash.herokuapp.com'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/meta_image.jpg'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'lasbash · Simple sandbox for Node.js'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'lashbash is a sandbox to execute pure JavaScript...on Node!. Open source project to test how to run code on server side.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~plugins/vue-monaco', ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-socket-io'],

  // https://nuxt-socket-io.netlify.app/
  io: {
    sockets: [
      {
        name: 'events',
        url:
          process.env.NODE_ENV === 'production'
            ? 'https://lashbash.herokuapp.com'
            : 'http://localhost:3000'
      }
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new MonacoWebpackPlugin({
        // languages: ['javascript']
      })
    ]
  }
}
