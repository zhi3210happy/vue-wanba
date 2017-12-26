<script>
import "./css/bzp/daren.css";
import MoreHeader from "./MoreHeader";
export default {
  data() {
    return {
      banner: {
        autoplay: 2000,
        paginationClickable: true,
        spaceBetween: 2,
        slidesPerView: "auto"
      },
      swiper: ["维多利亚", "帝皇侠", "雨涵", "奔跑骚年", "艾薇儿"]
    };
  },
  props: {
    options: {
      type: Object,
      required: true,
      default() {
        return {
          title: "达人",
          route1: "/more",
          img1: "rmdr",
          route2: "darenxq",
          img2: "drtj",
          message: "海南7日5晚自由行·【立减888含黄金周！】直飞 3+2双酒店DIY",
          className: ["photo", ""],
          imgArr: ["17380965_999592.jpg", "2017-03-19_113441.png"]
        };
      }
    }
  },
  components: {
    MoreHeader
  },
  render(h) {
    const moreHeader = h("more-header", {
      props: {
        title: this.options.title,
        route: this.options.route1
      }
    });
    const section_Div1 = h(
      "div",
      {
        'class': "title"
      },
      [h("img", {
        attrs: {
          src:`./static/images/${this.options.img1}.png`
        }
      })]
    );
    const section_Swiper = h(
      "swiper",
      {
        'class': "drbox",
        props: {
          options: this.banner
        }
      },
      this.swiper.map((item, i) => {
        return h(
          "swiper-slide",
          {
            props: {
              key: i
            }
          },
          [h(
            "router-link",
            {
              props: {
                to: this.options.route2
              }
            },
            [
              h("img",              {
                attrs: {
                  src:`./static/images/dr${i + 1}.png`
                }
              }),
              [h("span", item)]
            ]
          )]
        );
      })
    );
    const section_Div2 = h(
      "div",
      {
        'class': "hyh"
      },
      [h(
        "router-link",
        {
          props: {
            to: this.options.route2
          }
        },
        [h("img", {
          attrs: {
            src:require("./images/bzp/hyp.png")
          }
        })]
      )]
    );
    const section1 = h(
      "section",
      {
        'class': "rmdr"
      },
      [section_Div1, section_Swiper, section_Div2]
    );
    const div = h(
      "div",
      {
        attrs: {
          id: "title-img"
        }
      },
      [h("img", {
        attrs: {
          src:`./static/images/${this.options.img2}.png`
        }
      })]
    );
    const section2 = (
        <section class="drtj-list">
          <div class="dr1">
            <div class="touxiang">
              <div class="left">
                <router-link to="darenxq">
                  <img src={require('./images/bzp/tx.png')} alt="" />
                </router-link>
                <div class="name-date">
                  <span>Moli</span>
                  <span>2016-05-06</span>
                </div>
              </div>
              <div class="focus">
                <a>关注</a>
              </div>
            </div>
            <div class="miaoshu duotext">{this.options.message}</div>
            <div class={this.options.className}>
              {this.options.imgArr.map((item, i) => {
                return (
                  <router-link to={this.options.route2} key={i}>
                    <img src={require(`../../static/images/${item}`)} alt="" />
                  </router-link>
                );
              })}
            </div>
          </div>
        </section>
      );
    return h("div",[moreHeader,section1,div,section2]);
  }
};
</script>
