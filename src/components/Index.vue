<template>
    <div>
        <div class="shanping">
            <swiper class="sp" :options="begin">
                <swiper-slide class="swiper-slide sp-1">
                    <img src="./images/shanpz1.jpg" alt="">
                    <div class="tzz">
                        <router-link to="/">
                            跳转
                        </router-link>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide sp-1">
                    <img src="./images/shanpz2.jpg" alt="">
                    <div class="tzz">
                        <router-link to="/">
                            跳转
                        </router-link>
                    </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide sp-pb sp-1">
                    <img src="./images/shanpz3.jpg" alt="">
                    <div class="tzz">
                        <router-link to="/">
                            跳转
                        </router-link>
                    </div>
                    <div class="tzs">
                        <router-link to="/">
                            <img src="./images/butcc.png" alt="">
                        </router-link>
                    </div>
                </swiper-slide>
                <div slot="pagination" class="swiper-pagination dians">
                </div>
            </swiper>
        </div>
        <!--header开始-->
        <header class="index-header">
            <nav>
                <div class="left">
                    <router-link to="travels1">西安<img src="./images/index-gobottom.png" alt=""></router-link>
                </div>
                <div class="center">
                    <router-link to="search"><img src="./images/index-search.png" alt=""></router-link>
                    <input type="text" placeholder="搜索你要去的国家和城市">
                    <router-link to="voice"><img src="./images/index-lesian.png" alt=""></router-link>
                </div>
                <div class="right">
                    <router-link to="/"><img src="./images/index-phone.png" alt=""></router-link>
                    <router-link to="login"><img src="./images/index-login.png" alt=""></router-link>
                </div>
            </nav>
        </header>
        <!--header结束-->
        <div class="index-box">
            <!--banner开始-->
            <swiper :options="banner" class="index-banner">
                <swiper-slide v-for="(item,index) in img" :key="index">
                    <router-link to="travels1"><img src="./images/index-banner.jpg" alt=""></router-link>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!--banner结束-->
            <!--list开始-->
            <section class="index-list">
                <ul>
                    <li>
                        <router-link to="travel" style="background-position: -5px 1px"></router-link>
                        <p>旅游</p>
                    </li>
                    <li>
                        <router-link to="destination" style="background-position: -1.36rem 1px"></router-link>
                        <p>攻略</p>
                    </li>
                    <li>
                        <router-link to="PlaneTicket" style="background-position: -2.65rem 1px"></router-link>
                        <p>机票</p>
                    </li>
                    <li>
                        <router-link to="GrzList" style="background-position: -3.95rem 1px"></router-link>
                        <p>酒店</p>
                    </li>
                    <li>
                        <router-link to="More" style="background-position: -5.25rem 1px"></router-link>
                        <p>更多</p>
                    </li>
                </ul>
            </section>
            <!--list结束-->
            <!--玩吧品牌开始-->
            <section class="index-section index-wbpp">
                <div class="title">
                    <h3>HOTRECO
                        <span>MMENDED</span>
                    </h3>
                    <h4>玩吧品牌</h4>
                </div>
                <ul class="list">
                    <li class="active">
                        <div class="img"></div>
                        <div class="text">
                            <p>出境游</p>
                            <p>LET’PLAY</p>
                        </div>
                    </li>
                    <li>
                        <div class="img" style="background-position: center 50%"></div>
                        <div class="text">
                            <p>国内游</p>
                            <p>LET’PLAY</p>
                        </div>
                    </li>
                    <li>
                        <div class="img" style="background-position: right"></div>
                        <div class="text">
                            <p>周边游</p>
                            <p>LET’PLAY</p>
                        </div>
                    </li>
                </ul>
                <div class="cont">
                    <div class="fu">
                        <ul class="active">
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp1.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp2.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp3.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp1.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp2.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp3.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>

                        </ul>
                        <ul>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp1.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp2.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <router-link to="travels1" class="big-img" style="background: url(./static/images/index-pp3.png) no-repeat center/cover">
                                    <img src="./images/index-pp-rqbp.png" alt="">
                                    <span class="text">
                                        <span>定制/跟团</span>
                                        <span>新品上线</span>
                                    </span>
                                </router-link>
                                <div class="titles">
                                    <div class="left">
                                        <h5>日本-东京-富士山</h5>
                                        <p>富士山本日本人民誉为“圣岳”，是日本名族的象征。</p>
                                    </div>
                                    <p class="right">
                                        RMB
                                        <span>8669</span>
                                    </p>
                                </div>
                                <div class="message">
                                    <p class="left">
                                        <span>全城无自费</span>
                                        <span>一价全含</span>
                                        <span>温泉酒店</span>
                                    </p>
                                    <p class="right">
                                        <router-link to="travels1"><img src="./images/index-message.png" alt="">37585人出游</router-link>
                                        <router-link to="travels1"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
            <!--玩吧品牌结束-->
            <!--热门推荐开始-->
            <section class="index-section index-hot">
                <div class="title">
                    <h3>HOTRECO
                        <span>MMENDED</span>
                    </h3>
                    <h4>热门推荐</h4>
                </div>
                <ul class="cont">
                    <li>
                        <div class="left" style="background: url(./static/images/index-hot1_03.png)  center/cover">
                            <router-link to="traveldetail"></router-link>
                        </div>
                        <div class="right">
                            <div class="top">
                                <h5>泰国-曼谷-芭提雅</h5>
                                <p>万人出游热销线，两千多好评冬季躲霾出访微笑国度</p>
                            </div>
                            <div class="bottom">
                                <p class="left">
                                    RMB
                                    <span>8699</span>起
                                </p>
                                <p class="right">
                                    <router-link to="traveldetail"><img src="./images/index-message.png" alt="">66人出游</router-link>
                                    <router-link to="traveldetail"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    <span>温泉酒店</span>
                                    <span>主题乐园</span>
                                </p>
                            </div>
                        </div>
                        <img src="./images/index-hot-img_03.png" alt="" class="images">
                    </li>
                    <li>
                        <div class="left" style="background: url(./static/images/index-hot2_03.png)  center/cover">
                            <router-link to="traveldetail"></router-link>
                        </div>
                        <div class="right">
                            <div class="top">
                                <h5>泰国-曼谷-芭提雅</h5>
                                <p>万人出游热销线，两千多好评冬季躲霾出访微笑国度</p>
                            </div>
                            <div class="bottom">
                                <p class="left">
                                    RMB
                                    <span>8699</span>起
                                </p>
                                <p class="right">
                                    <router-link to="traveldetail"><img src="./images/index-message.png" alt="">66人出游</router-link>
                                    <router-link to="traveldetail"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    <span>温泉酒店</span>
                                    <span>主题乐园</span>
                                </p>
                            </div>
                        </div>
                        <img src="./images/index-hot-img_03.png" alt="" class="images">
                    </li>
                    <li>
                        <div class="left" style="background: url(./static/images/index-hot3_03.png)  center/cover">
                            <router-link to="traveldetail"></router-link>
                        </div>
                        <div class="right">
                            <div class="top">
                                <h5>泰国-曼谷-芭提雅</h5>
                                <p>万人出游热销线，两千多好评冬季躲霾出访微笑国度</p>
                            </div>
                            <div class="bottom">
                                <p class="left">
                                    RMB
                                    <span>8699</span>起
                                </p>
                                <p class="right">
                                    <router-link to="traveldetail"><img src="./images/index-message.png" alt="">66人出游</router-link>
                                    <router-link to="traveldetail"><img src="./images/index-like.png" alt="">100%满意</router-link>
                                    <span>温泉酒店</span>
                                    <span>主题乐园</span>
                                </p>
                            </div>
                        </div>
                        <img src="./images/index-hot-img_03.png" alt="" class="images">
                    </li>
                </ul>
            </section>
            <!--热门推荐结束-->
            <!--发现精彩开始-->
            <section class="index-section index-fxjc">
                <div class="title">
                    <h3>HOTRECO
                        <span>MMENDED</span>
                    </h3>
                    <h4>发现精彩</h4>
                </div>
                <swiper class="cont" :options="hotreco">
                    <swiper-slide v-for="(item,index) in cont" :key="index" style="background:url(./static/images/index-fxjc1_03.png) no-repeat center/cover">
                        <router-link to="travel">
                            <div class="contents">奈良神鹿公园</div>
                        </router-link>
                    </swiper-slide>
                </swiper>
            </section>
            <!--发现精彩结束-->
            <!-- 猜你喜欢开始 -->
            <section class="index-section index-youlike">
                <div class="title">
                    <h3>HOTRECO
                        <span>MMENDED</span>
                    </h3>
                    <h4>猜你喜欢</h4>
                </div>
                <ul class="cont">
                    <li>
                        <router-link to="travels1" style="background:url(./static/images/index-yuolike1_03.png) no-repeat center/cover">
                            <div class="text">
                                <h5>北京故宫</h5>
                                <p>西湖位于杭州市西面，是中国著名旅游景点。</p>
                                <p><img src="./images/index-wether.png" alt="">20゜/25゜</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="travels1" style="background:url(./static/images/index-youlike2_03.png) no-repeat center/cover">
                            <div class="text">
                                <h5>海底探险</h5>
                                <p>西湖位于杭州市西面，是中国著名旅游景点。</p>
                                <p><img src="./images/index-wether.png" alt="">20゜/25゜</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="travels1" style="background:url(./static/images/index-youlike3_02.png) no-repeat center/cover">
                            <div class="text">
                                <h5>十里荷花</h5>
                                <p>西湖位于杭州市西面，是中国著名旅游景点。</p>
                                <p><img src="./images/index-wether.png" alt="">20゜/25゜</p>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="travels1" style="background:url(./static/images/index-youlike4_03.png) no-repeat center/cover">
                            <div class="text">
                                <h5>大唐芙蓉园</h5>
                                <p>西湖位于杭州市西面，是中国著名旅游景点。</p>
                                <p><img src="./images/index-wether.png" alt="">20゜/25゜</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </section>
        </div>
        <!-- 猜你喜欢结束 -->
        <com-footer></com-footer>
    </div>
