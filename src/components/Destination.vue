
<template>
	<div>
		<!-- 头部详情 -->
		<header class="head">
			<span>
				<router-link to="/">
					<img src="./images/lyq-back.png">
				</router-link>
			</span>
			<span>
				<router-link to="DestinationDetail">目的地</router-link>
			</span>
			<span>

			</span>
		</header>
		<div class="body">
			<!-- 搜索框 -->
			<section class="search">
				<input type="text" placeholder="搜索目的地">
				<img class="sacle" src="./images/lyq-search.png" alt="">
				<img class="speak" src="./images/lyq-speak_03.png" alt="">
			</section>
			<!-- banner -->
			<section class="banner">
				<swiper :options="banner">
					<swiper-slide v-for="(item,index) in img" :key="index">
						<img src="./images/lyq-banner1.png" alt="">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</section>
			<!-- 推荐目的地 -->
			<section class="recommend">
				<div class="logo">
					<img src="./images/lyq-logo.png" alt="">
				</div>
				<div class="list">
					<div class="list-one">
						<router-link to="DestinationDetail">厦门</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">云南</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">西安</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">太原</router-link>
					</div><br>
					<div class="list-one">
						<router-link to="DestinationDetail">巴厘岛</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">桂林</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">普吉岛</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">成都</router-link>
					</div>
					<div class="list-one list-last">
						<router-link to="DestinationDetail">五台山</router-link>
					</div><br>
					<div class="list-one">
						<router-link to="DestinationDetail">马尔代夫</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">香港</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">澳门</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">毛里求斯</router-link>
					</div>
					<div class="list-one list-last">
						<router-link to="DestinationDetail">上海</router-link>
					</div><br>
					<div class="list-one">
						<router-link to="DestinationDetail">三亚</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">黄山</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">拉萨</router-link>
					</div>
					<div class="list-one">
						<router-link to="DestinationDetail">鄂尔多斯</router-link>
					</div>
				</div>
			</section>
			<!-- 目的地选择-->
			<section class="choice">
				<div class="choice-list">
					<div class="choice-lists-one active">
						<img src="./images/lyq-type1.png" alt="">
						<span>定制旅游</span>
					</div>
					<div class="choice-lists-one">
						<img src="./images/lyq-type2.png" alt="">
						<span>跟团旅游</span>
					</div>
				</div>
				<div class="choice-box">
					<div class="choice-one hot">
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="newgood">
								新品上市
							</div>
							<div class="img" style="background:url(./static/images/lyq-place1.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="newgood">
								新品上市
							</div>
							<div class="img" style="background:url(./static/images/lyq-place1.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="newgood">
								新品上市
							</div>
							<div class="img" style="background:url(./static/images/lyq-place1.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="newgood">
								新品上市
							</div>
							<div class="img" style="background:url(./static/images/lyq-place1.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="newgood">
								新品上市
							</div>
							<div class="img" style="background:url(./static/images/lyq-place1.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div class="choice-one">
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="img" style="background:url(./static/images/lyq-place2.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="img" style="background:url(./static/images/lyq-place2.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="img" style="background:url(./static/images/lyq-place2.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="img" style="background:url(./static/images/lyq-place2.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="img" style="background:url(./static/images/lyq-place2.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
						<div class="choice-list-one">
							<router-link to="DestinationDetail" class="link"></router-link>
							<div class="doom">
								<img src="./images/lyq-good.png" alt="">
							</div>
							<div class="img" style="background:url(./static/images/lyq-place2.png) no-repeat center center/contain">
							</div>
							<div class="list-desc">
								<span class="address">
									<b>日本-东京-富士山</b><br>
									<i>富士山被日本人民誉为“圣岳”，是日本民族的象征。</i>
								</span>
								<span class="price">RMB
									<i>8669</i>起</span>
							</div>
							<div class="moreinfo">
								<div class="moreinfo-left">
									<router-link to="DestinationDetail">全程无自费</router-link>
									<router-link to="DestinationDetail">海边呆着</router-link>
									<router-link to="DestinationDetail">销量领先</router-link>
								</div>
								<div class="moreinfo-right">
									<span>
										<img src="./images/lyq-comment.png" alt="">
										<router-link to="DestinationDetail">37585</router-link>
									</span>
									<span>
										<img src="./images/lyq-info.png" alt="">
										<router-link to="DestinationDetail">100%</router-link>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			</div>
			<!-- table	-->
			<com-footer></com-footer>
			</div>
</template>

<style src="./css/lyq-destination.css" scoped>

</style>

<script >

import ComFooter from "./ComFooter"
export default {
	data() {
		return {
			banner: {
				autoplay:2000,
				loop: true,
				pagination: '.swiper-pagination'
			},
			img:[1,2,3]
		}

	},
	mounted() {
		this.start()
	},
	methods: {
		start() {
			// 选项卡
			var list_one = document.querySelectorAll(".choice-lists-one");
			var choice_one = document.querySelectorAll(".choice-one");
			for (var i = 0; i < list_one.length; i++) {
				list_one[i].index = i;
				list_one[i].addEventListener("touchstart", function() {
					for (var j = 0; j < list_one.length; j++) {
						list_one[j].classList.remove("active");
					}
					this.classList.add("active");
					for (var k = 0; k < choice_one.length; k++) {
						choice_one[k].classList.remove("hot");
					}
					choice_one[this.index].classList.add("hot");
				});

			}
		}
	},
	components: {
		ComFooter
	}

}
</script>