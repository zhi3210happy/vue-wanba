
<template>
    <div>
        <more-header :title="title" :route="route"></more-header>
        <div class="tj-banner" style="background: url('./static/images/sy-banner.png') no-repeat center center;-webkit-background-size: cover;background-size: cover;"></div>
        <div class="personal-qm">
            <div>
                <img src="./images/bzp/guide1.png" alt="">
                <div class="right">
                    <span>Moshisei</span>
                    <span>个人签名：相机就是我的亲密战友。</span>
                </div>
            </div>
        </div>   
        <div class="personal-intro">
            <div>
                <span>籍贯：北京</span>
                <span>年龄：28</span>
            </div>
            <div>
                <span>从业：6年</span>
                <span>好评：96次</span>
            </div>
            <div>
                <span>学历：本科</span>
                <span>语言：普通话/英语</span>
            </div>
            <div>获得奖项：金狮杯一等奖</div>
        </div>
        <div class="personal-intro">
            <h3>个人介绍</h3>
            <div class="xq" style="line-height:">
                多年专注于旅行人文摄影、风景摄影。曾独自游历于印度，土耳其等十余个国家，拍摄大量人文图片刊登在各大主流媒体。2016年获得金狮杯一等奖，在国际上有较大的影响力。她拍摄的风景美轮美奂，精美绝伦。
            </div>
        </div>
        <div class="personal-intro">
            <h3>服务介绍</h3>
            <div>
                <span>聘金：300元/天</span>
                <span>服务城市：北京/天津/海南</span>
            </div>
            <div>服务时间：3月-10月 周末</div>
        </div>
        <section class="drtj-list" style="margin-top: 0.2rem">
            <div class="dr1">
                <div id="title-img">
                    <img src="./images/bzp/display.png" alt="">
                </div>
                <div class="photo sheying">
                    <a href="javascript:;">
                        <img src="../../static/images/p1.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../../static/images/p2.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../../static/images/p3.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../../static/images/p4.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../../static/images/p5.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../../static/images/p6.png" alt="">
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
<style src="./css/bzp/daoyouxq.css" scoped>

</style>
<script>
import MoreHeader from './MoreHeader'
export default {
    data() {
        return {
            title: '摄影师详情',
            route: '/sheyingshi'
        }
    },
    components: {
        MoreHeader
    }
}
</script>
