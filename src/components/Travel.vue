<template>
	<div class="index-travel">
		<!-- 头部开始 -->
		<header>
			<router-link to='/' class="back left">
				<img src="./images/jww-images/back.png" alt="">
			</router-link>
			<input type="text" placeholder='搜索你要去的国家和城市' class='left'>
			<router-link to='voice' class="jx">
				<img src="./images/jww-images/jx.png" alt="">
				<img src="./images/jww-images/yy.png" alt="" style='position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:.17rem;height:.25rem;'>
			</router-link>
			<router-link to='search' class="back right"></router-link>
		</header>
		<!-- 头部结束 -->
		<!-- banner开始 -->
		<swiper :options="banner" class="index-travel">
			<swiper-slide v-for="item in img" :key="item.key" class="banner">
				<img src="./images/jww-images/11.png" alt="">
			</swiper-slide>

			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- banner结束 -->
		<!-- 导航开始 -->
		<div class="nav">
			<div class="nav-left left">出境游</div>
			<div class="nav-left left">周边游</div>
			<div class="nav-left left">国内游</div>
		</div>
		<!-- 导航结束 -->
		<div class="navs">
			<div class="big">
				<div class="bigs left">
					<!-- 分类开始 -->
					<div class="classify">
						<div class="classify-left left">
							<a href='javascript:;' class='left span'>出境游</a>
							<a href='javascript:;' class='left span'>海岛&bull;马代</a>
							<a href='javascript:;' class='left span'>日本</a>
							<a href='javascript:;' class='left span'>东南亚&bull;南亚</a>
							<a href='javascript:;' class='left span'>欧洲&bull;美洲</a>
							<a href='javascript:;' class='left span'>奥新&bull;.中东</a>
							<a href='javascript:;' class='left span'>港澳&bull;台湾</a>
							<a href='javascript:;' class='left span'>自由行</a>
						</div>
					</div>
					<!-- 分类结束 -->
					<!-- 列表开始 -->
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<!-- 列表结束 -->
				</div>
				<div class="bigs left">
					<!-- 分类开始 -->
					<div class="classify">
						<div class="classify-left left">
							<a href='javascript:;' class='left span'>出境游</a>
							<a href='javascript:;' class='left span'>海岛&bull;马代</a>
							<a href='javascript:;' class='left span'>日本</a>
							<a href='javascript:;' class='left span'>东南亚&bull;南亚</a>
							<a href='javascript:;' class='left span'>欧洲&bull;美洲</a>
							<a href='javascript:;' class='left span'>奥新&bull;.中东</a>
							<a href='javascript:;' class='left span'>港澳&bull;台湾</a>
							<a href='javascript:;' class='left span'>自由行</a>
						</div>
					</div>
					<!-- 分类结束 -->
					<!-- 列表开始 -->
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<!-- 列表结束 -->
				</div>
				<div class="bigs left">
					<!-- 分类开始 -->
					<div class="classify">
						<div class="classify-left left">
							<a href='javascript:;' class='left span'>出境游</a>
							<a href='javascript:;' class='left span'>海岛&bull;马代</a>
							<a href='javascript:;' class='left span'>日本</a>
							<a href='javascript:;' class='left span'>东南亚&bull;南亚</a>
							<a href='javascript:;' class='left span'>欧洲&bull;美洲</a>
							<a href='javascript:;' class='left span'>奥新&bull;.中东</a>
							<a href='javascript:;' class='left span'>港澳&bull;台湾</a>
							<a href='javascript:;' class='left span'>自由行</a>
						</div>
					</div>
					<!-- 分类结束 -->
					<!-- 列表开始 -->
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<router-link to='travels1' class="lists">
						<div class="lists-top">
							<img src="./images/jww-images/10.png" alt="">
						</div>
						<div class="lists-bottom">
							<div class="bottom-left left">
								<span>富士山</span><br>富士山被日本人民誉为"圣岳",是日本民族的象征。</div>
							<div class="bottom-right right">RMB
								<span>8669</span>起</div>
						</div>
						<div class="person">
							<img src="./images/jww-images/8.png" alt="">
						</div>
						<div class="news">
							<img src="./images/jww-images/12.png" alt="">
						</div>
					</router-link>
					<!-- 列表结束 -->
				</div>
			</div>
		</div>
	</div>
</template>
<style src='./css/jww-css/travel.css'></style>
<script>
export default {
	data() {
		return {
			banner: {
                autoplay: 2000,
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination'
			},
			img:[1,2,3,4]
		}
	},
	mounted() {
		this.start()
	},
	methods: {
		start() {
			var navLeft = document.querySelectorAll('.nav-left');
			var big = document.querySelector('.big');
			for (var i = 0; i < navLeft.length; i++) {
				navLeft[i].style.background = '#F2F2F2';
				navLeft[i].style.color = '#181818';
			}
			navLeft[0].style.background = '#74ECFE';
			navLeft[0].style.color = '#fff';
			for (var i = 0; i < navLeft.length; i++) {
				navLeft[i].index = i;
				navLeft[i].onclick = function() {
					for (var j = 0; j < navLeft.length; j++) {
						navLeft[j].style.background = '#F2F2F2';
						navLeft[j].style.color = '#181818';
					}
					navLeft[this.index].style.background = '#74ECFE';
					navLeft[this.index].style.color = '#fff';
					big.style.transform = 'translateX(-' + this.index * 33.3333333 + '%)';
				}
			}
			var classify = document.querySelectorAll('.classify');
			var bigs = document.querySelectorAll('.bigs');
			for (var i = 0; i < bigs.length; i++) {
				var span = classify[i].querySelectorAll('.span');
				for (var j = 0; j < span.length; j++) {
					span[j].style.background = '#E4E4E4';
					span[j].style.color = '#323232';
				}
				span[0].style.background = '#FD1440';
				span[0].style.color = '#fff';
			}
			var flag = true;
			var span = document.querySelectorAll('.span');
			for (var k = 0; k < bigs.length; k++) {
				bigs[k].index = k;
				bigs[k].onclick = function() {
					flag = !flag;
					if (flag == false) {
						for (var i = 0; i < span.length; i++) {
							span[i].index = i;
							span[i].onclick = function() {
								console.log(1)
								for (var j = 0; j < span.length; j++) {
									span[j].style.background = '#E4E4E4';
									span[j].style.color = '#323232';
								}
								span[this.index].style.background = '#FD1440';
								span[this.index].style.color = '#fff';
							}
						}
					}
				}

			}
		}
	}
}

</script>
