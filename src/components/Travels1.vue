<template>
	<div class="index-travels">
		<!-- 头部开始 -->
		<header>
			<router-link to='/' class="back left">
				<img src="./images/jww-images/back.png" alt="">
			</router-link>
			<div class="find">产品详情</div>
			<a class="back right"></a>
		</header>
		<!-- 头部结束 -->
		<!-- banner开始 -->
		<swiper :options="swiper" class="swiper-container">
			<swiper-slide v-for="item in img" :key="item.key" class="swiper-slide banner">
				<img src="./images/jww-images/30.png" alt="">
			</swiper-slide>

			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- banner结束 -->
		<!-- 城市介绍开始 -->
		<div class="product" style='position:relative;'>
			<div class="product-top">日本-东京-富士山《7晚8日游》</div>
			<div class="number">太原出发，全程无自费，全程领队陪同，1晚温泉酒店，1天东京自由活动，清水寺，奈良神鹿公园，樱桃小丸子乐园，伊豆城崎海岸体验浓浓伊豆情......</div>
			<div class="product-margin">首付出发：
				<span>1108</span>&nbsp;起&nbsp;(需服务费)&nbsp;4种分期类型</div>
			<a class="link"><img src="./images/jww-images/31.png" alt=""></a>
			<div class="product-margin">优惠活动：
				<span class='margin'>返劵优惠</span>
				<span class='margin'>点评返现</span>
			</div>
			<a class="link" style='top:2.65rem;'><img src="./images/jww-images/31.png" alt=""></a>
			<div class="product-margin">领劵活动：
				<span class='margin'>立减劵</span>
				<span class='margin'>100元</span>
				<span class='margin'>960元</span>
			</div>
			<a class="link" style='top:3.3rem;'><img src="./images/jww-images/31.png" alt=""></a>
			<div class="product-top" style='margin-top:.35rem;margin-bottom:.28rem;'>出发城市：太原
				<div class="right">RMB
					<span>8669</span>元</div>
			</div>
		</div>
		<!-- 城市介绍结束 -->
		<!-- 出发日期开始 -->
		<div class="product" style='position:relative;'>
			<div class="date">
				<img src="./images/jww-images/22.png" alt="">
			</div>
			<div class="date-top">
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left" style='margin-left:.75rem;'>
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
				<div class="top-left left">
					<span>03-10周五<br>
						<i>￥6061</i>起</span>
				</div>
			</div>
			<a class="link" style='top:1.6rem;'><img src="./images/jww-images/31.png" alt=""></a>
		</div>
		<!-- 出发日期结束 -->
		<!-- 游客点评开始 -->
		<div class="product" style='position:relative;'>
			<div class="date left">
				<img src="./images/jww-images/23.png" alt="">
			</div>
			<div class="number right date-top">评论数量：
				<span>39</span>条</div>
			<div class="numbers date-top left">
				<div class="numbers-left left">导游服务：
					<span><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""></span>
				</div>
				<div class="numbers-left left">行程安排：
					<span><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""></span>
				</div>
				<div class="numbers-left left">餐饮住宿：
					<span><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""></span>
				</div>
				<div class="numbers-left left">旅行交通：
					<span><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""><img src="./images/jww-images/37.png" alt=""></span>
				</div>
			</div>
			<a class="link" style='top:1rem;'><img src="./images/jww-images/31.png" alt=""></a>
		</div>
		<!-- 游客点评结束 -->
		<!-- 产品品牌开始 -->
		<div class="product">
			<div class="date">
				<img src="./images/jww-images/24.png" alt="">
			</div>
			<div class="number">该产品在本州目的地满意度为85%，低于本州平均满意度6.9%。</div>
		</div>
		<!-- 产品品牌结束 -->
		<!-- 行程安排开始 -->
		<div class="product" style="padding-right:0;">
			<div class="date">
				<img src="./images/jww-images/25.png" alt="">
			</div>
			<div class="arrang">
				<div class="a left">
					<span>A行程(默认行程)</span>
				</div>
				<div class="a left">
					<span>B行程</span>
				</div>
			</div>
			<div class="sundays">
				<div class="big">
					<div class="sunday left numbered" style="padding-right:.25rem;position:relative;height:14.5rem;">
						<div class="sunday-top left">
							<span>7日行程</span>
						</div>
						<div class="sunday-top left">
							<span>产品特色</span>
						</div>
						<div class="sunday-top left">
							<span>费用说明</span>
						</div>
						<div class="sunday-top left">
							<span>旅游须知</span>
						</div>
						<div style="padding-left:.26rem;font-weight:bold;" class='left'>第一天 太原
							<span><img src="./images/jww-images/33.png" alt=""></span> 名古屋</div>
						<div class="once left">
							<div class="number">太原-名古屋(参考航班时间:0800-1355)太原机场制定时间集合乘飞机直飞名古屋抵达后乘车前往【绿城21】参观，之后入住酒店。【绿洲2】是注重环保观念的日本人造就了这一个盛满水的玻璃屋，就像是一个棒球场一般的大鱼缸。他是由hide-ki casai所设计建造而成。并获得2003年的solutia奖（专门颁给以玻璃为设计建造素材的作者）。绿洲21在当地除了是个夸耀绚丽的地标建筑物，也充分展现了环保的概念......</div>
							<div class="images left">
								<img src="./images/jww-images/timg.png" alt="">
								<span>奈良神鹿公园</span>
							</div>
							<div class="images left">
								<img src="./images/jww-images/timg1.png" alt="">
								<span>奈良神鹿公园</span>
							</div>
							<div class="number" style='font-weight:bold;position:relative;'>餐饮
								<div><img src="./images/jww-images/34.png" alt=""></div>
							</div>
							<div class="number">早餐：敬请自理<br>午餐：敬请自理<br>晚餐：敬请自理</div>
							<div class="number" style='font-weight:bold;position:relative;'>住宿</div>
							<div class="number" style='margin-bottom:0;'>名古屋机场酒店</div>
						</div>
						<div style="padding-left:.26rem;padding-top:1.2rem;font-weight:bold;" class='left'>第二天 太原
							<span><img src="./images/jww-images/33.png" alt=""></span> 名古屋</div>
						<div class="once left">
							<div class="number">太原-名古屋(参考航班时间:0800-1355)太原机场制定时间集合乘飞机直飞名古屋抵达后乘车前往【绿城21】参观，之后入住酒店。【绿洲2】是注重环保观念的日本人造就了这一个盛满水的玻璃屋，就像是一个棒球场一般的大鱼缸。他是由hide-ki casai所设计建造而成。并获得2003年的solutia奖（专门颁给以玻璃为设计建造素材的作者）。绿洲21在当地除了是个夸耀绚丽的地标建筑物，也充分展现了环保的概念......</div>
							<div class="images left">
								<img src="./images/jww-images/timg.png" alt="">
								<span>奈良神鹿公园</span>
							</div>
							<div class="images left">
								<img src="./images/jww-images/timg1.png" alt="">
								<span>奈良神鹿公园</span>
							</div>
							<div class="number" style='font-weight:bold;position:relative;'>餐饮
								<div><img src="./images/jww-images/34.png" alt=""></div>
							</div>
							<div class="number">早餐：敬请自理<br>午餐：敬请自理<br>晚餐：敬请自理</div>
							<div class="number" style='font-weight:bold;position:relative;'>住宿</div>
							<div class="number" style='margin-bottom:0;'>名古屋机场酒店</div>
							<div class="more">查看更多</div>
						</div>
					</div>
					<div class="sunday left numbered" style="padding-right:.25rem;position:relative;height:14.5rem;">
						<div class="sunday-top left">
							<span>7日行程</span>
						</div>
						<div class="sunday-top left">
							<span>产品特色</span>
						</div>
						<div class="sunday-top left">
							<span>费用说明</span>
						</div>
						<div class="sunday-top left">
							<span>旅游须知</span>
						</div>
						<div style="padding-left:.26rem;padding-top:.7rem;font-weight:bold;">第一天 太原
							<span><img src="./images/jww-images/33.png" alt=""></span> 名古屋</div>
						<div class="once left">
							<div class="number">太原-名古屋(参考航班时间:0800-1355)太原机场制定时间集合乘飞机直飞名古屋抵达后乘车前往【绿城21】参观，之后入住酒店。【绿洲2】是注重环保观念的日本人造就了这一个盛满水的玻璃屋，就像是一个棒球场一般的大鱼缸。他是由hide-ki casai所设计建造而成。并获得2003年的solutia奖（专门颁给以玻璃为设计建造素材的作者）。绿洲21在当地除了是个夸耀绚丽的地标建筑物，也充分展现了环保的概念......</div>
							<div class="images left">
								<img src="./images/jww-images/15.png" alt="">
								<span>奈良神鹿公园</span>
							</div>
							<div class="images left">
								<img src="./images/jww-images/15.png" alt="">
								<span>奈良神鹿公园</span>
							</div>
							<div class="number" style='font-weight:bold;position:relative;'>餐饮
								<div><img src="./images/jww-images/34.png" alt=""></div>
							</div>
							<div class="number">早餐：敬请自理<br>午餐：敬请自理<br>晚餐：敬请自理</div>
							<div class="number" style='font-weight:bold;position:relative;'>住宿</div>
							<div class="number" style='margin-bottom:0;'>名古屋机场酒店</div>
							<div class="more">查看更多</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 行程安排结束 -->
		<!-- 产品特点开始 -->
		<div class="product" style='position:relative;'>
			<div class="date">
				<img src="./images/jww-images/21.png" alt="">
			</div>
			<div class="number numbered" style='line-height:.4rem;margin-bottom:.5rem;height:1.6rem'>团期不同，所含特色不同，详见对应团期的pdf行程：<br>1.太原岂止，全程无自费，全程领队陪同；<br>2.双古都之奈良随处可见的超萌小路，共享欢乐时光；<br>3.尽享25k回程超大行李额，购物无忧，为亲朋好友伴足礼
				<br>1.太原岂止，全程无自费，全程领队陪同；<br>2.双古都之奈良随处可见的超萌小路，共享欢乐时光；<br>3.尽享25k回程超大行李额，购物无忧，为亲朋好友伴足礼
				<div class="more">查看更多</div>
			</div>
		</div>
		<!-- 产品特点结束 -->
		<!-- 费用说明开始 -->
		<div class="product">
			<div class="date">
				<img src="./images/jww-images/20.png" alt="">
			</div>
			<div class="number numbered" style='line-height:.4rem;position:relative;height:2.35rem;padding-bottom:.7rem;'>
				<span style='display:block;'>费用包含：<br>1.交通：往返团队/散客含机票含税费（团队机票将统一出售，散客机票因实时计价预定后即可出票）往返火车票当地旅游巴士。<br>2.住宿：行程所列酒店。<br>3.用餐：行程所列团队标准餐（中式餐或自助餐或特色餐，自由活动期间用餐请自理如因自身原因放弃用餐，则餐费不退）。<br>1.交通：往返团队/散客含机票含税费（团队机票将统一出售，散客机票因实时计价预定后即可出票）往返火车票当地旅游巴士。<br>2.住宿：行程所列酒店。<br>3.用餐：行程所列团队标准餐（中式餐或自助餐或特色餐，自由活动期间用餐请自理如因自身原因放弃用餐，则餐费不退）。</span>
				<div class="more">查看更多</div>
			</div>
			<div class="number numbered" style='line-height:.4rem;position:relative;height:1.6rem;padding-bottom:.7rem;'>
				<span style='display:block;'>费用不含：<br>1.单房差：单房差（具体团期报价）。<br>2.门票：行程中注明需要另行支付的1自费景点。<br>3.旅游意外险：旅游人身意外保险。<br>1.单房差：单房差（具体团期报价）。<br>2.门票：行程中注明需要另行支付的1自费景点。<br>3.旅游意外险：旅游人身意外保险。</span>
				<div class="more">查看更多</div>
			</div>
		</div>
		<!-- 费用说明结束 -->
		<!-- 旅游须知开始 -->
		<div class="product" style='font-weight:bold;position:relative;'>旅游须知
			<router-link to="notice" class="link" style='top:.2rem;'>
				<img src="./images/jww-images/31.png" alt="">
			</router-link>
		</div>
		<!-- 旅游须知结束 -->
		<!-- 签证信息开始 -->
		<div class="product" style='font-weight:bold;position:relative;'>签证信息
			<a class="link" style='top:.2rem;'>
				<img src="./images/jww-images/31.png" alt="">
			</a>
		</div>
		<!-- 签证信息结束 -->
		<!-- 产品推荐开始 -->
		<div class="product" style='position:relative;'>
			<div class="date">
				<img src="./images/jww-images/19.png" alt="">
			</div>
			<div class="fen">
				<a class="fens left">
					<img src="./images/jww-images/16.png" alt="">
					<div class="fens-top">
						<div class="jp">
							<日本5日6晚游>太原起止，全程无自费，全程领队陪同，特色安排..</div>
						<div class="rmb right">RMB
							<span>8669</span>元</div>
					</div>
				</a>
				<a class="fens left">
					<img src="./images/jww-images/17.png" alt="">
					<div class="fens-top">
						<div class="jp">
							<日本5日6晚游>太原起止，全程无自费，全程领队陪同，特色安排..</div>
						<div class="rmb right">RMB
							<span>8669</span>元</div>
					</div>
				</a>
				<a class="fens left">
					<img src="./images/jww-images/18.png" alt="">
					<div class="fens-top">
						<div class="jp">
							<日本5日6晚游>太原起止，全程无自费，全程领队陪同，特色安排..</div>
						<div class="rmb right">RMB
							<span>8669</span>元</div>
					</div>
				</a>
				<a class="fens left">
					<img src="./images/jww-images/29.png" alt="">
					<div class="fens-top">
						<div class="jp">
							<日本5日6晚游>太原起止，全程无自费，全程领队陪同，特色安排..</div>
						<div class="rmb right">RMB
							<span>8669</span>元</div>
					</div>
				</a>
			</div>
			<a class="link" style='top:.2rem;'><img src="./images/jww-images/31.png" alt=""></a>
		</div>
		<!-- 产品推荐结束 -->
		<!-- 立即预定开始 -->
		<div class="reservations">
			<router-link to="Reserve">立即预定</router-link>
		</div>
		<!-- 立即预定结束 -->
	</div>