</template>
<style src="./css/sy.css">

</style>
<style src="./css/index.css">

</style>

<script >
// import './css/index.css'
import Vue from "vue";
import ComFooter from "./ComFooter";
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Component from "vue-class-component";
@Component({
  components: {
    ComFooter
  }
})
export default class Index extends Vue {
  begin = {
    speed: 300, //设置滑动速度
    autoplay: 2000, //可选选项，自动滑动
    pagination: ".swiper-pagination",
    threshold: 100,
    observer: true,
    observeParents: true,
    autoplayDisableOnInteraction: false,
    ininialSlide: 0 //起始图片切换的索引位置（起始从0开始，默认为0）
  };
  banner = {
    autoplay: 2000,
    loop: true,
    observer: true,
    observeParents: true,
    effect: "flip",
    flip: {
      slideShadows: true,
      limitRotation: true
    },
    // 如果需要分页器
    pagination: ".swiper-pagination"
  };
  hotreco = {
    pagination: ".swiper-pagination",
    slidesPerView: 1.5,
    paginationClickable: true,
    spaceBetween: 34
  };
  cont = [1, 2, 3, 4, 5];
  img = [1, 2, 3];
  mounted() {
    this.start();
    // this.lunbo();
    this.autoTop();
    // this.setData()
    this.qiehuan();
  }

