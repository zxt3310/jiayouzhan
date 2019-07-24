(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/recordTemple/recordTemple"],{"7bc0":function(t,e,n){},"81b7":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"rreecc",data:function(){return{statusColor:["fe4a47","4185de","4185de","201a62","1c713d","1c713d"],statusText:["待处理","已接单","到达加油站","进行中","已完成","已评价"]}},props:{idCode:{type:String},status:{type:Number},xm:{type:String},ms:{type:String},jyz:{type:String},ts:{type:String}},computed:{},methods:{getcolor:function(t){var e="#"+this.statusColor[t];return e},gotoRate:function(t){this.$emit("gotoRate",t)}}};e.default=r},"9ecd":function(t,e,n){"use strict";n.r(e);var r=n("f527"),u=n("f53d");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("e515");var a=n("2877"),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},e515:function(t,e,n){"use strict";var r=n("7bc0"),u=n.n(r);u.a},f527:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getcolor(t.status));t.$mp.data=Object.assign({},{$root:{m0:n}})},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},f53d:function(t,e,n){"use strict";n.r(e);var r=n("81b7"),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/recordTemple/recordTemple-create-component',
    {
        'pages/template/recordTemple/recordTemple-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("9ecd"))
        })
    },
    [['pages/template/recordTemple/recordTemple-create-component']]
]);                
