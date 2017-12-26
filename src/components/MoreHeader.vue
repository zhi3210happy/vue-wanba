
<style src="./css/bzp/morehead.css" scoped>

</style>

<script>
export default {
  props: ["route", "title"],
  render(h) {
    return h(
      "header",
      {
        class: "head"
      },
      [
        h(
          "router-link",
          {
            props: {
              to: this.route
            }
          },
          [
            h("img", {
              attrs: {
                src: require("./images/yi-back.png")
              }
            })
          ]
        ),
        [h("span", this.title)]
      ]
    );
  }
};
</script>
