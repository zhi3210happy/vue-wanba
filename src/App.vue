
<script>
import Vue from "vue";
import "./components/css/swiper.min.css";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  mounted() {
    this.rem();
  }
  rem() {
    document.documentElement.style.fontSize =
      document.documentElement.clientWidth / 750 * 100 + "px";
    window.onresize = this.rem;
  }
  render(h) {
    return h(
      'div',
      {
        attrs:{
          id:'app'
        }
      },
      [h('router-view')]
    );
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
  background: #efefef;
}
#app {
  height: 100%;
  width: 100%;
}
body {
  position: relative;
}
</style>

<style>
.swiper-pagination .swiper-pagination-bullet {
  width: 0.24rem;
  height: 0.05rem;
  background: #bfbfbf;
  opacity: 1;
  margin: 0;
  margin-right: 0.1rem;
}
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #fefe00;
}
</style>