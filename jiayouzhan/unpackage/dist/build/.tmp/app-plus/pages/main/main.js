(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/main"],{"2ef4":function(e,n,t){"use strict";t.r(n);var o=t("eb55"),r=t("5453");for(var i in r)"default"!==i&&function(e){t.d(n,e,function(){return r[e]})}(i);t("6595");var a=t("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},5427:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("2f62"),r=function(){return t.e("pages/template/recordTemple/recordTemple").then(t.bind(null,"9ecd"))},i={data:function(){return{orderModel:{order_no:"",faulty_item:"",faulty_desc:"",pic:"",submit_time:"",completion:"",status:0,gs_name:"",address:""},list:[]}},components:{rreecc:r},computed:(0,o.mapState)(["forcedLogin","hasLogin","userName","test"]),methods:{showDetails:function(n){e.navigateTo({url:"../RepireOrderDetails/RepireOrderDetails?orderNo="+n.order_no})},createOrder:function(){this.hasLogin?e.navigateTo({url:"../startRepairReq/startRepairReq"}):e.navigateTo({url:"../login/login"})},gotoRate:function(n){console.log(n," at pages/main/main.vue:69"),e.navigateTo({url:"orderRate?orderId="+n})},pullOrder:function(){var e=this;this.$fly.post("api/mgr-orders",{}).then(function(n){console.log(n," at pages/main/main.vue:78"),e.list=n}).catch(function(e){Console.log(e)})}},onShow:function(){this.pullOrder()},onLoad:function(){var n=this;this.hasLogin||e.showModal({title:"未登录",content:"您未登录，需要登录后才能继续",showCancel:!this.forcedLogin,success:function(t){t.confirm&&(n.forcedLogin?e.reLaunch({url:"../login/login"}):e.navigateTo({url:"../login/login"}))}})},onPullDownRefresh:function(){this.pullOrder(),console.log("下拉刷新"," at pages/main/main.vue:118"),setTimeout(function(){e.stopPullDownRefresh()},500)}};n.default=i}).call(this,t("6e42")["default"])},5453:function(e,n,t){"use strict";t.r(n);var o=t("5427"),r=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=r.a},6595:function(e,n,t){"use strict";var o=t("d6fd"),r=t.n(o);r.a},d6fd:function(e,n,t){},eb55:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})}},[["c6bd","common/runtime","common/vendor"]]]);