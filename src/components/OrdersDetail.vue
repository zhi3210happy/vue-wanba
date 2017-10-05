
<template>
    <div>
        <!--头部开始-->
        <header id="yi-header">
            <div id="left">
                <router-link to="orders">
                    <img src="./images/yi-back.png" alt="">
                </router-link>
            </div>
            <div class="titles">
                <b>SUBMIT ORDERS</b>
                <div class="bottom">
                    <span></span>
                    <span></span>
                    <p>订单详情</p>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
        <!--头部结束-->
        <!--订单详情开始-->
        <div id="yi-Body">
            <ul class="yi-1">
                <a id="yi-jiantou">
                    <img src="./images/yi-showback.png" alt="">
                </a>
                <li>
                    <B>订单详情</B>
                    <P>订单号：1011874779</P>
                </li>
                <li>
                    <span>日本-东京-富士山
                        <7晚8日游>
                    </span>
                    <p>1晚温泉酒店，1天东京自由活动，清水寺，奈良神鹿公园伊 豆城崎海岸，樱桃小丸子乐园......
                    </p>
                </li>
                <li>
                    <span>订单金额：17388元</span>
                </li>
                <li>
                    <span>已支付金额：17388元</span>
                </li>
                <li>
                    <span>出发时间：2017-3-15</span>
                </li>
                <li>
                    <span>归来时间：2017-3-22</span>
                </li>
                <li>
                    出游人数：2人
                </li>
            </ul>
            <div class="line"></div>
            <ul class="yi-2">
                <li>
                    <B>单房差价</B>
                    <p>【单房差】日本-东京-富士山
                        <7晚8日游>
                    </p>
                    <p>1晚温泉酒店，1天东京自由活动，清水寺，奈良神鹿公园伊 豆城崎海岸，樱桃小丸子乐园。
                    </p>
                    <div class="bottom">
                        <span>成人价：1800</span>
                        <span>儿童价：不加价</span>
                    </div>
                </li>
            </ul>
            <div class="line"></div>
            <ul class="yi-3">
                <a id="yi-jiantou" style="top: 0.3rem;">
                    <img src="./images/yi-showback.png" alt="">
                </a>
                <li>
                    <b>保险信息</b>
                    <P>太平洋保险旅程取消方案8</P>
                    <span>平安出境游精英型升级版（适应于7天以内行程）</span>
                </li>
            </ul>
            <div class="line"></div>
            <ul class="yi-4">
                <li>
                    <b>游客信息</b>
                </li>
                <li>
                    <span>姓名：程丹</span>
                </li>
                <li>
                    <span>手机：18235338888</span>
                </li>
                <li>
                    <span>邮箱：378577629@.com</span>
                </li>
            </ul>
        </div>
    </div>
    <!--订单详情结束-->
</template>
<style src="./css/yi-dingshow.css" scoped>

</style>

<script>
export default {
    mounted() {
        this.start()
    },
    methods: {
        start() {
            var lists = document.documentElement.clientHeight;
            //    console.log(lists)
            var toph = document.querySelector("#yi-header").offsetHeight;
            var bodys = document.querySelector("#yi-Body");
            bodys.style.height = lists - toph + "px"
        }
    }
}
</script>
