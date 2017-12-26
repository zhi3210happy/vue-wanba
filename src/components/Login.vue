<template>
	<section class="denglu1">
		<div class="dl-fh">
			<router-link to="/"></router-link>
		</div>
		<div class="dl-zhu">
			<div class="dl-top">
				<a>
					<img src="./images/xlg/dl-touxiang.png" alt="">
				</a>
			</div>
			<div class="dl-zhong">
				<div class="img">
					<img src="./images/xlg/tishi1.png" alt="">
					<img src="./images/xlg/tishi2.png" alt="">
				</div>
				<div class="dl-input">
					<div class="zuo">
						账号:
					</div>
					<input type="text" autofocus placeholder='手机号/会员吗/昵称/邮箱'>
					<div class="you">
						<img src="./images/xlg/dl-gb.png" alt="">
					</div>
				</div>
				<div class="dl-input">
					<div class="zuo">
						密码:
					</div>
					<input type="password" placeholder='请输入8~16位登陆密码' disabled='disabled'>
					<input type="text" placeholder='请输入8~16位登陆密码' disabled='disabled'>
					<div class="you">
						<img src="./images/xlg/dl-yj.png" alt="">
					</div>
				</div>
			</div>
			<div class="dl-xia">
				<div class="left">
					<div class="hua">
						<div class="yuan">
							<div class="yuans"></div>
						</div>
					</div>
				</div>
				<div class="zi-left">
					自主登陆
				</div>
				<div class="zi-right">
					忘记密码
				</div>
				<div class="right">
					<div class="hua">
						<div class="yuan">
							<div class="yuans"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="dl-bottom">
			<div class="btn1">
				<span>登陆</span>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div class="btn2">
				<a>注册&nbsp;&nbsp;</a>
			</div>
			<div class="di">
				<a>
					<img src="./images/xlg/dl-QQ.png" alt="">
				</a>
				<a>
					<img src="./images/xlg/weixin.png" alt="">
				</a>
				<a>
					<img src="./images/xlg/weibo.png" alt="">
				</a>
			</div>
		</div>
	</section>
</template>

<style src="./css/xlg/moRen.css" scoped></style>
<style src="./css/xlg/denglu1.css" scoped></style>
<script>
import { mapMutations } from 'vuex'
export default {
	data() {
		return {

		}
	},
	mounted() {
		this.start()
	},
	methods: {
		...mapMutations(['login']),
		start() {
			var arr = [
				{ name: 'admin', pad: 'admin' }
			]
			var data = { yi: false, er: false }
			var dl1 =this.$(".dl-zhong>.dl-input>input");
			var dl2 = this.$$(".dl-zhong>.dl-input>input")[1];
			var dl3 = this.$$(".dl-zhong>.dl-input>input")[2];
			var image1 = this.$$(".dl-zhong>.dl-input>.you>img")[0];
			var image2 = this.$$(".dl-zhong>.dl-input>.you>img")[1];
			var img1 = this.$$(".dl-zhong>.img>img")[0];
			var img2 = this.$$(".dl-zhong>.img>img")[1];

			dl3.style.display = 'none';
			image1.addEventListener('touchend', function() {
				dl1.value = '';
				dl2.value = '';
				dl3.value = '';
				data.yi = false;
				data.er = false;
				dl2.disabled = 'disabled';
				dl3.disabled = 'disabled';
			})
			var flag = true;
			image2.addEventListener('touchend', function() {
				if (flag) {
					flag = false;
					dl3.value = dl2.value;
					dl2.style.display = 'none';
					dl3.style.display = 'block';
				} else {
					flag = true;
					dl2.value = dl3.value
					dl3.style.display = 'none';
					dl2.style.display = 'block';
				}
			})

			dl1.onblur = function() {
				var str = this.value;
				for (var i = 0; i < arr.length; i++) {
					if (str != arr[i].name) {
						img1.style.opacity = 1;
						data.yi = false;
						dl2.disabled = 'disabled';
						dl3.disabled = 'disabled';
					} else {
						data.yi = true;
						dl2.disabled = '';
						dl3.disabled = '';
						img1.style.opacity = 0;
						return;
					}
				}
			}

			dl1.onfocus = function() {
				img1.style.opacity = 0;
				img2.style.opacity = 0;
			}

			dl2.onblur = function() {
				var str = this.value;
				for (var i = 0; i < arr.length; i++) {
					if (str != arr[i]['pad']) {
						img2.style.opacity = 1;
						data.er = false;
					} else {
						data.er = true;
						img2.style.opacity = 0;
						return
					}
				}
			}
			dl2.onfocus = function() {
				if (data.yi) {
					img2.style.opacity = 0;
					dl2.disabled = '';
				} else {
					dl2.disabled = 'disabled'
				}
			}
			dl3.onblur = function() {
				var str = this.value;
				for (var i = 0; i < arr.length; i++) {
					if (str != arr[i]['pad']) {
						img2.style.opacity = 1;
						data.er = false;
					} else {
						data.er = true;
						img2.style.opacity = 0;
						return
					}
				}
			}
			dl3.onfocus = function() {
				if (data.yi) {
					img2.style.opacity = 0;
					dl2.disabled = '';
				} else {
					dl2.disabled = 'disabled'
				}
			}

			var hua = this.$$('.denglu1 .dl-xia .hua');
			for (var i = 0; i < hua.length; i++) {
				hua[i].addEventListener('touchend', function() {
					if (this.className == 'hua') {
						this.classList.add('active');
					} else {
						this.classList.remove('active');
					}

				})
			}

			var color = ['#7C7C7C', '#BFBEBE', '#fff'];
			var num1 = 0;
			var num2 = 1;
			var num3 = 2;
			var div = this.$$('.denglu1 .dl-bottom .btn1 div');
			var btn1 =this.$('.denglu1 .dl-bottom .btn1');
			var btn2 =this.$('.denglu1 .dl-bottom .btn2');
			var that=this;
			btn1.addEventListener('click', function() {
				if (data.yi && data.er) {
					this.classList.add('active');
					var t = setInterval(function() {
						num2++;
						if (num2 == div.length) {
							num2 = 0;
						}
						num3 = num2 + 1;
						if (num3 == div.length) {
							num3 = 0;
						}
						div[num1].style.background = color[0]; div[num2].style.background = color[1];
						div[num2].style.background = color[1]; div[num2].style.background = color[1];
						div[num3].style.background = color[2];
						num1 = num2;

					}, 500)
					var d = setTimeout(()=>{
						clearInterval(t);
						clearTimeout(d);
						that.login('admin');
						that.$router.push('/');
					}, 1000)
				}
			})
		}
	}
}
</script>
