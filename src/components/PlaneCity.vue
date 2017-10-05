
<template>
	<section>
		<!-- 导航开始 -->
		<div class="banner-jp">
			<nav class="nav">
				<router-link to="PlaneTicket" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
				<div class="city-sousuo">
					<input type="text" placeholder="搜索你要去得国家和城市" class="">
					<div class="city-yuyin">
						<img src="./image/jp-hua.png" alt="" class="jp-hua">
					</div>
				</div>
				<router-link to="PlaneTicket" class="jp-sou" style="background:url(./static/images/jp-sou.png) no-repeat 0 0;"></router-link>

			</nav>
		</div>
		<!-- 导航结束-->
		<!-- 定位开始 -->
		<div class="city-dingwei">
			<div class="city-dwztk">
				<div class="city-dwzt">
					<h2>定位当前城市</h2>
					<img src="./image/jp-dian3.png" alt="">
				</div>
				<h3>
					<span>Locating</span> the position</h3>
			</div>
		</div>
		<!-- 定位结束 -->
		<!-- 太原开始 -->
		<div class="city-taiyuan">
			<div class="city-tydw">
				<img src="./image/jp-wei.png" alt="" class="city-wei">
				<h2>太原</h2>
			</div>
		</div>
		<!-- 太原结束 -->
		<!-- 热门城市开始 -->
		<div class="city-recs">
			<div class="city-dingwei">
				<div class="city-dwztk">
					<div class="city-dwzt">
						<h2>热门城市</h2>
						<img src="./image/jp-dian3.png" alt="">
					</div>
					<h3>
						<span>Locating</span> the position</h3>
				</div>
			</div>
			<div class="city-hotlist">
				<li>北京</li>
				<li>上海</li>
				<li>广州</li>
				<li>深圳</li>
				<li>厦门</li>
				<li>烟台</li>
				<li>青岛</li>
				<li>天津</li>
				<li>福建</li>
			</div>
		</div>
		<!-- 热门城市结束 -->

		<!-- 更多热门开始 -->
		<div class="city-recs">
			<div class="city-dingwei">
				<div class="city-dwztk">
					<div class="city-dwzt">
						<h2>更多热门城市</h2>
						<img src="./image/jp-dian3.png" alt="">
					</div>
					<h3>
						<span>Locating</span> the position</h3>
				</div>
			</div>
			<div class="city-morelist">
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
				<li>F</li>
				<li>G</li>
				<li>H</li>
				<li>I</li>
				<li>G</li>
				<li>K</li>
				<li>L</li>
				<li>M</li>
				<li>N</li>
				<li>O</li>
				<li>P</li>
				<li>Q</li>
				<li>R</li>
				<li>S</li>
				<li>T</li>
				<li>U</li>
				<li>V</li>
			</div>
		</div>
		<!-- 更多热门结束 -->
	</section>
</template>

<style src="./css/index-city.css" scoped>

</style>
