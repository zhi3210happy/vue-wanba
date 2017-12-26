

<style  src="./css/bzp/more.css" scoped>

</style>
<script>
import MoreHeader from "./MoreHeader";
export default {
  data() {
    return {
      title: "更多",
      route: "/",
      more: {
        route: ["ticket", "daren", "guide", "sheyingshi"],
        imgSrc: [
          "./images/bzp/tackit.png",
          "./images/bzp/xz.png",
          "./images/bzp/dy.png",
          "./images/bzp/sys.png"
        ],
        text: ["门票", "达人", "导游", "摄影师"]
      }
    };
  },
  render(h) {
    const children = this.more.route.map((item, i) => {
      return h("figure", [
        h(
          "router-link",
          {
            props: {
              to: item
            }
          },
          [
            h("img", {
              attrs: {
                src: require(`${this.more.imgSrc[i]}`)
              }
            }),
            h("figcaption", this.more.text[i])
          ]
        )
      ]);
    });
    return h("div", [
      h("more-header", {
        props: {
          title: this.title,
          route: this.route
        }
      }),
      h(
        "section",
        {
          class: "more"
        },
        children
      )
    ]);
  },
  components: {
    MoreHeader
  }
};
</script>

    