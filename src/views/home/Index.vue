<template>
  <div class="Home" :class="a">
    <iframe src="../../../md/a.md" frameborder="0" id="frame"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  props: {

  },
  data() {
    return {
      a: ''
    }
  },
  created () {
    let iframe = document.getElementById('frame')
    console.log(iframe.contentWindow.document)
  },
  mounted () {
    
    // iframe.load(function () {undefined

    //   var cssLink = document.createElement("link");

    //   cssLink.href = "style.css";

    //   cssLink.rel = "stylesheet";

    //   cssLink.type = "text/css";

    //   frames['iframe'].document.body.appendChild(cssLink);

    // });
    setTimeout(() => {
      this.a = 'active'
    }, 3000)
  },
  methods: {},
}
</script>

<style lang="less" scoped>
// .Home{
//   height: 100vh;
//   background: url(~@/assets/imgs/a.jpg) no-repeat;
//   background-size: 100%;
//   transition: all 3s;
// }
// .Home.active{
//   background: url(~@/assets/imgs/b.jpg) no-repeat;
//   background-size: 100%;
// }
</style>
