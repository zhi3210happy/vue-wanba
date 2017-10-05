
<template>
    <div>
        <more-header :title="title" :route="route"></more-header>
        <div id="title-img">
            <img src="./images/bzp/rmdy.png" alt="">
        </div>
        <swiper class="guidebox">
            <swiper-slide v-for="(item,index) in guides" :key="index">
                <div class="guide-intro">
                    <router-link to="guidexq">
                        <img src="./images/bzp/guide1.png" alt="">
                    </router-link>
                    <div>
                        <span>爱丽丝</span>
                        <span>从业经验：5年</span>
                    </div>
                </div>
                <p class="description duotext">
                    简介：带团经验丰富，对当地景区十分熟悉。如果您选择我做您的向导，一定不会让您失望。吃好玩好心情好！ 服务城市：北京、天津。
                </p>
            </swiper-slide>
        </swiper>
        <div id="title-img">
            <img src="./images/bzp/guide-tj.png" alt="">
        </div>
        <section class="tuijian">
            <div class="tj-list">
                <a>
                    <div class="img"></div>
                    <div class="title">
                        <p>奔跑的皮皮虾</p>
                        <p>三亚五日游：畅游天涯海角、株洲之岛。</p>
                        <img src="./images/bzp/guide3.png" alt="">
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>


<script>
import './css/bzp/daoyou.css'
import MoreHeader from './MoreHeader'
export default {
  data(){
      return{
          title:'导游',
          route:'/more',
          guides:[1,2,3,4]
      }
  },
  components:{
      MoreHeader
  }
}
</script>