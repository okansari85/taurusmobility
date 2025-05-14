<template>
    <!-- Loading Start -->
    <div v-if="isLoading" id="pq-loading">
      <div id="pq-loading-center">
        <img src="/images/logos/logo-1.png" alt="loading" />
      </div>
    </div>
    <!-- Loading End -->
  </template>
  
  <script lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  
  export default {
    name: 'PreLoader',
    setup() {
      const isLoading = ref(true)
  
      // Sayfa yüklendikten sonra preloader'ı gizlemek için
      onMounted(() => {
        setTimeout(() => {
          isLoading.value = false
        }, 2000) // 2 saniye sonra preloader'ı gizle
      })
  
      // Sayfa değişimi sırasında preloader'ı tekrar göstermek için
      onBeforeUnmount(() => {
        isLoading.value = true
      })
  
      return {
        isLoading
      }
    }
  }
  </script>
  
  <style scoped>
  #pq-loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  #pq-loading-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #pq-loading img {
    width: 150px;
    height: auto;
  }
  </style>
  