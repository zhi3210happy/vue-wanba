<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './components/css/swiper.min.css'
export default {
  name: 'app',
  mounted() {
    this.rem();
  },
  methods: {
    rem() {
      const gaowi = 750;
      const keshi = document.documentElement.clientWidth;
      let fonts = keshi / gaowi * 100;
      document.documentElement.style.fontSize = fonts + 'px'
      window.onresize = this.rem;
    },
  }
}
</script>

<style>
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
p,
input,
button,
i,
em,
img {
  margin: 0;
  padding: 0;
  list-style: none;
  border: 0;
  outline: none;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: Helvetica;
  font-size: 14px;
}

a {
  text-decoration: none;
}


body,
html {
  height: 100%;
  background: #EFEFEF;
}
#app{
  height: 100%;
  width: 100%; 
}
body {

  position: relative;
}
</style>

<style>
 .swiper-pagination .swiper-pagination-bullet {
  width: .24rem;
  height: .05rem;
  background: #BFBFBF;
  opacity: 1;
  margin: 0;
  margin-right: .1rem;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #FEFE00;
}
</style>