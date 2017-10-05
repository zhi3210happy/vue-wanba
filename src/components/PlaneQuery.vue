
<template>
	<section>
		<!-- 导航开始 -->
		<div class="banner-jp">
			<nav class="nav">
				<router-link to="PlaneTicket" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
				<div class="order">
					<h1>太原<img src="./image/jp-jian.png" alt="">烟台</h1>
				</div>
			</nav>
		</div>
		<!-- 导航结束-->
		<!-- 日期选择开始 -->
		<div class="jp-tianshu">
			<div class="jp-tslist">
				<div class="data-day">
					<h1>
						<img src="./image/jp-dian4.png" alt="">
						<span>前一天<br>￥530</span>
						<img src="./image/jp-dian4.png" alt="">
					</h1>
				</div>
				<div class="new-day">
					<img src="./image/jp-date.png" alt="" class="date-img">
					<span>2-13</span>
					<span>周一</span>
					<h3>￥550</h3>

				</div>
				<div class="data-day2">
					<h1>
						<img src="./image/jp-dian4.png" alt="">
						<span>后一天<br>￥530</span>
						<img src="./image/jp-dian4.png" alt="">
					</h1>
				</div>
			</div>
		</div>
		<!-- 日期选择结束-->
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
					<div class="hb-jian2">
						<img src="./image/jp-jian2.png" alt="">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>11:05</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->
		<!-- 定位开始 -->
		<div class="city-dingwei">
			<div class="city-dwztk">
				<div class="city-dwzt">
					<h2>中转航班推荐</h2>
					<img src="./image/jp-dian3.png" alt="">
				</div>
				<h3>
					<span>The hotel is </span>recommended</h3>
			</div>
		</div>
		<!-- 定位结束 -->

		<!-- 航班选择开始 -->
		<div class="jp-hangban1">
			<div class="hangban-left1">
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
					<div class="hb-jian2">
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
						<div class="hb-wusu">
							<h2>北京</h2>
							<span>12:00</span>
						</div>
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>00:45</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->
		<!-- 航班选择开始 -->
		<div class="jp-hangban1">
			<div class="hangban-left1">
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
					<div class="hb-jian2">
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
						<div class="hb-wusu">
							<h2>北京</h2>
							<span>12:00</span>
						</div>
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>00:45</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->

		<!-- 航班选择开始 -->
		<div class="jp-hangban1">
			<div class="hangban-left1">
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
					<div class="hb-jian2">
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
						<div class="hb-wusu">
							<h2>北京</h2>
							<span>12:00</span>
						</div>
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>00:45</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->
		<!-- 航班选择开始 -->
		<div class="jp-hangban1">
			<div class="hangban-left1">
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
					<div class="hb-jian2">
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
						<div class="hb-wusu">
							<h2>北京</h2>
							<span>12:00</span>
						</div>
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>00:45</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->

		<!-- 航班选择开始 -->
		<div class="jp-hangban1">
			<div class="hangban-left1">
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
					<div class="hb-jian2">
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
						<div class="hb-wusu">
							<h2>北京</h2>
							<span>12:00</span>
						</div>
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>00:45</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->
		<!-- 航班选择开始 -->
		<div class="jp-hangban1">
			<div class="hangban-left1">
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
					<div class="hb-jian2">
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
						<div class="hb-wusu">
							<h2>北京</h2>
							<span>12:00</span>
						</div>
						<img src="./image/jp-jian3.png" alt="" class="jp-jian3">
					</div>
					<div class="hb-qifei">
						<img src="./image/jp-luo.png" alt="" class="luo-img">
						<div class="hb-wusu">
							<h2>武宿T2</h2>
							<span>00:45</span>
						</div>
					</div>
				</div>
			</div>
			<router-link to="PlaneInfo">
				<div class="hangban-right">
					<h3>PRICE</h3>
					<h2>经济舱</h2>
					<h1>650.00</h1>
				</div>
			</router-link>
		</div>
		<!-- 航班选择结束 -->
	</section>
</template>

<style  src="./css/index-goumai.css" scoped>

</style>
