(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/startRepairReq/startRepairReq"],{"0ad1":function(t,e,a){"use strict";var i=a("a1a9"),n=a.n(i);n.a},7064:function(t,e,a){"use strict";a.r(e);var i=a("c522"),n=a("8f50");for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a("0ad1");var r=a("2877"),o=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"8f50":function(t,e,a){"use strict";a.r(e);var i=a("f7ce"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);e["default"]=n.a},a1a9:function(t,e,a){},c522:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},f7ce:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s(a("a34a")),n=(s(a("bbae")),a("2f62"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,i,n,s,r){try{var o=t[s](r),c=o.value}catch(u){return void a(u)}o.done?e(c):Promise.resolve(c).then(i,n)}function o(t){return function(){var e=this,a=arguments;return new Promise(function(i,n){var s=t.apply(e,a);function o(t){r(s,i,n,o,c,"next",t)}function c(t){r(s,i,n,o,c,"throw",t)}o(void 0)})}}var c=function(){return a.e("pages/template/mpvue-picker/mpvuePicker").then(a.bind(null,"64a0"))},u=a("3e8f"),l=[["camera"],["album"],["camera","album"]],f=[["compressed"],["original"],["compressed","original"]],h={data:function(){return{mode:"multiLinkageSelector",pickerAry:[],faultyPickerAry:[],gasPickerAry:[],faultyId:0,fau_name:"请选择",faulty_desc:"",gasId:0,gas_name:"请选择",gas_addr:"",deepL:0,imageList:[],contact:"",phone:"",repair_num:"2019072215415200000"}},components:{mpvuePicker:c},computed:(0,n.mapState)(["token"]),methods:{faultyPickerShow:function(){plus.key.hideSoftKeybord(),this.mode="selector",this.deepL=1,this.$refs.faultyPicker.show()},gasPickerShow:function(){plus.key.hideSoftKeybord(),this.mode="selector",this.deepL=1,this.$refs.gasPicker.show()},hideKey:function(){plus.key.hideSoftKeybord()},chooseImage:function(){var e=o(i.default.mark(function e(){var a=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(4!==this.imageList.length){e.next=3;break}return t.showModal({content:"图片数量已达上限"}),e.abrupt("return");case 3:t.chooseImage({sourceType:l[2],sizeType:f[2],count:4-this.imageList.length,success:function(t){a.imageList=a.imageList.concat(t.tempFilePaths)}});case 4:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),previewImage:function(e){var a=e.target.dataset.src;t.previewImage({current:a,urls:this.imageList})},deleteImg:function(t){var e=t.target.dataset.src;this.imageList.splice(this.imageList.findIndex(function(t){return t===e}),1)},faultyConfirm:function(t){this.faultyId=t.value[0],this.fau_name=t.label,console.log(this.faultyId," at pages/startRepairReq/startRepairReq.vue:171")},gasConfirm:function(t){console.log(t," at pages/startRepairReq/startRepairReq.vue:175"),this.gas_name=t.label,this.gasId=t.value[0];var e=t.index[0];this.gas_addr=this.gasPickerAry[e].address,console.log(this.gasId," at pages/startRepairReq/startRepairReq.vue:181")},bindDesc:function(t){this.faulty_desc=t.detail.value},bindContact:function(t){this.contact=t.detail.value},bindPhone:function(t){this.phone=t.detail.value},submit:function(){var e=this;console.log(this.faultyId+"  "+this.faulty_desc+"  "+this.gasId+"  "+this.contact+"  "+this.phone," at pages/startRepairReq/startRepairReq.vue:194"),t.showLoading({title:"正在提交"});this.faultyId,this.faulty_desc,this.gasId,this.contact,this.phone;this.$fly.post("api/sub-maint-order",{faulty_item:this.fau_name,faulty_desc:this.faulty_desc,gas_station_id:this.gasId,contact:this.contact,contact_phone:this.phone}).then(function(a){console.log(a," at pages/startRepairReq/startRepairReq.vue:215"),e.repair_num=a.repairNum,e.imageList.length>0?e.submitPic():(t.hideLoading(),t.navigateBack(),t.showToast({icon:"success",title:"提交成功"}))}).catch(function(e){console.log(e," at pages/startRepairReq/startRepairReq.vue:229"),t.hideLoading(),t.showToast({icon:"none",title:"提交失败，请重试"})})},submitPic:function(){for(var e={type:"img",repairNum:this.repair_num},a=[],i=0;i<this.imageList.length;i++){var n={};n.name="pic"+(i+1),n.uri=this.imageList[i],a.push(n)}t.uploadFile({url:"http://gsj.dev.rsc.ranknowcn.com/api/upload-images",files:a,formData:e,header:{Authorization:"bearer "+this.token},success:function(e){var a=JSON.parse(e.data),i=a.err;0!=i?(t.hideLoading(),t.showToast({title:"上传失败，请重试"})):(t.hideLoading(),t.navigateBack(),t.showToast({icon:"success",title:"提交成功"}))},fail:function(e){t.hideLoading(),t.showToast({title:"图片上传失败"})}})},submitPicFly:function(){console.log(u," at pages/startRepairReq/startRepairReq.vue:284");var t={type:"img",repairNum:this.repair_num,file:u.createReadStream()};this.$fly.upload("api/upload-images",t).then(function(t){console.log(t," at pages/startRepairReq/startRepairReq.vue:292")})}},onLoad:function(){var t=this;this.$fly.post("api/issue-desc",{}).then(function(e){t.faultyPickerAry=e}).catch(function(t){}),this.$fly.post("api/retrive-gas-station",{}).then(function(e){t.gasPickerAry=e}).catch(function(t){})}};e.default=h}).call(this,a("6e42")["default"])}},[["0c69","common/runtime","common/vendor"]]]);