<template>
    <div class="index-order index-pay">
        <!--banner开始-->
        <div class="banner">
            <nav class="nav">
                <router-link to="Reserve" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;填写订单&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
            </nav>
        </div>
        <!--banner结束-->
        <!--保险信息开始-->
        <div class="message">
            <div class="con">
                <div>
                    <h2>预定人信息</h2>
                </div>
            </div>
            <ul>
                <li>
                    <p>姓名：
                        <span contenteditable="true">必填</span>
                    </p>
                </li>
                <li>
                    <p>手机：
                        <span contenteditable="true" style="color:#03FB03; ">+18&nbsp;></span>
                    </p>
                </li>
                <li>
                    <p>邮箱：
                        <span contenteditable="true"></span>
                    </p>
                </li>
            </ul>
        </div>
        <div class="message">
            <div class="con">
                <div>
                    <h2>游客信息</h2>
                </div>
                <div class="common">
                    <h4>常用旅客</h4>
                    <p>
                        <b>&gt;</b>
                    </p>
                </div>
            </div>
            <ul>
                <li>
                    <p>游客1：
                        <span contenteditable="true"></span>
                    </p>
                </li>
                <li>
                    <p>游客1：
                        <span contenteditable="true" style="color:#03FB03; "></span>
                    </p>
                </li>
                <li class="warn">
                    <p>由于信息填写不完整、填写不正确造成的额外损失、保险拒赔等问题，我司不承担相应责任，需游客自行承担。</p>
                </li>
            </ul>
        </div>
        <div class="message">
            <div class="con">
                <div>
                    <h2>出游人群限制</h2>
                </div>
            </div>
            <ul>
                <li class="warn">
                    <p>本产品不支持孕妇出游</p>
                </li>
                <li class="warn">
                    <p>不接受大于80周岁（含）出游人</p>
                </li>
                <li class="warn">
                    <p>不接受全是未成年人出游</p>
                </li>
                <li class="warn">
                    <div class="flag" style="margin:0.06rem 0.1rem 0 0;">
                        <div class="dot"></div>
                    </div>
                    <p style="width:89%;">我承认全部出游人都满足出游条件</p>
                </li>
            </ul>
        </div>
        <div class="message">
            <div class="con">
                <div>
                    <h2>签证材料确认</h2>
                </div>
            </div>
            <ul>
                <li class="warn">
                    <p>日本ADS团队签证-太原日本</p>
                </li>
                <li class="warn">
                    <p>选择递交材料门市</p>
                </li>
                <li class="warn">
                    <p>太原玩吧国际旅行社有限公司</p>
                </li>
            </ul>
        </div>
        <!--保险信息结束-->
        <!--底部开始-->
        <footer class="foot">
            <div class="know message" style="padding-top: 0;">
                <li>
                    <div class="flag" style="margin:0.16rem 0.1rem 0 0;">
                        <div class="dot"></div>
                    </div>
                    <p style="width: 89%; float: left;">我已阅读签证材料信息且可提供所需签证材料，并接受
                        <span style="color: #03FB03">预订须知、合同、保险等条款</span>
                    </p>
                </li>
            </div>
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
                <router-link to="IndexType">立即付款</router-link>
            </div>
        </footer>
        <!--底部结束-->
    </div>
</template>
<style src="./css/index-pay.css" scoped>

</style>

<script>
export default {
  
}
</script>

