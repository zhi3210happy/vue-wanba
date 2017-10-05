
<template>
    <div class="index-pay index-order index-face">
        <!--banner开始-->
        <div class="banner">
            <nav class="nav">
                <router-link to="indexmessage" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;人脸识别&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
            </nav>
        </div>
        <!--banner结束-->
        <!--面部扫描开始-->
        <div class="face-type">
            <img src="./image/face-line.png" alt="">
        </div>
        <!--面部扫描结束-->
        <!--底部开始-->
        <footer class="face-footer">
            <p>请将面部对准人像图形进行识别支付</p>
            <p>Please pay attention to the face image recognition</p>
            <h1>
                <b>177338</b>
                <span>RMB</span>
            </h1>
        </footer>
        <!--底部结束-->
    </div>
</template>
<script>
import './css/index-pay.css'
export default {

}
</script>
