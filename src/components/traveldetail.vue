
	<!-- 头部 -->
<template>
	<div class="traveldetail">
		<header id="wb_tabs">
			<div class="wb_tcenter">
				<a class="back">
					<img src="./images/ycw/return2.png" alt="">
				</a>
				<div class="wb_acen">
					<div class="wb_acem">
						<span class="wb_zm">Payment order</span>
						<p class="wb_hz">
							<span class="wb_led">
								<img src="./images/ycw/abs193.png" alt="">
							</span>
							<span class="wb_cez">代付款定单</span>
							<span class="wb_rid">
								<img src="./images/ycw/abs189.png" alt="">
							</span>
						</p>
					</div>
				</div>
				<router-link to="more" class="more">
					<img src="./images/ycw/dian1.png" alt="">
				</router-link>
			</div>
		</header>

		<section>
			<!-- banner -->
			<swiper class="banner" :options="banner">
				<swiper-slide v-for="(item,index) in banner" :key="index">
					<a><img src="./images/ycw/banner1.png" alt="">
					</a>
				</swiper-slide>
				<!-- Add Pagination -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<!-- 马尔代夫 -->
			<div class="fix">
				<div class="travel-listone">
					<h1>马尔代夫-莉莉岛</h1>
					<div class="listone">
						<p class="ps">首付出发：
							<i>1108 </i>起（需服务费）4种分期类型</p>
						<div class="cheap">
							<span>优惠活动：</span>
							<p>返劵优惠</p>
							<p>点评返现</p>
						</div>
						<div class="lin">
							<span>领劵活动：</span>
							<p style="background:#FD9418">立减劵</p>
							<p class="second" style="margin-left:0.08rem;background:#18FF28">100元</p>
							<p>960元</p>
						</div>
					</div>
					<div class="listwo">
						<span>出发城市：太原</span>
						<span class="last">RMB
							<i>8339</i>起</span>
					</div>
				</div>
				<!-- 日期 -->
				<div class="travel-listtwo">
					<div class="listtwo-top">
						<h1>Departure
							<i> date</i>
						</h1>
						<div>
							<h2>
								出发日期
								<img src="./images/ycw/dian.png" alt="">
							</h2>

						</div>
					</div>
					<div class="listtwo-bottom">
						<ul class="bottoms">
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
						</ul>
						<ul class="bottomss">
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>

						</ul>
						<ul class="bottoms">
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
							<li>
								<span>03-10周五</span>
								<span>￥6061起</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- 游客 -->
				<div class="travel-listhree">
					<div class="listtwo-top">
						<h1>Visitors to
							<i> comment on</i>
						</h1>
						<div>
							<h2>
								<span>游客点评</span>
								<span>(95%满意度)</span>
								<img src="./images/ycw/dian.png" alt="">
							</h2>
							<p>评论数量：共36条</p>
						</div>
					</div>
					<div class="listhree-bottom">
						<div class="content">
							<span>导游服务：</span>
							<img src="./images/ycw/star.png" alt="">
						</div>
						<div class="content">
							<span>行程安排：</span>
							<img src="./images/ycw/star.png" alt="">
						</div>
					</div>
					<div class="listhree-bottom">
						<div class="content">
							<span>餐饮住宿：</span>
							<img src="./images/ycw/star.png" alt="">
						</div>
						<div class="content">
							<span>旅行交通：</span>
							<img src="./images/ycw/star.png" alt="">
						</div>
					</div>
				</div>
				<!-- 品牌 -->
				<div class="produce">
					<div class="listtwo-top">
						<h1>Product
							<i> brand</i>
						</h1>
						<div>
							<h2>
								产品品牌
								<img src="./images/ycw/dian.png" alt="">
							</h2>

						</div>
					</div>
					<p>
						该产品在本州目的地满意度为85%，低于本州平均满意度6.9%。
					</p>
				</div>
				<!-- 安排 -->
				<div class="arrang">
					<div class="listtwo-top">
						<h1>arrang
							<i> ements</i>
						</h1>
						<div>
							<h2>
								行程安排
								<img src="./images/ycw/dian.png" alt="">
							</h2>
						</div>
					</div>
					<div class="arrang-cheng">
						<a>A行程(默认行程)</a>
						<a>B行程</a>
					</div>
					<div class="xc-list">
						<div>7日行程</div>
						<div>产品特色</div>
						<div>费用说明</div>
						<div>旅游须知</div>
					</div>
					<div class="xc-content">

						<div class="xc-right">
							<div class="xc-left"></div>
							<h1>第一天 太原
								<p><img src="./images/ycw/flay.png" alt=""></p>名古屋</h1>
							<p class="text">太原-名古屋(参考航班时间:0800-1355)太原机场制定时间集合乘飞机直飞名古屋 抵达后乘车前往【绿城21】参观，之后入住酒店。【绿洲2】是注重环保观念的日 本人造就了这一个盛满水的玻璃屋，就像是一个棒球场一般的大鱼缸。他是由hide -ki casai所设计建造而成。并获得2003年的solutia奖（专门颁给以玻璃为设计 建造素材的作者）。绿洲21在当地除了是个夸耀绚丽的地标建筑物，也充分展现了 环保的概念......
							</p>
							<div class="img-box">
								<div class="mask">奈良神鹿公园</div>
								<img src="./images/ycw/room.jpg" alt="">
							</div>
							<div class="img-box last-child">
								<div class="mask">奈良神鹿公园</div>
								<img src="./images/ycw/room.jpg" alt="">
							</div>
							<div class="cheer">
								<h1>
									<span></span>餐饮
								</h1>
								<p>早餐：敬请自理</p>
								<p>午餐：敬请自理</p>
								<p>晚餐：敬请自理</p>
								<h2>住宿</h2>
								<p class="gu">名古屋机场酒店</p>
							</div>
							<div class="more">
								<a>查看更多行程</a>
							</div>
						</div>
					</div>
				</div>

				<!-- 产品特点 -->
				<div class="feature">
					<div class="listtwo-top">
						<h1>Product
							<i> features</i>
						</h1>
						<div>
							<h2>
								产品特点
								<img src="./images/ycw/dian.png" alt="">
							</h2>

						</div>

					</div>
					<div class="text">
						<p>团期不同，所含特色不同，详见对应团期的pdf行程：</p>
						<p>1.太原岂止，全程无自费，全程领队陪同；</p>
						<p>2.双古都之奈良随处可见的超萌小路，共享欢乐时光；</p>
						<p>3.尽享25k回程超大行李额，购物无忧，为亲朋好友伴足礼
						</p>
					</div>
					<div class="more">
						<a>查看更多特色</a>
					</div>
				</div>
				<!-- 费用说明 -->
				<div class="feature">
					<div class="listtwo-top">
						<h1>Costs
							<i> that</i>
						</h1>
						<div>
							<h2>
								费用说明
								<img src="./images/ycw/dian.png" alt="">
							</h2>

						</div>

					</div>
					<div class="text">
						<p>费用包含:</p>
						<p>1.交通：往返团队/散客含机票含税费（团队机票将统一出售，散客机票因实时计价 预定后即可出票）往返火车票当地旅游巴士。
						</p>
						<p>2.住宿：行程所列酒店。</p>
						<p>3.用餐：行程所列团队标准餐（中式餐或自助餐或特色餐，自由活动期间用餐请自理 如因自身原因放弃用餐，则餐费不退）。
						</p>
					</div>
					<div class="more">
						<a>查看更多特色</a>
					</div>
					<div class="text">
						<p>费用不含</p>
						<p>1.单房差：单房差（具体团期报价）。</p>
						<p>2.门票：行程中注明需要另行支付的1自费景点</p>
						<p>3.旅游意外险：旅游人身意外保险。
						</p>
					</div>
					<div class="more">
						<a>查看更多特色</a>
					</div>
				</div>

				<!-- 旅游须知 -->
				<div class="tours">
					旅游须知
				</div>
				<div class="tours">
					签证须知
				</div>
				<!-- 产品推荐 -->

				<div class="tuijian">
					<div class="listtwo-top">
						<h1>Costs
							<i> that</i>
						</h1>
						<div>
							<h2>
								产品推荐
								<img src="./images/ycw/dian.png" alt="">
							</h2>

						</div>
					</div>

					<ul class="list-content">
						<li class="one">
							<a><img src="./images/ycw/tr1.png" alt="">
								<p class="mask">
									<span>日本5日6晚游>太原起止，全程无自费</span>
									<span class="rmb">
										RMB
										<i>8669</i>起
									</span>
								</p>
							</a>

						</li>
						<li class="two">
							<a><img src="./images/ycw/tr2.jpg" alt="">
								<p class="mask">
									<span>日本5日6晚游>太原起止，全程无自费</span>
									<span class="rmb">
										RMB
										<i>8669</i>起
									</span>
								</p>
							</a>
						</li>
						<li class="one">
							<a><img src="./images/ycw/tr3.jpg" alt="">
								<p class="mask">
									<span>日本5日6晚游>太原起止，全程无自费</span>
									<span class="rmb">
										RMB
										<i>8669</i>起
									</span>
								</p>
							</a>

						</li>
						<li class="two">
							<a><img src="./images/ycw/tr4.jpg" alt="">
								<p class="mask">
									<span>日本5日6晚游>太原起止，全程无自费</span>
									<span class="rmb">
										RMB
										<i>8669</i>起
									</span>
								</p>
							</a>

						</li>
					</ul>

					<div class="texts">
						<p>向下刷新为你呈现更多旅游热搜</p>
						<a>
							<img src="./images/ycw/xia.png" alt="">
						</a>
					</div>

				</div>
			</div>
			<footer>
				<div class="footer">
					<router-link to="Reserve">立即预定</router-link>
				</div>
			</footer>
		</section>
	</div>
</template>

<style src="./css/ycw/travel_detail.css" scoped>

</style>

<script>
export default {
	data() {
		return {
			banner: {
				autoplay: 2000,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				loop: true,
			}
		}
	},
	mounted() {
		this.goback();
	},
	methods: {
		goback() {
			const back = document.querySelector('.back');
			back.onclick = () => {
				this.$router.go(-1);
			}
		}
	}
}

</script>