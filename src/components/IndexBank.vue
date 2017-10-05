<template>
    <div class="index-pay index-order  index-bank">
        <!--banner开始-->
        <div class="banner">
            <nav class="nav">
                <router-link to="indextype" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
                <div class="order">
                    <h1>SUBMIT ORDERS</h1>
                    <h1>
                        <span><img src="./image/pay-dot.png" alt=""></span>
                        &nbsp;绑定银行卡&nbsp;
                        <span><img src="./image/pay-dot.png" alt=""></span>
                    </h1>
                </div>
                <router-link to="IndexAddBank" class="back" style="background:url(./static/images/add.png) no-repeat 0 0;float: right"></router-link>
            </nav>
        </div>
        <!--banner结束-->
        <!--银行卡开始-->
        <div class="bank-bank">
            <h1>已绑定张银行卡数量
                <span>4</span>
            </h1>
            <ul>
                <li style="background:url(./static/images/bank-green.png) no-repeat 0 0;">
                    <router-link to="IndexMessage">
                        <h2>china ZHAOSHANGbank</h2>
                        <p>6219 ****************** 6580</p>
                    </router-link>
                </li>
                <li style="background:url(./static/images/bank-orange.png) no-repeat 0 0;">
                    <router-link to="IndexMessage">
                        <h2>china ZHAOSHANGbank</h2>
                        <p>6219 ****************** 3245</p>
                    </router-link>
                </li>
                <li style="background:url(./static/images/bank-green.png) no-repeat 0 0;">
                    <router-link to="IndexMessage">
                        <h2>china ZHAOSHANGbank</h2>
                        <p>6219 ****************** 1314</p>
                    </router-link>
                </li>
                <li style="background:url(./static/images/bank-orange.png) no-repeat 0 0;">
                    <router-link to="IndexMessage">
                        <h2>china ZHAOSHANGbank</h2>
                        <p>6219 ****************** 6657</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--银行结束-->
    </div>
</template>

<script>
import './css/index-pay.css'
export default {
    mounted() {
        this.start()
    },
    methods: {
        start() {
            window.onload = function() {
                var lis = document.querySelectorAll('.index-bank .bank-bank li');
                var span = document.querySelector('.index-bank .bank-bank h1 span');
                span.innerHTML = lis.length;
            }
        }
    }
}
</script>
