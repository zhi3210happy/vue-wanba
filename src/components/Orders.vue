<template>
    <!--头部开始-->
    <div>
        <header id="yi-header">
            <div id="left">
                <router-link to="aboutme">
                    <img src="./images/yi-back.png" alt="">
                </router-link>
            </div>
            <div class="titles">
                <b>SUBMIT ORDERS</b>
                <div class="bottom">
                    <span></span>
                    <span></span>
                    <p>全部订单</p>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
        <!--头部结束-->
        <div id="yi-Body">
            <!--列表开始-->
            <section id="yi-list">
                <b>日本-东京-富士山
                    <7晚8日游>
                </b>
                <p>1晚温泉酒店，1天东京自由活动，清水寺，奈良神鹿公园伊豆城崎海岸， 樱桃小丸子乐园......
                </p>
                <div class="bottom">
                    <span>出发日期：2017年-03-15</span>
                    <span>出游人数：2成人</span>
                </div>
                <div class="xia">
                    <router-link to="AboutMe">已取消</router-link>
                    <router-link to="OrdersDetail">查看订单</router-link>
                </div>
                <a  id="tuan">
                    跟团游
                </a>
            </section>
            <!--列表结束-->

        </div>
    </div>
</template>

<style src="./css/yi-orders.css" scoped>

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
            bodys.style.height = lists - toph - 10 + "px"
        }
    }
}

</script>
