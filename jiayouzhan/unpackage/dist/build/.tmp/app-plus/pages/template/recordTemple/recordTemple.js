(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/recordTemple/recordTemple"],{"1e8f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"rreecc",data:function(){return{statusColor:["fe4a47","4185de","4185de","201a62","1c713d","1c713d"],statusText:["待处理","已接单","到达加油站","进行中","已完成","已评价"]}},props:{idCode:{type:String},status:{type:Number},xm:{type:String},ms:{type:String},jyz:{type:String},ts:{type:String}},computed:{},methods:{getcolor:function(t){var e="#"+this.statusColor[t];return e},gotoRate:function(t){this.$emit("gotoRate",t)}}};e.default=r},"9ecd":function(t,e,n){"use strict";n.r(e);var r=n("f527"),a=n("f53d");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("e515");var o=n("2877"),c=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},aa80:function(t,e,n){},e515:function(t,e,n){"use strict";var r=n("aa80"),a=n.n(r);a.a},f527:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getcolor(t.status));t.$mp.data=Object.assign({},{$root:{m0:n}})},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},f53d:function(t,e,n){"use strict";n.r(e);var r=n("1e8f"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/recordTemple/recordTemple-create-component',
    {
        'pages/template/recordTemple/recordTemple-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("9ecd"))
        })
    },
    [['pages/template/recordTemple/recordTemple-create-component']]
]);                
