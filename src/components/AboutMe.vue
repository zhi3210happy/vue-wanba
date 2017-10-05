<template>
    <div>
        <div class="Body">
            <!--头部开始-->
            <header class="yi-header">
                <div class="touxiang">
                    <div class="tou-2">
                        <div class="tou-3">
                            <a id="yuan">
                                <img src="./images/yi-touxiang.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
                <span>7325738291</span>
            </header>
            <!--头部结束-->
            <!--我的订单开始-->
            <section id="dingdan" style=" margin-top:-0.15rem;">
                <div class="top">
                    <b>我的订单</b>
                    <div style="background-color: #74ECFE;"></div>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <router-link to="Orders">
                            <img src="./images/yi-dingdan.png" alt="">
                        </router-link>
                        <span>全部订单</span>
                    </li>
                    <li>
                        <router-link to="pay">
                            <img src="./images/yi-fukuan.png" alt="">
                        </router-link>
                        <span>代付款</span>
                    </li>
                    <li>
                        <a>
                            <img src="./images/yi-date.png" alt="">
                        </a>
                        <span>代出行</span>
                    </li>
                    <li>
                        <a>
                            <img src="./images/yi-dian.png" alt="">
                        </a>
                        <span>代点评</span>
                    </li>
                </ul>
            </section>

            <!--我的订单结束-->
            <!--我的钱包开始-->
            <section id="dingdan">
                <div class="top">
                    <b>我的钱包</b>
                    <div style="background-color: #74ECFE;"></div>
                    <div></div>
                </div>
                <ul>
                    <li>
                        <a class="lists">
                            2张
                        </a>
                        <span>优惠券</span>
                    </li>
                    <li>
                        <a class="lists">
                            1张
                        </a>
                        <span>旅游券</span>
                    </li>
                    <li>
                        <a class="lists">
                            20元
                        </a>
                        <span>抵用券</span>
                    </li>
                </ul>
            </section>
            <!--我的钱包结束-->
            <!--我的专属开始-->
            <section id="dingdan">
                <div class="top">
                    <b>我的专属</b>
                    <div style="background-color: #74ECFE;"></div>
                    <div></div>
                </div>
                <ul id="uls">
                    <li>
                        <a>
                            <img src="./images/yi-guke.png" alt="">
                            <span>专属顾问</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./images/yi-ping.png" alt="">
                            <span>我的点评</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./images/yi-cang.png" alt="">
                            <span>我的收藏</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./images/yi-history.png" alt="">
                            <span>浏览历史</span>
                        </a>
                    </li>
                </ul>
            </section>
            <!--我的专属结束-->
            <!--猜你喜欢开始-->
            <section id="likes">
                <div class="top">
                    <b>猜你喜欢</b>
                    <div style="background-color: #74ECFE;"></div>
                    <div></div>
                </div>
                <ul class="cont">
                    <li>
                        <div class="left" style="background: url(./static/images/index-hot2_03.png)  center/cover">
                        </div>
                        <div class="right">
                            <div id="top">
                                <h5>泰国-曼谷-芭提雅</h5>
                                <p>万人出游热销线，两千多好评冬季躲霾出访微笑国度</p>
                            </div>
                            <div class="bottom">
                                <div class="left">
                                    RMB
                                    <span>8699</span>起
                                </div>
                                <div class="right">
                                    <a style="width: 48%"><img src="./images/index-message.png" alt="">66人出游</a>
                                    <a style="width: 52%;"><img src="./images/index-like.png" alt="">100%满意</a>
                                    <span>温泉酒店</span>
                                    <span>主题乐园</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <!--猜你喜欢结束-->
        </div>
        <!--底部开始-->
        <com-footers></com-footers>
    </div>
</template>    
<!--底部结束-->
<script>
import ComFooters from './ComFooter'
export default {
    components: {
        ComFooters
    }
}
</script>

<style src="./css/yi-aboutme.css" scoped>

</style>