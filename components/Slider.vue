
<template>
    <!-- Banner Start -->
    <div class="banner">
      <p class="rs-p-wp-fix"></p>
      <rs-module-wrap
        id="rev_slider_5_1_wrapper"
        data-alias="Home-21"
        data-source="gallery"
        style="visibility:hidden; background:transparent; padding:0; margin:0px auto; margin-top:0; margin-bottom:0;"
      >
        <rs-module id="rev_slider_5_1" data-version="6.5.15">
          <rs-slides>
            <rs-slide
              style="position: absolute;"
              data-key="rs-7"
              data-title="Slide"
              data-anim="ms:600;"
              data-in="o:0;"
              data-out="a:false;"
            >
              <img
                src="/rev/assets/dummy.png"
                alt=""
                title="Untitled_7.jpeg"
                width="2560"
                height="1440"
                class="rev-slidebg tp-rs-img rs-lazyload"
                data-lazyload="/rev/assets/Untitled_7-scaled.png"
                data-no-retina
              />
              <rs-bgvideo
                data-video="w:100%;h:100%;nse:false;l:true;ptimer:false;vfc:true;do:1;doca:rgba(44, 44, 44, 0);docb:rgba(44, 44, 44, 0);"
                data-mp4="/rev/assets/Untitled.mp4"
              ></rs-bgvideo>
            </rs-slide>
             
          </rs-slides>
        </rs-module>
      </rs-module-wrap>
    </div>
    <!-- Banner End -->
  </template>
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
  onMounted(() => {
  const video = document.querySelector('video');
  if (video instanceof HTMLVideoElement) {
    video.muted = true;
    video.play().catch(console.warn); // Sessiz video autoplay yapılabilir
  }

  // Kullanıcı tıkladığında sesi aç
  document.addEventListener('click', () => {
    if (video) {
      video.muted = false;
    }
  }, { once: true });
});
  </script>
  