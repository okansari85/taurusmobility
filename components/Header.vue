<template>
    <!-- Header Start -->
    <header id="pq-header" class="pq-header-default">
      <div class="pq-top-header">
        <div class="container">
          <div class="row flex-row-reverse">
            <div class="col-md-6 text-right">
              <div class="pq-header-social text-right">
                <ul>
                  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fab fa-github"></i></a></li>
                  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fab fa-skype"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="pq-header-contact">
                <ul>
                  <li style="display:none">
                    <a href="tel:+1800001658"><i class="fas fa-phone"></i>
                      <span>+1800-001-658</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@peacefuldesign.com">
                      <i class="fas fa-envelope"></i><span>info@taurusmobility.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pq-bottom-header pq-has-sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="home-default.html">
                  <img class="img-fluid logo" src="/images/logos/header_logo.jpg" alt="ecofuel" />
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <div id="pq-menu-contain" class="pq-menu-contain">
                    <ul id="pq-main-menu" class="navbar-nav ml-auto">
                      <li class="menu-item current-menu-item">
                        <a href="home-default.html" aria-current="page">Anasayfa</a>
                      </li>
                      <li class="menu-item">
                        <a href="home-default.html" aria-current="page">Biz Kimiz</a>
                      </li>
                      <li class="menu-item">
                        <a href="#">Ürünlerimiz</a><i class="fa fa-chevron-down pq-submenu-icon"></i>
                        <ul class="sub-menu">
                          <li class="menu-item"><a href="#">About Us</a></li>
                          <li class="menu-item"><a href="#">Our Services</a></li>
                          <!-- Diğer menü öğeleri burada... -->
                        </ul>
                      </li>
                      <li class="menu-item">
                        <a href="home-default.html" aria-current="page">İletişim</a>
                      </li>
                      <!-- Diğer menüler burada... -->
                    </ul>
                  </div>
                </div>
                <div class="pq-menu-search-block">
                  <a href="javascript:void(0)" id="pq-seacrh-btn"><i class="fa fa-search"></i></a>
                  <div class="pq-search-form">
                    <form role="search" method="get" class="search-form" action="home-default.html">
                      <label>
                        <span class="screen-reader-text">Search for:</span>
                        <input type="search" class="search-field" placeholder="Search …" name="s" />
                      </label>
                      <button type="submit" class="search-submit">
                        <span class="screen-reader-text">Search</span>
                      </button>
                    </form>
                  </div>
                </div>
                <a href="contact-us.html" class="pq-button">
                  <div class="pq-button-block">
                    <span class="pq-button-line-left"></span>
                    <span class="pq-button-text">İletişime Geçin</span>
                    <span class="pq-button-line-right"></span>
                    <i class="ion ion-android-arrow-dropright"></i>
                  </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-bars"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
  </template>
  
  <script lang="ts">
  export default {
    name: 'Header',
    data() {
      return {}
    },
    methods: {
      // Diğer metodlar burada tanımlanabilir
    },
  }
  </script>
  
  <style scoped>
  header#pq-header .pq-bottom-header .navbar .navbar-brand img {
    height: 80px;
  }
  /* Header stili buraya gelecek */
  .pq-header-default {
    background-color: #fff; /* Örnek bir arka plan rengi */
  }
  
  .pq-top-header {
    border-bottom: 1px solid #eaeaea;
  }
  
  .pq-header-social ul {
    list-style: none;
    padding: 0;
  }
  
  .pq-header-social ul li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .pq-header-contact ul {
    list-style: none;
    padding: 0;
  }
  
  .pq-header-contact ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  /* Diğer stil detayları... */
  </style>
  