
<template>
<div>
    <more-header :title="title" :route="route"></more-header>
    <div class="tj-banner" style="background: url('./static/images/tj-banner.jpg') no-repeat center center;-webkit-background-size: cover;background-size: cover;"></div>
    <div class="personal-qm">
        <div>
            <img src="./images/bzp/guide1.png" alt="">
            <div class="right">
                <span>奔跑的皮皮虾</span>
                <span>个人签名：旅行就要像梦一样自由。</span>
            </div>
        </div>
    </div>
    <div class="personal-intro">
        <div>
            <span>籍贯：北京</span>
            <span>年龄：28</span>
        </div>
        <div>
            <span>从业：5年</span>
            <span>好评：96次</span>
        </div>
        <div>
            <span>学历：本科</span>
            <span>语言：普通话/英语</span>
        </div>
        <div>导游证号：DY1100 2200</div>
    </div>
    <div class="personal-intro">
        <h3>个人介绍</h3>
        <div class="xq" style="line-height:">
            领队和导游对大家照顾有加，得到所有团员夸赞。乌斯怀亚特别安排了肉质鲜美的帝王蟹，海达路德前进号邮轮的安排让我们看到了企鹅拍到了美图，在南极大陆上爬了山登了浮冰，还有团员游了冬泳等等。
        </div>
    </div>
    <div class="personal-intro">
        <h3>服务介绍</h3>
        <div>
            <span>聘金：300元/天</span>
            <span>服务城市：北京/天津/海南</span>
        </div>
        <div>服务时间：6月-10月 每天</div>
    </div>
  
 </div>     
</template>
<style src='./css/bzp/daoyouxq.css' scoped>

</style>

<script>

import MoreHeader from './MoreHeader'
export default {
  data(){
      return{
          title:'导游详情',
          route:'/guide'
      }
  },
  components:{
      MoreHeader
  }
}
</script>
