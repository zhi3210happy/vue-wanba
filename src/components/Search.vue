
<template>
    <div class="search-search">
        <!-- 头部开始 -->
        <header class="wgb-head">
            <section class="left">
                <router-link to="/">
                    <img src="./image/jt.png" alt="">
                </router-link>
            </section>
            <section class="middle">
                <section>
                    <input type="text" placeholder="搜索你要去得国家和城市">
                    <router-link to="/voice"></router-link>
                </section>
            </section>
            <section class="right">
                <a href="javascript:;" id="cx">
                    <img src="./image/fdj.png" alt="">

                </a>
            </section>

        </header>
        <!-- 搜索 -->
        <section class="wgbz">
            <section class="sgj">
                <a href="">
                    <span>马尔</span>代夫</a>
                <a href="">马来西亚</a>
                <a href="">马达加斯加</a>
                <a href="">马里亚群岛</a>
                <a href="">马里亚纳群岛</a>
                <a href="">马德里</a>

            </section>
        </section>
        <!-- 搜索 -->
        <!-- 搜索历史显示 -->

        <section class='wgb-search historys'>
            <section class="top1">
                <section class="title">
                    <img src="./image/lsjl.png" alt="">
                </section>
                <section class="nav">
                    <a href="javascript:;">
                        <span></span>
                        <span>泰国—曼谷-芭提雅</span>
                    </a>
                    <a href="javascript:;">
                        <span></span>
                        <span>日本-富士山</span>
                    </a>
                    <a href="javascript:;">
                        <span></span>
                        <span>西安-兵马俑</span>
                    </a>
                    <a href="javascript:;">
                        <span></span>
                        <span>云南-丽江古城</span>
                    </a>

                </section>
            </section>

            <section class="qk top1">
                <section class="title">
                    <img src="./image/rq.png" alt="">
                </section>
                <section class="nav">
                    <a href="javascript:;">
                        <span></span>
                        <span>山西-壶口瀑布</span>
                    </a>
                    <a href="javascript:;">
                        <span></span>
                        <span>法国-埃菲尔铁塔</span>
                    </a>

                    <a href="javascript:;" class="del" style="height:0.8rem,margin-top:0.2rem">
                        <span></span>
                        <span class="clears">清空历史记录</span>
                    </a>

                </section>

            </section>

        </section>

        <!-- 热门搜索开始 -->

        <section class="wgb-rm">
            <section class="top">
                <img src="./image/hot.png" alt="">
            </section>
            <section class="bottom">
                <section class="w w1">
                    <router-link to="searchlist">
                        <img src="./image/xm.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/yn.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/xa.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/xm.png" alt="">
                    </router-link>
                </section>
                <section class="w w2">
                    <router-link to="searchlist">
                        <img src="./image/bld.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/gl.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/pjd.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/cd.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/wts.png" alt="">
                    </router-link>
                </section>
                <section class="w w3">
                    <router-link to="searchlist">
                        <img src="./image/mrdf.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/xg.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/am.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/mlqs.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/sh.png" alt="">
                    </router-link>
                </section>
                <section class="w w4">
                    <router-link to="searchlist">
                        <img src="./image/sy.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/hs.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/ls.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/erds.png" alt="">
                    </router-link>
                </section>
            </section>

        </section>

        <!-- 为你推荐开始 -->
        <section class="wgb-tj">

            <section class="top">
                <img src="./image/wntj111.png" alt="">
            </section>

            <section class="bottom">
                <section class="a">
                    <router-link to="searchlist">
                        <img src="./image/1.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/1.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/3.png" alt="">
                    </router-link>

                </section>

                <section class="a">
                    <router-link to="searchlist">
                        <img src="./image/4.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/5.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/6.png" alt="">
                    </router-link>

                </section>
                <section class="a">
                    <router-link to="searchlist">
                        <img src="./image/7.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/8.png" alt="">
                    </router-link>
                    <router-link to="searchlist">
                        <img src="./image/9.png" alt="">
                    </router-link>

                </section>

            </section>

            <section class="more">
                <a>
                    <img src="./image/tj.png" alt="">
                </a>
            </section>

        </section>

        <!-- 旅游再搜 开始-->
        <section class="tuijian">
            <section class="top">
                <img src="./image/lyzs.png" alt="">
            </section>
            <div class="bottom">
                <figure>
                    <div class="left">
                        <router-link to="searchlist">
                            <img src="./image/tg.png" alt="">
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="work">
                            <div class="workcon">
                                <span>泰国-曼谷-芭提雅</span>
                                <span>万人出游热销线，两千多好评冬季躲霾出访微笑国度......</span>
                            </div>
                        </div>
                    </div>
                </figure>

                <figure>
                    <div class="left">
                        <router-link to="searchlist">
                            <img src="./image/ydl.png" alt="">
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="work">
                            <div class="workcon">
                                <span>泰国-曼谷-芭提雅</span>
                                <span>万人出游热销线，两千多好评冬季躲霾出访微笑国度......</span>
                            </div>
                        </div>
                    </div>
                </figure>

                <figure>
                    <div class="left">
                        <router-link to="searchlist">
                            <img src="./image/tg2.png" alt="">
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="work">
                            <div class="workcon">
                                <span>泰国-曼谷-芭提雅</span>
                                <span>万人出游热销线，两千多好评冬季躲霾出访微笑国度......</span>
                            </div>
                        </div>
                    </div>
                </figure>
                <figure>
                    <div class="left">
                        <router-link to="searchlist">
                            <img src="./image/md.png" alt="">
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="work">
                            <div class="workcon">
                                <span>泰国-曼谷-芭提雅</span>
                                <span>万人出游热销线，两千多好评冬季躲霾出访微笑国度......</span>
                            </div>
                        </div>
                    </div>
                </figure>
                <figure>
                    <div class="left">
                        <router-link to="searchlist">
                            <img src="./image/md.png" alt="">
                        </router-link>
                    </div>
                    <div class="right">
                        <div class="work">
                            <div class="workcon">
                                <span>泰国-曼谷-芭提雅</span>
                                <span>万人出游热销线，两千多好评冬季躲霾出访微笑国度......</span>
                            </div>

                        </div>
                    </div>
                </figure>
            </div>
        </section>
        <!-- 底部开始 -->
        <section class="wgb-dibu">
            <a>向下刷新为你呈现更多旅游热搜</a>
            <a class="tdjd"><img src="./image/xl.png" alt="" class="tdj"></a>
        </section>

        <!-- 底部end -->
    </div>
</template>

<style src="./css/search-search.css" scoped></style>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.start()
    },
    methods: {
        start() {
            var searchs = document.querySelector('.wgb-head .right');
            var historys = document.querySelector('.historys');
            var clears = document.querySelector('.clears');
            var wgbz = document.querySelector('.wgbz');
            var body = document.querySelector('body')
            var toggle = 0;
            searchs.onclick = function() {
                console.log(toggle)
                if (toggle === 0) {
                    historys.style.height = 'auto';
                    historys.style.marginTop = '0.3rem';
                    toggle = 1
                } else {
                    historys.style.height = '0px';
                    toggle = 0;
                }
            }
            clears.onclick = function() {
                historys.innerHTML = '';
            }
            var middle = document.querySelector('.middle input');
            middle.onclick = function() {
                if (middle.value == '马尔') {
                    wgbz.style.display = 'block';
                    body.style.background = 'rgba(0,0,0,0.8)';
                    body.style.height = '100%';
                    body.style.position = 'relative';
                    body.style.zIndex = '10000';
                    body.style.overflower = 'hidden';
                } else {

                }
            }
        }
    }

}

</script>