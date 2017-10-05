

<template>
    <div>
        <more-header :title="title" :route="route"></more-header>
        <section class="ticketxq">
            <img src="./images/bzp/mp1.jpg" alt="">
            <div class="ticket-intro">
                <div class="title">
                    <span>太原星空错觉艺术馆</span>
                    <span>山西省太原市迎泽区柳巷万通购物广场5楼</span>
                    <span>开放时间：上午8:00-12:00 下午14:00-18:00</span>
                </div>
                <div class="yuding">
                    <span>太原星空错觉艺术馆成人票</span>
                    <span>￥38</span>
                    <router-link to="Reserve">预订</router-link>
                </div>
            </div>
        </section>
        <section class="ticket">
            <div class="tj-title">
                <img src="./images/bzp/tuijian.png" alt="">
            </div>
            <figure>
                <a>
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
                </a>
            </figure>
            <figure>
                <a>
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
                </a>
            </figure>
            <figure>
                <a>
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
                </a>
            </figure>
        </section>
    </div>
</template>

<style src="./css/bzp/ticket.css" scoped>

</style>
    
    <script>
import MoreHeader from './MoreHeader'
export default {
    data() {
        return {
            title: '门票详情',
            route: '/ticket'
        }
    },
    components: {
        MoreHeader
    }
}
</script>