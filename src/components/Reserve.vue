
<template>
    <div class="index-pay">
        <!--banner开始-->
        <div class="banner" style="background: url(./static/images/pay-banner.png) no-repeat center center;">
            <nav class="nav">
                <router-link to="travels1" class="back" style="background:url(./static/images/pay-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;提交订单&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
            </nav>
        </div>
        <!--banner结束-->
        <!--介绍开始-->
        <div class="introduce">
            <div class="teams" style="background: url(./static/images/pay-team.png) no-repeat 0 0;">跟团游</div>
            <figure>
                <a><img src="./image/pay-sence.png" alt=""></a>
            </figure>
            <div class="right">
                <div class="con">
                    <a>
                        <h1>日本-东京-富士山
                            <7晚8日游</h1>
                    </a>
                    <p>1晚温泉酒店，1天东京自由活动，清水寺，奈良神鹿公 园伊豆城崎海岸，樱桃小丸子乐园
                    </p>
                    <div class="tab">
                        <span>全程无自费</span>
                        <span>一价全含</span>
                    </div>
                </div>
                <div class="bottom">
                    <div class="date">
                        <span>出游日期：2017-03-15</span>
                        <span>出游人数：2成人</span>
                    </div>
                    <div class="price">
                        <span>RMB</span>
                        <b>8699</b>
                        <span>起</span>
                    </div>
                </div>
            </div>
        </div>
        <!--介绍结束-->
        <!--保险信息开始-->
        <div class="message">
            <div class="con">
                <div>
                    <h2>保险信息</h2>
                </div>
                <div>
                    <span class="messSpan"></span>
                    <h2>更改保险</h2>
                </div>
            </div>
            <ul>
                <li>
                    <p>意外险1 单价
                        <span>￥195/人</span>
                    </p>
                    <p>日本财险境外旅游升级版(适用于出游8-10天)</p>
                    <div class="flag">
                        <div class="dot"></div>
                    </div>
                    <router-link to="safe">
                        <p class="jt">
                            <span style="background:url(./static/images/pay-xiala.png) no-repeat center center;"></span>
                        </p>
                    </router-link>
                </li>
                <li>
                    <p>取消险1 单价
                        <span>￥150/人</span>
                    </p>
                    <p>太平洋旅游取消方案9</p>
                    <div class="flag">
                        <div class="dot"></div>
                    </div>
                    <router-link to="safe">
                        <p class="jt">
                            <span style="background:url(./static/images/pay-xiala.png) no-repeat center center;"></span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--保险信息结束-->
        <!--底部开始-->
        <footer class="foot">
            <div class="left">
                <p>支付金额：
                    <span>177338</span>
                </p>
                <p>首付出发：
                    <span>17668</span>
                </p>
            </div>
            <div class="right">
                <a>费用明细</a>
                <router-link to="IndexOrder">填写订单</router-link>
            </div>
        </footer>
        <!--底部结束-->
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
            var message = document.querySelector('.index-pay .message');
            var messSpan = document.querySelector('.index-pay .message .con div span');
            var flag = document.querySelectorAll('.index-pay .message .flag');
            var dot = document.querySelectorAll('.index-pay .message .dot');
            function dots(obj) {
                if (obj.style.left == (0 || '0px')) {
                    obj.style.left = '0.3rem';
                } else {
                    obj.style.left = 0;
                }
            }
            message.onclick = function(e) {
                var obj = e.target || event.target;
                if (obj.className == 'dot') {
                    dots(obj);
                    if (obj.parentNode.style.background !== "rgb(204, 204, 204)") {
                        obj.parentNode.style.background = "rgb(204, 204, 204)";
                    } else {
                        obj.parentNode.style.background = "#FF5A54";
                    }
                } else if (obj.className == 'flag') {
                    //此处应该为obj.childNodes[0]，因为此处文件是Vue而不是HTML,childNodes原本的第一个和最后一个text节点不存在。
                    dots(obj.childNodes[0]);
                    if (obj.style.background !== "rgb(204, 204, 204)") {
                        obj.style.background = "rgb(204, 204, 204)";
                    } else {
                        obj.style.background = "#FF5A54"
                    }
                } else if (obj.className == 'messSpan') {
                    if (obj.style.background == "") {
                        obj.style.background = '#FF5A54';
                    } else {
                        obj.style.background = "";
                    }
                    for (var i = 0; i < flag.length; i++) {
                        dots(dot[i]);
                    }
                } else {
                    return;
                }
            }

        }
    }
}
</script>
