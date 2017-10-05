
<template>
    <div>
        <header class="pay-head">
            <a class="back">
                <img src="./images/grz-images/back.png" alt="">
            </a>
            <div>太原三晋商务酒店</div>
        </header>
        <section class="indent">
            <div class="top">
                <span>特惠标准间</span>
                <span>(无窗)</span>
                <span>(限时抢购)</span>
            </div>
            <div class="bot">
                <div class="ddlist">
                    <span>入住:
                        <span>3月14日</span>
                    </span>
                    <span>离店:
                        <span>3月15日</span>
                    </span>
                    <span>
                        <span>1</span>晚</span>
                </div>
                <div class="sub">
                    <input type="submit" value="不可取消" disabled="true">
                    <input type="submit" value="立即确认">
                </div>
            </div>
        </section>
        <section class="connact">
            <ul class="connactlist">
                <li>
                    <span>房间数</span>
                    <span>1间</span>
                </li>
                <li>
                    <span>入住人</span>
                    <span>赵晓晓</span>
                </li>
                <li>
                    <span>联系电话</span>
                    <span>1234567890</span>
                </li>
            </ul>
        </section>
        <footer class="paybox">
            <div class="left">
                应付总额:￥
                <span>285</span>
            </div>
            <router-link to="Reserve" class="pay">
                去结算
            </router-link>
        </footer>
    </div>
</template>
<style src="./css/grz-css/pay.css" scoped>

</style>

<script>
export default {
    mounted() {
        this.goback();
    },
    methods: {
        goback() {
            const back = document.querySelector('.back');
            back.onclick = () => this.$router.go(-1)
        }
    }
}
</script>
