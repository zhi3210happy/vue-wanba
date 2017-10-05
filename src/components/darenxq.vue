
<template>
    <div>
        <more-header :title="title" :route="route"></more-header>
        <div class="tj-banner" style="background: url('./static/images/dr-banner.png') no-repeat center center;-webkit-background-size: cover;background-size: cover;"></div>
        <div class="personal-qm">
            <div>
                <img src="./images/bzp/guide1.png" alt="">
                <div class="right">
                    <span>阿狸</span>
                    <span>个人签名：旅行就要像梦一样自由。</span>
                </div>
            </div>
        </div>
        <h3 class="tdxc">她的行程</h3>
        <section class="drtj-list">
            <div class="dr1">
                <div class="touxiang">
                    <div class="left">
                        <a>
                            <img src="./images/bzp/tx.png" alt="">
                        </a>
                        <div class="name-date">
                            <span>Moli</span>
                            <span>2016-05-06</span>
                        </div>
                    </div>
                    <div class="focus">
                        <a>关注</a>
                    </div>
                </div>
                <div class="miaoshu duotext">
                    海南7日5晚自由行·【立减888含黄金周！】直飞 3+2双酒店DIY
                </div>
                <div class="photo">
                    <a>
                        <img src="../../static/images/17380965_999592.jpg" alt="">
                    </a>
                    <a>
                        <img src="../../static/images/2017-03-19_113441.png" alt="">
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
            title: '达人详情',
            route: '/daren'
        }
    },
    components: {
        MoreHeader
    }
}
</script>