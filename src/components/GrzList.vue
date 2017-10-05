
<template>
    <div>
        <header class="list-head">
            <router-link to="/">
                <img src="./images/grz-images/back.png" alt="">
            </router-link>
            <input type="text" placeholder="酒店名/位置">
            <router-link to="grzhotel">
                <img src="./images/grz-images/pos.png" alt="">
            </router-link>
        </header>
        <!--tap end-->
        <!--选项卡 start-->
        <section class="tiks">
            <div class="item">
                <span>推荐排序</span>
                <img src="./images/grz-images/go.png" alt="">
                <ul class="lists">
                    <a href="javascript:;">
                        <li>
                            <span>推荐排序</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>评分高-->低</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>评分低-->高</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>距离近-->远</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>价格低-->高</span>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <span>星级价格</span>
                <img src="./images/grz-images/go.png" alt="">
                <ul class="lists">
                    <a href="javascript:;">
                        <li>
                            <span>不限</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>二星经济</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>三星舒适</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>四星高档</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>五星豪华</span>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <span>位置区域</span>
                <img src="./images/grz-images/go.png" alt="">
                <ul class="lists">
                    <a href="javascript:;">
                        <li>
                            <span>不限</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>东区</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>西区</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>南区</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>北区</span>
                        </li>
                    </a>
                </ul>
            </div>
            <div class="item">
                <span>特色</span>
                <img src="./images/grz-images/go.png" alt="">
                <ul class="lists">
                    <a href="javascript:;">
                        <li>
                            <span>不限</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>休闲度假</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>客栈名宿</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>购物便捷</span>
                        </li>
                    </a>
                    <a href="javascript:;">
                        <li>
                            <span>青年旅社</span>
                        </li>
                    </a>
                </ul>
            </div>
        </section>
        <!--选项卡 end-->
        <!--内容 start-->
        <section class="conbox">
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con1.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>太原三晋商务酒店</p>
                            <p>
                                <span class="colo">4.4分</span>
                                <span>已好评
                                    <span class="colo">300</span>次</span>
                            </p>
                            <p>
                                <span>舒适性</span>
                                <span>|</span>
                                <span>2012年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">285</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离1.9公里</span>
                            <span class="yd">1小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con2.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>锦江之星风尚</p>
                            <p>
                                <span class="colo">4.4分</span>
                                <span>已好评
                                    <span class="colo">167</span>次</span>
                            </p>
                            <p>
                                <span>经济型</span>
                                <span>|</span>
                                <span>2013年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">146</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离6公里</span>
                            <span class="yd">8小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con3.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>万达文华酒店</p>
                            <p>
                                <span class="colo">4.7分</span>
                                <span>已好评
                                    <span class="colo">234</span>次</span>
                            </p>
                            <p>
                                <span>豪华型</span>
                                <span>|</span>
                                <span>2012年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">673</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离5公里</span>
                            <span class="yd">8小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con4.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>太原丽华大酒店</p>
                            <p>
                                <span class="colo">4.6分</span>
                                <span>已好评
                                    <span class="colo">201</span>次</span>
                            </p>
                            <p>
                                <span>五星级</span>
                                <span>|</span>
                                <span>2015年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">689</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离3.6公里</span>
                            <span class="yd">6小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con5.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>太原并州饭店</p>
                            <p>
                                <span class="colo">4.5分</span>
                                <span>已好评
                                    <span class="colo">369</span>次</span>
                            </p>
                            <p>
                                <span>豪华型</span>
                                <span>|</span>
                                <span>2012年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">381</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离2.5公里</span>
                            <span class="yd">3小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con3.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>万达文华酒店</p>
                            <p>
                                <span class="colo">4.7分</span>
                                <span>已好评
                                    <span class="colo">234</span>次</span>
                            </p>
                            <p>
                                <span>豪华型</span>
                                <span>|</span>
                                <span>2012年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">673</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离5公里</span>
                            <span class="yd">8小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con4.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>太原丽华大酒店</p>
                            <p>
                                <span class="colo">4.6分</span>
                                <span>已好评
                                    <span class="colo">201</span>次</span>
                            </p>
                            <p>
                                <span>五星级</span>
                                <span>|</span>
                                <span>2015年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">689</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离3.6公里</span>
                            <span class="yd">6小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
            <router-link to="grzpay">
                <div class="con">
                    <div class="left">
                        <img src="./images/grz-images/con5.png" alt="">
                    </div>
                    <div class="right">
                        <div class="one">
                            <p>太原并州饭店</p>
                            <p>
                                <span class="colo">4.5分</span>
                                <span>已好评
                                    <span class="colo">369</span>次</span>
                            </p>
                            <p>
                                <span>豪华型</span>
                                <span>|</span>
                                <span>2012年装修</span>
                            </p>
                        </div>
                        <div class="two">
                            ￥
                            <span class="colo  hp">381</span>起
                        </div>
                        <p class="mess">
                            <span>距您直线距离2.5公里</span>
                            <span class="yd">3小时前有人预定</span>
                        </p>
                    </div>
                </div>
            </router-link>
        </section>
    </div>
