<template>
  <div class="Home">
    <iframe src="../../../md/a.md" frameborder="0" id="frame"></iframe>
    <!-- <VueMarkdown v-model="context" :toolbars="toolbars" /> -->
    <mavon-editor
     :value="context"
     :subfield = "prop.subfield"
     :defaultOpen = "prop.defaultOpen"
     :toolbarsFlag = "prop.toolbarsFlag"
     :scrollStyle="prop.scrollStyle"
     v-highlight
  ></mavon-editor>
  </div>
</template>

<script>
import axios from 'axios'
// import marked from 'marked'

// import MarkdownIt from 'markdown-it'
export default {
  name: 'Home',
  components: {

  },
  props: {

  },
  data() {
    return {
      context: '',
      prop: {
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        toolbarsFlag: false,
        scrollStyle: true
      }
    }
  },
  created () {
    // let iframe = document.getElementById('frame')
    // console.log(iframe.contentWindow.document)
  },
  mounted () {
    this.$hljs.highlightCode()
    // console.log(require(`https://hi-jx.vercel.app/md/a.md`))
    axios({ method:'get', url:'https://hi-jx.vercel.app/md/a.md'}).then(res => {
      console.log(res.data)
      // const md = new MarkdownIt()
      this.context = res.data
    })
    // iframe.load(function () {undefined

    //   var cssLink = document.createElement("link");

    //   cssLink.href = "style.css";

    //   cssLink.rel = "stylesheet";

    //   cssLink.type = "text/css";

    //   frames['iframe'].document.body.appendChild(cssLink);

    // });
    // setTimeout(() => {
    //   this.a = 'active'
    // }, 3000)
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