  start() {
    var shanPing = document.querySelector(".shanping");
    var dians = document.querySelector(".dians");
    var t3 = null;
    var bian = true;
    var t2 = window.setInterval(function() {
      var b1 = document.querySelector(".swiper-slide-active");
      var b2 = document.querySelector(".sp-pb");
      if (b1 === b2) {
        dians.style.display = "none";
        if (bian == true) {
          bian = false;
          t3 = window.setTimeout(function() {
            //循环，触摸跳的地址
            shanPing.style.display = "none";
            // location.href="shouye.html";
          }, 2200);
        }
      } else {
        dians.style.display = "block";
        window.clearInterval(t3);
        bian = true;
      }
    }, 20);
    var tzhehes = document.querySelector(".tzs");
    var tzhehe1s = document.querySelector(".tzs a");
    tzhehes.addEventListener("touchstart", function() {
      window.clearInterval(t2);
      window.clearInterval(t3);
      // 点击跳的地址
      shanPing.style.display = "none";
      // location.href="shouye.html";
    });

    if (sessionStorage.getItem("lei")) {
      shanPing.style.display = "none";
    } else {
      sessionStorage.setItem("lei", "ss");
    }
  }
  autoTop() {
    /*总父容器高度*/
    function boxH() {
      let index_box = document.querySelector(".index-box");
      let index_footer = document.querySelector(".index-footer");
      index_box.style.height =
        document.body.clientHeight - index_footer.clientHeight + "px";
      index_box.addEventListener("scroll", () => {
        let index_header = document.querySelector(".index-header");
        let index_list = document.querySelector(".index-list");
        if (index_box.scrollTop >= index_list.offsetTop) {
          index_header.style.background = "rgba(0,0,0,0.8)";
        } else {
          index_header.style.background = "rgba(0,0,0,0)";
        }
      });
    }
    boxH();
    /*顶栏颜色的变化*/
    window.addEventListener("resize", () => {
      boxH();
    });
  }
  /*玩吧品牌*/
  qiehuan() {
    let wbpp = document.querySelector(".index-wbpp"); //获得大容器
    let list = document.querySelectorAll(".index-wbpp .list li"); //获得上方按钮
    let cont = document.querySelector(".index-wbpp .cont"); //获得内容区域父容器
    let contFu = document.querySelector(".index-wbpp .cont .fu");
    let contList = document.querySelectorAll(".index-wbpp .cont ul"); //获得选项卡
    // list.length
    function cws() {
      contFu.style.width = cont.clientWidth * list.length + "px";
      for (let i = 0; i < contList.length; i++) {
        contList[i].style.width = cont.clientWidth + "px";
      }
    }
    cws();
    window.addEventListener("resize", () => {
      cws();
    });
    for (let i = 0; i < list.length; i++) {
      list[i].index = i;
      list[i].onclick = function(e) {
        for (let j = 0; j < list.length; j++) {
          list[j].classList.remove("active");
        }
        this.classList.add("active");
        contFu.style.cssText =
          "transform:translate3d(" +
          -cont.clientWidth * this.index +
          "px,0,0);-webkit-transform:translate3d(" +
          -cont.clientWidth * this.index +
          "px,0,0)";
        cws();
      };
    }
  }
}
</script>

