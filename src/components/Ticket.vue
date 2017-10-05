
<template>
    <div>
        <more-header :title="title" :route="route"></more-header>
        <section class="ticket">
            <figure>
                <router-link to="ticketxq">
                    <img src="./images/bzp/mp1.jpg" alt="">
                    <div class="description">
                        <figcaption>太原星空错觉艺术馆</figcaption>
                        <p class="duotext">一场真正为快乐的艺术之旅，近期更有五 折大优惠噢，快来玩吧！
                        </p>
                        <div>
                            <div class="price">￥38</div>
                            <div class="pmprice">票面价￥
                                <span>60</span>
                            </div>
                            <div class="address">迎泽区</div>
                        </div>
                    </div>
                </router-link>
            </figure>
            <figure>
                <router-link to="ticketxq">
                    <img src="./images/bzp/mp2.png" alt="">
                    <div class="description">
                        <figcaption>台骀山滑世界</figcaption>
                        <p class="duotext">在速度与激情中释放自己，年轻就该激情 飞扬，敢于挑战不可能。
                        </p>
                        <div>
                            <div class="price">￥36</div>
                            <div class="pmprice">票面价￥
                                <span>40</span>
                            </div>
                            <div class="address">迎泽区</div>
                        </div>
                    </div>
                </router-link>
            </figure>
            <figure>
                <router-link to="ticketxq">
                    <img src="./images/bzp/mp3.jpg" alt="">
                    <div class="description">
                        <figcaption>太原龙隐温泉</figcaption>
                        <p class="duotext">让您在寒冷的冬日也能感受丝丝温暖，在 忙乱中享受浓浓惬意！
                        </p>
                        <div>
                            <div class="price">￥189</div>
                            <div class="pmprice">票面价￥
                                <span>300</span>
                            </div>
                            <div class="address">万柏林区</div>
                        </div>
                    </div>
                </router-link>
            </figure>
            <figure>
                <router-link to="ticketxq">
                    <img src="./images/bzp/mp4.png" alt="">
                    <div class="description">
                        <figcaption>太原水善汇</figcaption>
                        <p class="duotext">一站式的休闲SPA会所，累了就来水善汇 帮您驱走疲惫和不开心。
                        </p>
                        <div>
                            <div class="price">￥80</div>
                            <div class="pmprice">票面价￥
                                <span>128</span>
                            </div>
                            <div class="address">迎泽区</div>
                        </div>
                    </div>
                </router-link>
            </figure>
            <figure>
                <router-link to="ticketxq">
                    <img src="./images/bzp/mp5.jpg" alt="">
                    <div class="description">
                        <figcaption>太原九龙国际滑雪场</figcaption>
                        <p class="duotext">滑雪地貌地形平坦，天然植被优良，是您 和家人朋友一起娱乐放松的好去处！
                        </p>
                        <div>
                            <div class="price">￥450</div>
                            <div class="pmprice">票面价￥
                                <span>480</span>
                            </div>
                            <div class="address">小店区</div>
                        </div>
                    </div>
                </router-link>
            </figure>
            <figure>
                <router-link to="ticketxq">
                    <img src="./images/bzp/mp6.jpg" alt="">
                    <div class="description">
                        <figcaption>山西晋祠博物馆</figcaption>
                        <p class="duotext">古代祭祀建筑，碑刻等为一体的文化圣地 感受浓厚的艺术气息。
                        </p>
                        <div>
                            <div class="price">￥140</div>
                            <div class="pmprice">票面价￥
                                <span>180</span>
                            </div>
                            <div class="address">晋源区</div>
                        </div>
                    </div>
                </router-link>
            </figure>
        </section>
    </div>
</template>

<style src="./css/bzp/ticket.css" scoped>

</style>
<script>
import MoreHeader from './MoreHeader'
export default {
  data(){
      return{
          title:'门票',
          route:'/more'
      }
  },
  components:{
      MoreHeader
  }
}
</script>

