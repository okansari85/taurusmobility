<template>
      <PreLoader /> <!-- Preloader burada kullanılır -->
      <Header />
      <NuxtPage />
      <Footer />
  </template>
  
  <script lang="ts">
  import PreLoader from '~/components/PreLoader.vue'
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  
  export default {
    components: {
      PreLoader,
      Header,
      Footer
    }
  }
  </script>
  