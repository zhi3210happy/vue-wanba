
<template>
    <div>
        <more-header :title="options.title" :route="options.route1"></more-header>
        <section class="rmdr">
            <div class="title">
                <img :src="`./static/images/${options.img1}.png`" alt="">
            </div>
            <swiper class="drbox" :options="banner">
                <swiper-slide v-for="(item,index) in swiper" :key="index">
                    <router-link :to="options.route2">
                        <img :src="`./static/images/dr${index+1}.png`" alt="">
                        <span>{{item}}</span>
                    </router-link>
                </swiper-slide>
            </swiper>
            <div class="hyh">
                <router-link :to="options.route2">
                    <img src="./images/bzp/hyp.png" alt="">
                </router-link>
            </div>
        </section>
        <div id="title-img">
            <img :src="`./static/images/${options.img2}.png`" alt="">
        </div>
        <section class="drtj-list">
            <div class="dr1">
                <div class="touxiang">
                    <div class="left">
                        <router-link to="darenxq">
                            <img src="./images/bzp/tx.png" alt="">
                        </router-link>
                        <div class="name-date">
                            <span>Moli</span>
                            <span>2016-05-06</span>
                        </div>
                    </div>
                    <div class="focus">
                        <a>关注</a>
                    </div>
                </div>
                <div class="miaoshu duotext">
                    {{options.message}}
                </div>
                <div :class="[options.className]">
                    <router-link :to="options.route2" v-for="(item,index) in options.imgArr" :key="index">
                        <img :src="`./static/images/${item}`" alt="">
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
import './css/bzp/daren.css'
import MoreHeader from './MoreHeader'
export default {
    data() {
        return {
            banner: {
                autoplay: 2000,
                paginationClickable: true,
                spaceBetween: 2,
                slidesPerView: 'auto'
            },
            swiper: ['维多利亚', '帝皇侠', '雨涵', '奔跑骚年', '艾薇儿']
        }

    },
    props: {
        options: {
            type: Object,
            required: true,
            default() {
                return {
                    title: '达人',
                    route1: '/more',
                    img1: 'rmdr',
                    route2: 'darenxq',
                    img2: 'drtj',
                    message: '海南7日5晚自由行·【立减888含黄金周！】直飞 3+2双酒店DIY',
                    className: [
                        'photo',
                        ''
                    ],
                    imgArr: ['17380965_999592.jpg', '2017-03-19_113441.png']
                }
            }
        }
    },
    components: {
        MoreHeader
    }
}
</script>