</template>
<style src="./css/grz-css/list.css" scoped>

</style>

<!--内容 end-->
<script>
export default {
    mounted() {
    this.start()
    },
    methods: {
        start() {
            var items = document.querySelectorAll(".tiks .item");
            var flag = [false, false, false, false];
            //初始化
            for (var i = 0; i < items.length; i++) {
                var lis = items[i].querySelectorAll("li");
                for (var j = 0; j < lis.length; j++) {
                    bg2(lis[j]);
                }
                bg1(lis[0]);
            }
            //选项卡效果
            for (var i = 0; i < items.length; i++) {
                items[i].index = i;
                items[i].onclick = function(e) {
                    e.stopPropagation();//阻止事件流，防止事件向子元素扩散
                    for (var v = 0; v < flag.length; v++) {
                        if (v != this.index) {
                            flag[v] = false;
                            showif(flag[v]);
                        }
                    }
                    flag[this.index] = !flag[this.index];
                    var lis = items[this.index].querySelectorAll("li");
                    var imgs = items[this.index].querySelector("img");
                    if (flag[this.index]) {
                        imgs.style.transform = "rotate(90deg)";
                    }
                    for (var j = 0; j < lis.length; j++) {
                        lis[j].onclick = function() {
                            for (var k = 0; k < lis.length; k++) {
                                bg2(lis[k]);
                            }
                            bg1(this);
                        }
                        if (flag[this.index]) {
                            lis[j].style.height = "0.99rem";
                            lis[j].style.borderBottom = "1px solid #DBDBDB";
                            lis[j].style.transitionDelay = j / 20 + "s";
                        } else {
                            lis[j].style.height = "0";
                            lis[j].style.borderBottom = "";
                            lis[j].style.transitionDelay = j / 20 + "s";
                        }
                    }
                }
            }
            function bg1(obj) {
                obj.style.backgroundImage = "url(./static/images/ok.png)";
                obj.style.backgroundRepeat = "no-repeat"
                obj.style.backgroundPosition = "98% center";
                obj.style.backgroundSize = "6%";
            }
            function bg2(obj) {
                obj.style.background = "none";
            }
            function showif(flag) {
                for (var i = 0; i < items.length; i++) {
                    var lis = items[i].querySelectorAll("li");
                    var imgs = items[i].querySelector("img");
                    if (!flag) {
                        imgs.style.transform = "rotate(0)";
                    }
                    for (var j = 0; j < lis.length; j++) {
                        if (!flag) {
                            lis[j].style.height = "0";
                            lis[j].style.borderBottom = "";
                            lis[j].style.transitionDelay = j / 20 + "s";
                        }
                    }
                }
            }


        }
    }
}
</script>