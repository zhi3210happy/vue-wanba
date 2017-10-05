
<template>
    <com-daren :options="options">
    </com-daren>
</template>

<script>
import ComDaren from './ComDaren'
export default {
    data() {
        return {
            options: {
                title: '摄影师',
                route1: '/more',
                img1: 'sheyingshi',
                route2: 'sheyingshixq',
                img2: 'tj-sheyingshi',
                message: '之前拍过的王莽岭的日出，美轮美奂，精彩绝伦。强烈推荐各位朋友，去的时候一定要带相机噢！',
                className: ['photo',
                    'sheying']
                ,
                imgArr: ['p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png','p6.png']
            }
        }
    },
    components: {
        ComDaren
    }
}
</script>