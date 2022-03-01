<template>
  <div class="Home">
    <div class="LEFT">
      <ul>
        <li v-for="item in treeData" :key="item.id" :class="active === item.id && 'active'" @click="treeClick(item)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="RIGHT">
      <mavon-editor
        :value="context"
        :subfield = "false"
        defaultOpen = "preview"
        :toolbarsFlag = "false"
      ></mavon-editor>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  components: {

  },
  props: {

  },
  data() {
    return {
      context: '',
      treeData: [
        { title: '01 http 和 https.md', id: 1646117485649 },
        { title: '02 本地存储', id: 1646125731162 },
      ],
      active: ''
    }
  },
  created () {
    sessionStorage.getItem('kaishi')
    this.treeClick(this.treeData[0])
  },
  mounted () {

  },
  methods: {
    getData(title) {
      // axios({ method:'get', url: `../../../md/${title}`}).then(res => {
      axios({ method:'get', url: `https://hi-jx.vercel.app/md/${title}`}).then(res => {
        console.log(res.data)
        this.context = res.data
        this.$hljs.highlightCode()
      })
    },
    treeClick(item) {
      this.active = item.id
      this.getData(item.title)
    }
  },
}
</script>

<style lang="less" scoped>
.Home{
  flex: 1;
  display: flex;
  overflow: hidden;
  .LEFT{
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    ul{
      flex: 1;
      padding: 5px 12px 0;
      overflow-y: auto;
      li{
        display: flex;
        align-items: center;
        height: 38px;
        font-size: 14px;
        color: #c5c9d6;
        cursor: pointer;
      }
      li.active{
        color: #464d6b;
      }
    }
  }
  .RIGHT{
    flex: 1;
    height: 100%;
    border-left: 3px solid #f6f7fc;
    overflow-y: auto;
    .markdown-body{
      height: 100%;
      box-shadow: none !important;
    }
    /deep/ .scroll-style{
      background: #fff !important;
    }
  }
}

</style>
