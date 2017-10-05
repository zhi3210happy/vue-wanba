<template>
    <div>
        <!--标题栏start-->
        <header class="head">
            <router-link to="grzlist">
                <img src="./images/grz-images/back.png" alt="">
            </router-link>
        </header>
        <section class="search">
            <div class="serachItems">
                <div class="select">
                    <div class="left">
                        <a class="active">国内酒店</a>
                    </div>
                    <div class="right">
                        <a>国际酒店</a>
                    </div>
                </div>
                <div class="wrap">
                    <ul class="content">
                        <li>
                            <router-link to="grzdetal">
                                <span>附近</span>
                                <img src="./images/grz-images/go.png" alt="">
                            </router-link>
                            <router-link to="grzlocation">
                                <span>我的位置</span>
                                <img src="./images/grz-images/position.png" alt="">
                            </router-link>
                        </li>
                        <li class="date">
                            <div>
                                <div>入住</div>
                                <span> 3月14日</span>
                                <span>今天</span>
                            </div>
                            <div>
                                <div>离店</div>
                                <span> 3月15日</span>
                                <span>明天</span>
                            </div>
                            <div class="holdnum">1晚</div>
                        </li>
                        <li>
                            <a>
                                <span>酒店名/位置</span>
                            </a>
                            <a>
                                <img src="./images/grz-images/go.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>档次/星级/价格</span>
                            </a>
                            <a>
                                <img src="./images/grz-images/go.png" alt="">
                            </a>
                        </li>
                    </ul>
                    <ul class="content">
                        <li>
                            <a>
                                <span></span>
                                <img src="" style="display:none">
                            </a>
                            <a>
                                <span>我的位置</span>
                                <img src="./images/grz-images/position.png" alt="">
                            </a>
                        </li>
                        <li class="date">
                            <div>
                                <div>入住</div>
                                <span> 3月14日</span>
                                <span>今天</span>
                            </div>
                            <div>
                                <div>离店</div>
                                <span> 3月15日</span>
                                <span>明天</span>
                            </div>
                            <div class="holdnum">1晚</div>
                        </li>
                        <li>
                            <a>
                                <span>酒店名/位置</span>
                            </a>
                            <a>
                                <img src="./images/grz-images/go.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a>
                                <span>档次/星级/价格</span>
                            </a>
                            <a>
                                <img src="./images/grz-images/go.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
                <router-link to="GrzDetal" class="query">
                    <img src="./images/grz-images/query.png" alt="">
                </router-link>
            </div>
        </section>
    </div>
</template>

<style src="./css/grz-css/hotel-index.css" scoped>

</style>

<script >
export default {
    mounted() {
        this.start()
    },
    methods: {
        start() {
            var selects = document.querySelectorAll('.select  a');
            var wrap = document.querySelector(".wrap");
            for (var i = 0; i < selects.length; i++) {
                selects[i].index = i;
                selects[i].onclick = function() {
                    for (var j = 0; j < selects.length; j++) {
                        selects[j].classList.remove('active')
                    }
                    wrap.style.transform = "translateX(-" + this.index * 50 + "%)"
                    this.classList.add('active');
                }
            }
        }

    }
}
</script>
<!--标题栏end-->
