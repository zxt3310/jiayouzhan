(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/RepireOrderDetails/RepireOrderDetails"],{"28d2":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},6371:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){return n.e("pages/template/uni-rate/uni-rate").then(n.bind(null,"0525"))},a={data:function(){return{order:{id:0,repair_num:"",gas_station_id:"",faulty_item:"",faulty_desc:"",pic:"",contact:"",contact_phone:"",order_taker:"",order_taken_time:"",completion:"",result:"",status:0,related_order:"",action:"",created_at:"",updated_at:"",gs_name:"",address:"",rating_a:0,rating_q:0},statusText:["待处理","已接单","到达加油站","进行中","已完成","已评价"]}},components:{UniRate:r},methods:{orderCancel:function(){var t=this;e.showModal({title:"提示",content:"是否取消申请单",success:function(n){n.confirm&&t.$fly.request("api/delete-orders",{repairNum:t.order.repair_num},{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){e.navigateBack(),e.showToast({icon:"success",title:"已取消"})}).catch(function(t){console.log(t," at pages/RepireOrderDetails/RepireOrderDetails.vue:158"),e.showToast({icon:"none",title:"取消失败"})})}})}},onLoad:function(e){var t=this;console.log(e," at pages/RepireOrderDetails/RepireOrderDetails.vue:170"),this.$fly.post("api/mgr-orders-details",{repairNum:e.orderNo}).then(function(e){t.order=e}).catch(function(e){console.log(e," at pages/RepireOrderDetails/RepireOrderDetails.vue:176")})}};t.default=a}).call(this,n("6e42")["default"])},ac75:function(e,t,n){"use strict";var r=n("ee7a"),a=n.n(r);a.a},d9e8:function(e,t,n){"use strict";n.r(t);var r=n("28d2"),a=n("ef6a");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("ac75");var i=n("2877"),u=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports},ee7a:function(e,t,n){},ef6a:function(e,t,n){"use strict";n.r(t);var r=n("6371"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a}},[["b05a","common/runtime","common/vendor"]]]);