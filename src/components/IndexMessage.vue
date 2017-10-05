<template>
    <div class="index-pay index-bank index-order index-message">
        <div class="mask">
            <div class="img">
                <img src="./image/pay-sucess.png" alt="">
            </div>
            <span>
                <img src="./image/pay-close.png" alt="">
            </span>
        </div>
        <!--banner开始-->
        <div class="banner">
            <nav class="nav">
                <router-link to="indexbank" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;银行卡信息&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
                <router-link to="indexaddBank" class="back" style="background:url(./static/images/add.png) no-repeat 0 0;float: right"></router-link>
            </nav>
        </div>
        <!--banner结束-->
        <!--银行卡banner开始-->
        <div class="messplay swiper">
            <swiper :options="banner">
                <swiper-slide v-for="item in img" :key="item.key">
                    <a href="javascript:;"><img src="./image/card-message.png" alt=""></a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!--银行卡banner结束-->
        <!--详细信息开始-->
        <div class="bank-intro">
            <ul>
                <li>
                    <span></span><input type="text" placeholder="开户行：建设银行"></li>
                <li>
                    <span></span><input type="text" placeholder="支付额度限制：50,000RMB"></li>
                <li>
                    <span></span><input type="text" placeholder="卡内余额查询：向9967发送">
                    <b style="background: #2BD2FC;">短信查询</b>
                </li>
                <li>
                    <span></span><input type="text" placeholder="使用期限：2019-06-14"></li>
                <li>
                    <span></span><input type="text" placeholder="使用方式：人脸识别">
                    <router-link style="background: #06E5CA;" to="IndexFace">切换</router-link>
                </li>
                <li>
                    <span></span><input type="text" placeholder="绑定状态：已绑定">
                    <b style="background: #4B4B4B;">解除绑定</b>
                </li>
            </ul>
            <a href="javascript:;" class="use-bank">使用此银行卡</a>
        </div>
        <!--详细信息结束-->
    </div>
</template>

<script>
import './css/index-pay.css'
export default {
    data() {
        return {
            img:[1,2,3],
            banner: {
                autoplay: 2000,
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination'
            }
        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            var bank = document.querySelector('.bank-intro .use-bank');
            var mask = document.querySelector('.index-message .mask');
            var close = document.querySelector('.index-message .mask span');
            bank.onclick = function() {
                mask.style.display = 'block';
            }
            close.onclick = function() {
                mask.style.display = 'none';
            }
        }
    }
}

</script>