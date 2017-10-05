
<template>
    <div>
        <more-header :title="title" :route="route"></more-header>
        <section class="more">
            <figure>
                <router-link to="ticket">
                    <img src="./images/bzp/tackit.png" alt="">
                    <figcaption>门票</figcaption>
                </router-link>
            </figure>
            <figure>
                <router-link to="daren">
                    <img src="./images/bzp/xz.png" alt="">
                    <figcaption>达人</figcaption>
                </router-link>
            </figure>
            <figure>
                <router-link to="guide">
                    <img src="./images/bzp/dy.png" alt="">
                    <figcaption>导游</figcaption>
                </router-link>
            </figure>
            <figure>
                <router-link to="sheyingshi">
                    <img src="./images/bzp/sys.png" alt="">
                    <figcaption>摄影师</figcaption>
                </router-link>
            </figure>
        </section>
    </div>
</template>

<style  src="./css/bzp/more.css" scoped>

</style>
<script>
import MoreHeader from './MoreHeader'
export default {
  data(){
      return{
          title:'更多',
          route:'/'
      }
  },
  components:{
      MoreHeader
  }
}
</script>

    