(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d763d5c"],{"0267":function(t,a,e){"use strict";e("ebae")},"0a3b":function(t,a,e){"use strict";e("d193")},"186c":function(t,a,e){"use strict";e("f906")},1974:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Layout"},[e("Nav",{on:{showDrawer:t.showDrawer}}),e("router-view"),e("Drawer",{attrs:{isShowDrawer:t.isShowDrawer}})],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Nav"},[e("div",{staticClass:"r",on:{click:function(a){return t.showDrawer()}}},[t.userInfo.avatarurl?e("img",{attrs:{src:t.userInfo.avatarurl,alt:"",width:"48px",height:"48px"}}):t._e(),t.userInfo.avatarurl?t._e():e("span")]),e("div",{staticClass:"l"},[e("div",{staticClass:"item",class:"/home"===t.active&&"active",on:{click:function(a){return t.linkTo("/home")}}},[t._v("home")]),e("div",{staticClass:"item",class:"/work"===t.active&&"active",on:{click:function(a){return t.linkTo("/work")}}},[t._v("work")]),e("div",{staticClass:"item",class:"/link"===t.active&&"active",on:{click:function(a){return t.linkTo("/link")}}},[t._v("link")])])])},i=[],s={name:"Nav",components:{},props:{},data:function(){return{active:"home"}},computed:{userInfo:function(){return this.$store.state.auth.userInfo}},created:function(){this.active=this.$route.path},mounted:function(){},methods:{linkTo:function(t){this.active=t,"".concat(t)!==this.$route.path&&this.$router.push({path:"".concat(t)})},showDrawer:function(){this.userInfo.username?this.$emit("showDrawer"):this.$store.commit("SET_ISSHOW_LOGIN",!0)}}},c=s,u=(e("186c"),e("2877")),l=Object(u["a"])(c,o,i,!1,null,"51071ad2",null),m=l.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Drawer",class:t.isShowDrawer&&"active"},[e("div",{staticClass:"jx-card"}),e("div",{staticClass:"jx-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.nickname,expression:"formaData.nickname"}],attrs:{type:"text",placeholder:"nickname"},domProps:{value:t.formaData.nickname},on:{input:function(a){a.target.composing||t.$set(t.formaData,"nickname",a.target.value)}}})]),e("div",{staticClass:"jx-input"},[t.formaData.avatarurl?e("img",{attrs:{src:t.formaData.avatarurl,width:"32px",height:"32px",alt:""}}):t._e(),e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.avatarurl,expression:"formaData.avatarurl"}],attrs:{type:"text",placeholder:"avatarurl"},domProps:{value:t.formaData.avatarurl},on:{input:function(a){a.target.composing||t.$set(t.formaData,"avatarurl",a.target.value)}}})]),e("div",{staticClass:"jx-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.mail,expression:"formaData.mail"}],attrs:{type:"text",placeholder:"mail"},domProps:{value:t.formaData.mail},on:{input:function(a){a.target.composing||t.$set(t.formaData,"mail",a.target.value)}}})]),e("div",{staticClass:"jx-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.phone,expression:"formaData.phone"}],attrs:{type:"text",placeholder:"phone"},domProps:{value:t.formaData.phone},on:{input:function(a){a.target.composing||t.$set(t.formaData,"phone",a.target.value)}}})]),e("div",{staticClass:"jx-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.gender,expression:"formaData.gender"}],attrs:{type:"text",placeholder:"性别"},domProps:{value:t.formaData.gender},on:{input:function(a){a.target.composing||t.$set(t.formaData,"gender",a.target.value)}}})]),e("div",{staticClass:"jx-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.sign,expression:"formaData.sign"}],attrs:{type:"text",placeholder:"签名"},domProps:{value:t.formaData.sign},on:{input:function(a){a.target.composing||t.$set(t.formaData,"sign",a.target.value)}}})]),e("div",{staticClass:"jx-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formaData.birth,expression:"formaData.birth"}],attrs:{type:"text",placeholder:"birth"},domProps:{value:t.formaData.birth},on:{input:function(a){a.target.composing||t.$set(t.formaData,"birth",a.target.value)}}})]),e("div",{staticClass:"jx-btn",on:{click:function(a){return t.updateOwnUserInfo()}}},[t._v("保存")])])},p=[],d=e("8898"),v={name:"Layout",components:{},props:["isShowDrawer"],data:function(){return{formaData:{avatarurl:"https://minio.peopleyun.cn/people-chain-logo/2570622176734478336-20221228104802600.jpg"}}},computed:{userInfo:function(){return this.$store.state.auth.userInfo}},watch:{isShowDrawer:{immediate:!0,handler:function(t){t&&this.fetchUserInfoById()}}},mounted:function(){this.fetchUserInfoById()},methods:{fetchUserInfoById:function(){var t=this;d["a"].conn.fetchUserInfoById(this.userInfo.username).then((function(a){t.formaData=a.data[t.userInfo.username]}))},updateOwnUserInfo:function(){d["a"].conn.updateOwnUserInfo(this.formaData).then((function(){}))}}},h=v,w=(e("0a3b"),Object(u["a"])(h,f,p,!1,null,"29c35c46",null)),D=w.exports,g={name:"Layout",components:{Nav:m,Drawer:D},props:{},data:function(){return{isShowDrawer:!1}},mounted:function(){},methods:{showDrawer:function(){this.isShowDrawer=!this.isShowDrawer}}},x=g,k=(e("0267"),Object(u["a"])(x,n,r,!1,null,"162c8c80",null));a["default"]=k.exports},d193:function(t,a,e){},ebae:function(t,a,e){},f906:function(t,a,e){}}]);
//# sourceMappingURL=chunk-4d763d5c.de6eef4c.js.map