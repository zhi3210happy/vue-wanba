<template>
    <header class="head">
        <router-link :to="route">
            <img src="./images/yi-back.png" alt="">
        </router-link>
        <span>{{title}}</span>
    </header>
</template>
<style src="./css/bzp/morehead.css" scoped>

</style>

<script>
export default {
  props:['title','route']
}
</script>
