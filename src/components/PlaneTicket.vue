<template>
	<section>
		<!-- 导航开始 -->
		<div class="banner-jp">
			<nav class="nav">
				<router-link to="/" class="back" style="background:url(./static/images/jp-back.png) no-repeat 0 0;"></router-link>
				<div class="order">
					<h1>机票</h1>
					<h1>
						<span><img src="./image/jp-dian1.png" alt=""></span>
						&nbsp;THETICKET&nbsp;
						<span><img src="./image/jp-dian2.png" alt=""></span>
					</h1>
				</div>
			</nav>
		</div>
		<!-- 导航结束-->
		<!-- 选项卡开始 -->
		<div class="jipiao-daohang">
			<li>
				<a>
					<img src="./image/jp-lx.png" alt="">
					<span>单程</span>
				</a>

			</li>
			<li>
				<a>
					<img src="./image/jp-lx2.png" alt="">
					<span style="color:#929292">往返</span>
				</a>

			</li>
		</div>
		<!-- 选项卡结束-->
		<!-- 日期开始 -->
		<div class="jpcf">
			<div class="chufa">
				<span>出发</span>
				<span>SETOUT</span>
			</div>
			<router-link to="PlaneCity">
				<input type="text" placeholder="太原 Taiyuan" class="yaiyuan">
			</router-link>

			<div class="feiji">
				<img src="./image/jp-feiji.png" alt="">
			</div>
			<div class="mudidi">
				<span>目的地</span>
				<span>DESTINATI</span>
			</div>
			<router-link to="PlaneCity">
				<input type="text" placeholder="烟台Yantai" class="yaiyuan">
			</router-link>

		</div>
		<div class="jpcf">
			<div class="chufa">
				<span>日期</span>
				<span>DATE</span>
			</div>
			<div class="chufa">
				<span>出发</span>
				<span>日期</span>
			</div>
			<a>
				<input type="text" placeholder="2月13日 明天" class="yaiyuan">
			</a>
			<div class="chufa">
				<span>返回</span>
				<span>日期</span>
			</div>
			<a>
				<input type="text" placeholder="2月13日 明天" class="yaiyuan">
			</a>
		</div>
		<div class="jpcf">
			<div class="chufa">
				<span>坐席</span>
				<span>SETOUT</span>
			</div>
			<router-link to="PlaneSeat">
				<input type="text" placeholder="经济舱" class="yaiyuan">
			</router-link>
			<div class="mudidi">
				<span>儿童</span>
				<span>CHILD</span>
			</div>
			<a>
				<input type="text" placeholder="携带婴儿 14天-2岁" class="yaiyuan" style="width: 2.2rem;">
			</a>
		</div>
		<!--日期结束-->

		<!-- 查询开始 -->
		<div class="jp-chaxun">
			<router-link to="PlaneQuery">
				<img src="./image/jp-cha.png" alt="">
			</router-link>
			<div class="cx-bjt">
				<img src="./image/jp-bjt.png" alt="">
			</div>
		</div>

		<!-- 查询结束-->

		<!-- 酒店推荐开始 -->
		<div class="jp-jdtj">
			<h1>酒店推荐
				<img src="./image/jp-dian3.png" alt=""></h1>
			<div></div>
			<h3>THE HOTELIS
				<span>RECOMMENDED</span>
			</h3>
		</div>
		<div class="jp-tjnr">
			<div class="tjnr-tp">
				<img src="./image/jp-jiudian.png" alt="">
			</div>
			<div class="jiudian-zt">
				<div class="jiudian-zt1">
					<h2>烟台凯宾斯基</h2>
					<div class="jiudian-xing">
						<img src="./image/jp-xing.png" alt="">
					</div>
				</div>
				<p>四星级酒店，住宿环境优雅、舒适、双 人大床房、带早餐、酒店可以帮助游客 办理租车服务等....</p>
				<div class="jiudian-qian">
					<div class="jiudian-map">
						<img src="./image/jp-qian.png" alt="">
					</div>
					<h2>199
						<span>/RMB</span>
					</h2>
					<div class="jiudian-map">
						<img src="./image/jp-map.png" alt="">
					</div>
					<h2>
						<span>500m</span>
					</h2>
				</div>
				<div class="jiudian-faxian">
					<div class="jiudian-zan">
						<div class="jiudian-fx">
							<img src="./image/jp-fx1.png" alt="">
						</div>
						<span>1433</span>
					</div>
					<div class="jiudian-zan">
						<div class="jiudian-fx">
							<img src="./image/jp-fx2.png" alt="">
						</div>
						<span>336</span>
					</div>
					<div class="jiudian-zan">
						<div class="jiudian-fx">
							<img src="./image/jp-fx3.png" alt="">
						</div>
						<span>1132</span>
					</div>
				</div>

			</div>
		</div>

		<div class="jp-tjnr">
			<div class="tjnr-tp">
				<img src="./image/jp-jiudian.png" alt="">
			</div>
			<div class="jiudian-zt">
				<div class="jiudian-zt1">
					<h2>烟台凯宾斯基</h2>
					<div class="jiudian-xing">
						<img src="./image/jp-xing.png" alt="">
					</div>
				</div>
				<p>四星级酒店，住宿环境优雅、舒适、双 人大床房、带早餐、酒店可以帮助游客 办理租车服务等....</p>
				<div class="jiudian-qian">
					<div class="jiudian-map">
						<img src="./image/jp-qian.png" alt="">
					</div>
					<h2>199
						<span>/RMB</span>
					</h2>
					<div class="jiudian-map">
						<img src="./image/jp-map.png" alt="">
					</div>
					<h2>
						<span>500m</span>
					</h2>
				</div>
				<div class="jiudian-faxian">
					<div class="jiudian-zan">
						<div class="jiudian-fx">
							<img src="./image/jp-fx1.png" alt="">
						</div>
						<span>1433</span>
					</div>
					<div class="jiudian-zan">
						<div class="jiudian-fx">
							<img src="./image/jp-fx2.png" alt="">
						</div>
						<span>336</span>
					</div>
					<div class="jiudian-zan">
						<div class="jiudian-fx">
							<img src="./image/jp-fx3.png" alt="">
						</div>
						<span>1132</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style src="./css/index-jp.css" scoped>

</style>

<script>
export default {
	data() {
        return{

		}
	}
}
</script>
