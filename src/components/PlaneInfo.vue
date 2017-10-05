<template>
	<div>
		<!-- 导航开始 -->
		<div class="banner-jp">
			<nav class="nav">
				<router-link to="PlaneQuery" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
				<div class="order">
					<h1>太原<img src="./image/jp-jian.png" alt="">烟台</h1>
				</div>
			</nav>
		</div>
		<!-- 导航结束-->
		<!-- 航班选择开始 -->
		<div class="jp-hangban">
			<div class="hangban-left">
				<h1>东航MU5185
					<span>东航MU5073</span>
				</h1>
				<div class="hb-getup">
					<div class="hb-qifei">
						<img src="./image/jp-fei.png" alt="" class="fei-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>11:05</span>
						</div>
					</div>
					<div class="hb-data">
						<h1>2月13日</h1>
					</div>

					<div class="hb-qifei1">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>11:05</span>
						</div>
					</div>
				</div>
			</div>
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
		</div>
		<!-- 航班选择结束 -->
		<!-- 定位开始 -->
		<div class="city-dingwei">
			<div class="city-dwztk">
				<div class="city-dwzt">
					<h2>个人信息确认</h2>
					<img src="./image/jp-dian3.png" alt="">
				</div>
				<h3>
					<span>The hotel is </span>recommended</h3>
			</div>
		</div>
		<!-- 定位结束 -->
		<!-- 个人信息开始 -->
		<div class="new-name">
			<div class="name-xx">
				<span>姓名</span>
				<input type="text" placeholder="与乘机人一致" style="margin-left:0.6rem;">
			</div>
			<div class="name-xx">
				<span>身份证号</span>
				<input type="text" placeholder="与乘机人一致" style="margin-left:0.1rem;">
			</div>
			<div class="name-xx">
				<span>手机号</span>
				<input type="text" placeholder="与乘机人一致">
			</div>
		</div>
		<!-- 个人信息结束-->
		<!-- 添加开始  -->
		<div class="news-tjks">
			<span>添加联系人</span>
			<img src="./image/jp-jia.png" alt="" class="new-jia">
		</div>
		<div class="news-tjks">
			<span>亲、选择一份保险为你保驾护航</span>
			<img src="./image/jp-true.png" alt="" class="new-jia">
		</div>
		<div class="news-tjks">
			<span>是否打印报销凭证</span>
			<img src="./image/jp-true.png" alt="" class="new-jia">
		</div>
		<div class="news-tjks">
			<span>已阅读危险品须知</span>
			<img src="./image/jp-true.png" alt="" class="new-jia">
		</div>
		<div class="news-tjks2">
			<span>订单须知 : 此订单包含机票、名航基金、燃油费、税 费等......</span>
		</div>

		<!-- 添加结束 -->
		<!-- 确认订单开始-->

		<div class="new-qrdd">
			<router-link to="PlaneConfirm">￥650.00
			</router-link>
			<router-link to="PlaneConfirm">
				<div class="prdd-right">确认订单</div>
				<div class="prdd-xian"></div>
			</router-link>

		</div>
		<!-- 确认订单结束 -->
	</div>
</template>
<style src="./css/index-grnews.css" scoped>

</style>
