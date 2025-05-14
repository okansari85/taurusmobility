// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => [
        'rs-module-wrap',
        'rs-module',
        'rs-slides',
        'rs-slide',
        'rs-bgvideo',
        'rs-layer'
      ].includes(tag)
    }
  },
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/rev/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css',
    '~/assets/rev/fonts/font-awesome/css/font-awesome.css',
    '~/assets/rev/css/rs6.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/progressbar.css',
    '~/assets/css/animations.min.css',
    '~/assets/css/magnific-popup.min.css',
    '~/assets/fonts/font-awesome/css/all.min.css',
    '~/assets/fonts/flaticon/font/flaticon.css',
    '~/assets/css/ionicons.min.css',
    '~/assets/fonts/themify-icons/themify-icons.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css'
  ],
  app: {
    head: {
      title: 'TaurusMobility',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ],
      link: [
        { rel: 'shortcut icon', href: '/images/favicon.ico' } // favicon hala public klasöründe olmalı
      ],
      script: [
        { src: '/js/jquery.min.js' },
        { src: '/js/bootstrap.min.js' },
        { src: '/js/owl.carousel.min.js' },
        { src: '/js/isotope.pkgd.min.js' },
        { src: '/js/jquery.countTo.min.js' },
        { src: '/js/jquery.magnific-popup.min.js' },
        { src: '/js/wow.min.js' },
        { src: '/rev/js/rbtools.min.js' },
        { src: '/rev/js/rs6.min.js' },
        { src: '/js/rev-custom.js' },
        { src: '/js/custom.js' },
      ]
    }
  },
})
