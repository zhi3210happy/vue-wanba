<script>
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class App extends Vue {
  constructor() {
    super();
    this.state = {
      route: ["/", "destination", "more", "AboutMe"],
      imgUrl: [
        "./images/index-index.png",
        "./images/index-place.png",
        "./images/index-men.png",
        "./images/index-my.png"
      ],
      text: ["首页", "目的地", "达人", "我的"]
    };
  }
  render() {
    return (
      <footer class="index-footer">
        <ul class="cont">
          {this.state.route.map((item, i) => {
            return (
              <li key={i}>
                <router-link to={item}>
                  <img src={require(`${this.state.imgUrl[i]}`)} alt="" />
                  {this.state.text[i]}
                </router-link>
              </li>
            );
          })}
        </ul>
      </footer>
    );
  }
}
</script>
<style scoped>
/*$footer 开始*/
.index-footer {
  width: 100%;
  height: 50px;
  background: #fff;
  -webkit-position: absolute;
  position: fixed;
  bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.3rem;
}
.index-footer .cont {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  line-height: 50px;
}

.index-footer .cont li {
  height: 100%;
  line-height: 0px;
}
.index-footer .cont li a {
  display: block;
  padding: 10px;
  color: #000;
  line-height: 20px;
  font-size: 10px;
}
.index-footer .cont li a img {
  margin: 0 auto;
  display: block;
  height: 20px;
}
/*footer结束*/
</style>

