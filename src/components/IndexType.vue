<template>
    <div class="index-order index-pay index-type">
        <!--banner开始-->
        <div class="banner">
            <nav class="nav">
                <router-link to="IndexOrder" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;选择支付方式&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
            </nav>
        </div>
        <!--banner结束-->
        <!--银行卡开始-->
        <div class="bank">
            <ul>
                <li>
                    <router-link to="IndexBank">
                        <span style="background:url(./static/images/type-1.png)"></span>
                        <div>
                            <h1>银行卡支付</h1>
                            <h4>使用绑定的银行卡可在线支付</h4>
                        </div>
                        <b>3</b>
                    </router-link>
                </li>
                <li>
                    <router-link to="IndexBank">
                        <span style="background:url(./static/images/type-2.png)"></span>
                        <div>
                            <h1>本地钱包支付</h1>
                            <h4>使用本地钱包可获得更大优惠</h4>
                        </div>
                        <b style="background: url(./static/images/type-hot.png) no-repeat center center;"></b>
                    </router-link>
                </li>
                <li>
                    <router-link to="IndexBank">
                        <span style="background:url(./static/images/type-3.png)"></span>
                        <div>
                            <h1>货到付款</h1>
                            <h4>选择货到付款提交订单后完成此次操作</h4>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--银行卡结束-->
        <!--支付开始-->
        <swiper :options="paybank" class="pay-bank">
            <!--此处插槽需要查看Vue-Awesome-Swiper源码-->
                <h1 slot="parallax-bg">
                    <span style="background:url(./static/images/type-line.png) no-repeat 0 center;"></span>
                    第三方支付
                    <span style="background:url(./static/images/type-line.png) no-repeat 0 center;"></span>
                </h1>
            <swiper-slide v-for="item in background" :key="item.key">
                <a :style="item"></a>
            </swiper-slide>
        </swiper>
        <!--支付结束-->
        <!--底部开始-->
        <footer class="foot">
            <div class="know message" style="padding-top: 0;border:0;">
                <li>
                    <p style="width:100%;text-align: center;color: #999;font-size: 14px;">本地钱包支付保障您的支付安全</p>
                    <p style="width:100%;text-align: center;color: #999;font-size: 10px;">Hui wallet wallet payment to protect your financial security</p>
                    <p style="width:0.66rem;height:0.06rem;background: #E5E5E5;margin:0.1rem auto;"></p>
                </li>
            </div>
        </footer>
    </div>
</template>

    <!--底部结束-->
 
    <script>
import './css/index-pay.css';
export default {
    data() {
        return {
            background: {
                background1: 'background:url(./static/images/type-zhifu.png) no-repeat center center;',
                background2: 'background:url(./static/images/pay-wx.png) no-repeat center center;',
                background3: 'background:url(./static/images/pay-qq.png) no-repeat center center;'
            },
            paybank: {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                paginationClickable: true
            }
        }
    }
}

</script>

