<template>
    <div>
        <!--头部开始-->
        <section class="yi-top">
            <a  id="close">
                <img src="./images/yi-close.png" alt="">
            </a>
            <div class="yi-bottom">
                <div class="left">
                    <div class="yuan">
                        <img src="./images/yi-yuan1.png" alt="">
                    </div>
                    <span>玩吧</span>
                    <div class="yi-opa"></div>
                </div>
                <div class="right">
                    <h1>VOICE INPUT</h1>
                    <span>玩吧畅享旅游</span>
                    <p>有一个地方去过才知道</p>
                    <span>欢迎来到......</span>
                </div>
            </div>
        </section>
        <!--头部结束-->
        <!--中间开始-->
        <section class="yi-yuyin1">
            <h1>
                0.00
            </h1>
            <!--上下进度条-->
            <div class="tiao">
                <ul>
                    <li v-for="(item,index) in li" :key="index">
                        <div></div>
                    </li>
                </ul>
            </div>
            <div class="yubtn">
                <!--对号-->
                <div class="jian">
                    <div class="left">
                        <a>
                            <img src="./images/yi-guanbi.png" alt="">
                        </a>
                    </div>
                    <div class="right">
                        <a>
                            <img src="./images/yi-dui.png" alt="">
                        </a>
                    </div>
                </div>

                <div class="yintiao">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <a>
                    <div class="zhuan">
                    </div>
                </a>
            </div>
            <div class="text-1">
                <span>单击进行讲话</span>
                <p>CLICK&nbsp;TO&nbsp;SPEAK</p>
            </div>
        </section>
        <!--中间结束-->
        <!--底部开始-->
        <section id="yi-bottom">
            <img src="./images/yi-dibu.png" alt="">
        </section>
        <!--底部结束-->
        <!--遮罩开始-->
        <section class="yi-dask">
            <div class="tishibox">
                <div class="yi-logo">
                    <img src="./images/yi-dog.png" alt="">
                </div>
                <div class="yi-bottom">
                    <div class="top" style="background: url(./static/images/yi-reckss.png)no-repeat center center">
                        <div></div>
                    </div>
                    <div class="zhong-1">
                        <span>小主请再说一次</span>
                        <div class="duan">
                            <span></span>
                            <span></span>
                            <span id="spans">录制时间太短了哦</span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="bottom-1">
                        <div>
                            <a>
                                <img src="./images/yi-aa.png" alt="">
                                <span id="yi-suo">语音录制</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <img src="./images/yi-text.png" alt="">
                                <span id="yi-suo">文字输入</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--遮罩结束-->

        <!--网络连接失败开始-->
        <section class="yi-dask">
            <div class="tishibox">
                <div class="yi-logo">
                    <img src="./images/yi-dog2.png" alt="">
                </div>
                <div class="yi-bottom">
                    <div class="top" style="background: url(./static/images/yi-reckss.png)no-repeat center center">
                        <div></div>
                    </div>
                    <div class="zhong-1">
                        <span>没有连接到网络</span>
                        <div class="duan">
                            <span></span>
                            <span></span>
                            <span id="spans">请检查你的网络哦</span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="bottom-1">
                        <div>
                            <a>
                                <img src="./images/yi-wifi.png" alt="">
                                <span id="yi-suo">连接wifi</span>
                            </a>
                        </div>
                        <div>
                            <a>
                                <img src="./images/yi-shuju.png" alt="">
                                <span id="yi-suo">数据连接</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<!--网络连接失败结束-->
<style src="./css/yi-yuyin.css" scoped></style>
<script>
export default {
    data() {
     return{

     }
    },
    computed: {
        li() {
            let li = [];
            for (let i = 0; i < 17; i++) {
                li.push(i)
            };
            return li
        }
    },
    mounted() {
        this.start()
        this.goback()
    },
    methods: {
        goback() {
            const back = document.querySelector('#close');
            back.onclick = () => this.$router.go(-1)
        },
        start() {
            var btn = document.querySelector('.yi-yuyin1 .yubtn .yintiao');
            var text = document.querySelector('.yi-yuyin1 h1');
            var zhuan = document.querySelector('.zhuan');
            var lis = document.querySelectorAll('.yi-yuyin1 .tiao ul li div');
            var speak = document.querySelector('.text-1 span');
            var dask = document.querySelectorAll('.yi-dask')[0];
            var dask2 = document.querySelectorAll('.yi-dask')[1];
            var jian = document.querySelector('.yubtn .jian');
            var close = document.querySelector('.yubtn .jian .left');
            var dui = document.querySelector('.yubtn .jian .right');

            //为了使用全局变量，所以此处定时器和时间挂载到了Vue的原型上
            btn.addEventListener('touchstart', ()=>{
                this.time=new Date().getTime();
                zhuan.style.transform = "rotate(360deg)";
                speak.innerHTML = "抬起结束讲话";
                var shijiancha = Math.random() * 0.1 + 0.25;
                this.setInterval=setInterval(()=> {
                    for (var i = 0; i < lis.length; i++) {
                        lis[i].style.height = Math.random() * 90 + "%";
                        lis[i].style.transition = "all " + shijiancha + "+s";
                        lis[i].style.backgroundImage = "linear-gradient(180deg,#E081B6,#58B2E2)";
                    }
                }, 100);
            });
            btn.addEventListener('touchend', ()=>{
                clearInterval(this.setInterval);
                var newdate = new Date().getTime();
                var cha = (newdate - this.time) / 1000;
                text.innerHTML = cha.toFixed(2);
                zhuan.style.transform = "rotate(0deg)";
                speak.innerHTML = "按下开始讲话";

                if (cha < 1) {
                    dask.style.display = "block";
                } else {
                    jian.style.display = "block";
                    //取消录音
                    close.addEventListener('touchstart', function() {
                        jian.style.display = "none";
                        text.innerHTML = "0.00";
                        for (var i = 0; i < lis.length; i++) {
                            lis[i].style.height = 0.32 + "rem";
                            lis[i].style.transition = "all 0.2s";
                            lis[i].style.backgroundImage = "linear-gradient(180deg,#C7C7C7,#959494)";
                        }
                    });
                }


            });
            dask.addEventListener('touchend', function() {
                dask.style.display = "none";
                for (var i = 0; i < lis.length; i++) {
                    lis[i].style.height = 0.32 + "rem";
                    lis[i].style.transition = "all 0.2s";
                    lis[i].style.backgroundImage = "linear-gradient(180deg,#C7C7C7,#959494)";
                }
                setTimeout(function() {
                    text.innerHTML = "0.00";

                }, 400)

            });
            /*没有网络*/

            // $.ajaxSetup({
            //     timeout: 1, // 1秒超时
            //     error: function(request, status, maybe_an_exception_object) {
            //         if(status == 'timeout')
            //             // alert("网断了");
            //         dask2.style.display="block";
            //     }
            // });
            dask2.addEventListener('touchend', function() {
                dask2.style.display = "none";
            });
        }
    }
}
</script>
