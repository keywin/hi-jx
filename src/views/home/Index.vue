<template>
  <div class="Home">
    <!-- <iframe src="../../../md/a.md" frameborder="0" id="frame"></iframe> -->
    <!-- <VueMarkdown v-model="context" :toolbars="toolbars" /> -->
    <mavon-editor
     :value="context"
     :subfield = "prop.subfield"
     :defaultOpen = "prop.defaultOpen"
     :toolbarsFlag = "prop.toolbarsFlag"
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
        scrollStyle: false
      }
    }
  },
  created () {
    // let iframe = document.getElementById('frame')
    // console.log(iframe.contentWindow.document)
  },
  mounted () {
    // console.log(require(`https://hi-jx.vercel.app/md/a.md`))
    // axios({ method:'get', url:'https://hi-jx.vercel.app/md/a.md'}).then(res => {
    axios({ method:'get', url:'../../../md/a.md'}).then(res => {
      console.log(res.data)
      // const md = new MarkdownIt()
      this.context = res.data
      this.$hljs.highlightCode()
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

<style lang="less">
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
.hljs{
  background: none !important;
}
pre code.hljs {
    display: block;
    overflow-x: auto;
    padding: 1em
}

code.hljs {
    padding: 3px 5px
}

/*!
  Theme: GitHub
  Description: Light theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-light
  Current colors taken from GitHub's CSS
*/
.hljs {
    color: #24292e;
    background: #fff
}

.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_ {
    color: #d73a49
}

.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_ {
    color: #6f42c1
}

.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable {
    color: #005cc5
}

.hljs-meta .hljs-string,.hljs-regexp,.hljs-string {
    color: #032f62
}

.hljs-built_in,.hljs-symbol {
    color: #e36209
}

.hljs-code,.hljs-comment,.hljs-formula {
    color: #6a737d
}

.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag {
    color: #22863a
}

.hljs-subst {
    color: #24292e
}

.hljs-section {
    color: #005cc5;
    font-weight: 700
}

.hljs-bullet {
    color: #735c0f
}

.hljs-emphasis {
    color: #24292e;
    font-style: italic
}

.hljs-strong {
    color: #24292e;
    font-weight: 700
}

.hljs-addition {
    color: #22863a;
    background-color: #f0fff4
}

.hljs-deletion {
    color: #b31d28;
    background-color: #ffeef0
}

</style>