</template>
<style src='./css/jww-css/travels1.css' scoped>

</style>

<script >


export default {
	data() {
		return {
			img: ['a', 'b', 'c', 'd'],
			swiper: {
				autoplay: 2000,
				loop: true,
				pagination: '.swiper-pagination',
				paginationClickable: true
			}
		}
	},
	mounted() {

	},
	methods: {
		start() {
			var as = document.querySelectorAll('.a');
			var span = document.querySelectorAll('.a>span');
			var big = document.querySelector('.big');
			for (var i = 0; i < as.length; i++) {
				span[i].style.borderBottom = '5px solid #fff';
				span[i].style.color = '#181818';
			}
			span[0].style.borderBottom = '5px solid #74ECFE';
			span[0].style.color = '#74ECFE';
			for (var i = 0; i < as.length; i++) {
				as[i].index = i;
				as[i].onclick = function() {
					for (var j = 0; j < as.length; j++) {
						span[j].style.borderBottom = '5px solid #fff';
						span[j].style.color = '#181818';
					}
					span[this.index].style.borderBottom = '5px solid #74ECFE';
					big.style.transform = 'translateX(-' + this.index * 50 + '%)';
					span[this.index].style.color = '#74ECFE';
				}
			}
			var numbered = document.querySelectorAll('.numbered');
			var more = document.querySelectorAll('.numbered .more');
			var flag = true;
			var arr = ['14.5rem', '14.5rem', '1.5rem', '2.3rem', '1.5rem']
			for (var i = 0; i < more.length; i++) {
				more[i].index = i;
				more[i].onclick = function() {
					flag = !flag;
					if (flag == false) {
						numbered[this.index].style.height = 'auto';
						more[this.index].innerHTML = '收起';
					} else {
						numbered[this.index].style.height = arr[this.index];
						more[this.index].innerHTML = '查看更多';

					}
				}
			}
		}
	}
}
</script>

