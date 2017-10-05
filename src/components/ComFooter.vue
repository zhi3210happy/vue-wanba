<template>
          <!-- footer开始 -->
        <footer class="index-footer">
            <ul class="cont">
                <li>
                    <router-link to="/">
                        <img src="./images/index-index.png" alt=""> 首页
                    </router-link>
                </li>
                <li>
                    <router-link to="destination">
                        <img src="./images/index-place.png" alt=""> 目的地
                    </router-link>
                </li>
                <li>
                    <router-link to="more">
                        <img src="./images/index-men.png" alt=""> 达人
                    </router-link>
                </li>
                <li>
                    <router-link to="AboutMe">
                        <img src="./images/index-my.png" alt=""> 我的
                    </router-link>
                </li>
            </ul>
        </footer>
        <!-- footer开始 -->
</template>
<script>
export default {
  
}
</script>
<style scoped>
/*$footer 开始*/
.index-footer {
  width: 100%;
  height: 50px;
  background: #fff;
  -webkit-position: absolute;
  position: fixed;
  bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 .3rem;
}
.index-footer .cont {
  width: 100%;
  height: 100%;
  text-align: justify;
  line-height: 50px;
}
.index-footer .cont::after {
  content: '';
  display: inline-block;
  width: 100%;
  line-height: 0;
}
.index-footer .cont li {
  height: 100%;
  display: inline-block;
  line-height: 0px;
}
.index-footer .cont li a {
  display: block;
  padding: 10px;
  color: #000;
  line-height: 20px;
  font-size: 10px;
}
.index-footer .cont li a img {
  margin: 0 auto;
  display: block;
  height: 20px;
}
/*footer结束*/
</style>

