<template>
    <div class="index-pay index-order index-addbank index-bank">
        <!--banner开始-->
        <div class="banner">
            <nav class="nav">
                <router-link to="indexbank" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;添加银行卡&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
            </nav>
        </div>
        <!--banner结束-->
        <!--银行卡banner开始-->
        <div class="bank-banner">
            <img src="./image/bank-banner.png" alt="">
        </div>
        <!--银行卡banner结束-->
        <!--个人信息开始-->
        <div class="bank-intro">
            <h1>
                请绑定持卡人本人的银行卡
                <span>Please bind the cardholder's bank card</span>
            </h1>
            <ul>
                <li>
                    <span></span><input type="text" placeholder="麦兜兜"></li>
                <li>
                    <span></span><input type="text" placeholder="8234 0019 7896 9876"></li>
                <li>
                    <span></span><input type="text" placeholder="134-2345-7465">
                    <b>重新发送</b>
                </li>
                <li>
                    <span></span><input type="text" placeholder="763310"></li>
                <li>
                    <span></span><input type="text" placeholder="储蓄卡"></li>
                <li>
                    <span class="last">
                        <i></i>
                    </span>
                    <p>同意《银联用户服务协议》</p>
                </li>
            </ul>
            <router-link to="indexbank">添加此银行卡</router-link>
        </div>
        <!--个人信息结束结束-->
    </div>
</template>

<style src="./css/index-pay.css" scoped>

</style>
    
<script>
export default {
    mounted() {
        this.start()
    },
    methods: {
        start() {
            var span = document.querySelector('.bank-intro ul li .last');
            var i = document.querySelector('.bank-intro ul li i');
            span.onclick = function() {
                if (i.style.display == 'none') {
                    i.style.display = "block";
                } else {
                    i.style.display = "none";
                }
            }
        }
    }
}
</script>