<template>
	<view class="thiscontent" @tap="hideKey">
		<view style="background-color: white; border-radius: 20px;">
			<view class="inputsytle">
				<text>故障项目</text>
				<view class="inputContext" @tap="faultyPickerShow">
					<text style="flex: 1; text-align: left;">{{fau_name}}</text>
					<image src="/static/img/extra.png" mode=""></image>
				</view>
			</view>

			<view class="inputsytle">
				<text style="align-self: flex-start;margin-top: 8px;">故障描述</text>
				<view class="inputContext">
					<textarea style="margin-top: 2px;" :value="faulty_desc" placeholder="请输入" @input="bindDesc" @click.stop=""></textarea>
				</view>
			</view>
			
			<view class="inputsytle">
				<text>加油站</text>
				<view class="inputContext" @tap="gasPickerShow">
					<text style="flex: 1; text-align: left;">{{gas_name}}</text>
					<image src="/static/img/extra.png" mode=""></image>
				</view>
			</view>
			
			<view class="inputsytle">
				<text style="align-self: flex-start;margin-top: 8px;">详细地址</text>
				<view class="inputContext">
					<textarea style="margin-top: 2px;" :value="gas_addr" @click.stop=""></textarea>
				</view>
			</view>
			
			<view class="inputsytle">
				<text style="align-self: center;">联系人</text>
				<view class="inputContext">
					<input type="text" placeholder="请输入" :value="contact" @input="bindContact" @click.stop=""/>
				</view>
			</view>
			
			<view class="inputsytle">
				<text style="align-self: center;">联系电话</text>
				<view class="inputContext">
					<input type="text" placeholder="请输入" :value="phone" @input="bindPhone" @tap.stop=""/>
				</view>
			</view>
			
			<view class="inputsytle">
				<text style="align-self: flex-start;margin-top: 8px;">上传图片\n最多四张\n长按删除</text>
				<view class="uni-uploader-body">
					<view class="uni-uploader__files">
						<block v-for="(image,index) in imageList" :key="index">
							<view class="uni-uploader__file">
								<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage" @longpress="deleteImg"></image>
							</view>
						</block>
						<view class="uni-uploader__input-box">
							<view class="uni-uploader__input" @tap="chooseImage"></view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="commit">
				<button @tap="submit">提交</button>
			</view>
			
			<mpvue-picker :mode="mode" ref="faultyPicker" :pickerValueArray="faultyPickerAry" :deepLength="deepL" v-on:onConfirm="faultyConfirm"></mpvue-picker>
			<mpvue-picker :mode="mode" ref="gasPicker" :pickerValueArray="gasPickerAry" :deepLength="deepL" v-on:onConfirm="gasConfirm"></mpvue-picker>
		</view>
	</view>
</template>

<script>
	import mpvuePicker from '../template/mpvue-picker/mpvuePicker.vue';
	import test from '../../commonJs/fly.js'
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				mode:'multiLinkageSelector',
				pickerAry:[],         //展示列表
				faultyPickerAry:[],   //故障列表
				gasPickerAry:[],	  //加油站列表
				faultyId:0,			  //故障ID
				fau_name:'请选择',	  //故障项目
				faulty_desc:'',		  //描述		
				gasId:0,			  //加油站ID
				gas_name:'请选择',	  //加油站名字
				gas_addr:'',		  //加油站地址
				deepL:0,
				imageList:[],
				contact:'',
				phone:''
			}
		},
		components:{
			mpvuePicker
		},
		methods: {
			faultyPickerShow(){
				// #ifdef APP-PLUS
					plus.key.hideSoftKeybord();
				// #endif
				this.mode = 'selector';
				this.deepL = 1;
				this.$refs.faultyPicker.show();
			},
			gasPickerShow(){
				// #ifdef APP-PLUS
					plus.key.hideSoftKeybord();
				// #endif
				
				this.mode = 'selector';
				this.deepL = 1;
				this.$refs.gasPicker.show();
			},
			hideKey(){
				// #ifdef APP-PLUS
					plus.key.hideSoftKeybord();
				// #endif
			},
			chooseImage: async function() {
				if (this.imageList.length === 4) {
					uni.showModal({
						content:'图片数量已达上限'
					})
					return;
				}
				uni.chooseImage({
					sourceType: sourceType[2],
					sizeType: sizeType[2],
					count: 4 - this.imageList.length,
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
					}
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			deleteImg: function(e){
				var current = e.target.dataset.src
				this.imageList.splice(this.imageList.findIndex(item => item === current), 1)
			},
			
			faultyConfirm: function (faulty){
				this.faultyId = (faulty.value)[0];
				this.fau_name = faulty.label;
				console.log(this.faultyId);
			},
			
			gasConfirm: function (gas){
				console.log(gas);
				this.gas_name = gas.label;
				this.gasId = (gas.value)[0];
				
				var index = (gas.index)[0];
				this.gas_addr = (this.gasPickerAry[index]).address;
				console.log(this.gasId);
			},
			bindDesc: function (e){
				this.faulty_desc = e.detail.value;
			},
			bindContact: function (e){
				this.contact = e.detail.value;
			},
			bindPhone: function (e){
				this.phone = e.detail.value;
			},
			//提交表单
			submit(){
				console.log(this.faultyId + '  ' + this.faulty_desc + '  ' + this.gasId + '  ' + this.contact + '  ' + this.phone);
				
				var post = {
					faulty_item:this.faultyId,
					faulth_desc:this.faulty_desc,
					gas_station_id:this.gasId,
					contact:this.contact,
					contact_phone:this.phone
				}
				
				this.$fly.post('api/sub-maint-order',{
					faulty_item:this.fau_name,
					faulty_desc:this.faulty_desc,
					gas_station_id:this.gasId,
					contact:this.contact,
					contact_phone:this.phone
				}).then((res)=>{
					console.log(res);
					uni.navigateBack();
					uni.showToast({
						icon:'success',
						title:'提交成功'
					})
				}).catch((error)=>{
					console.log(error);
					uni.showToast({
						icon:'none',
						title:'提交失败，请重试'
					})
				})
			}
		},
		onLoad() {
			this.$fly.post('api/issue-desc',{
				
			}).then((res)=>{
				this.faultyPickerAry = res;
			}).catch((error)=>{
				
			});
			
			
			this.$fly.post('api/retrive-gas-station',{
				
			}).then((res)=>{
				this.gasPickerAry = res;
			}).catch((error)=>{
				
			});
		},
	}
</script>

<style lang="scss">
	.thiscontent{
		background-color: #f2f7f8;
		display: flex;
		flex: 1;
		flex-direction: column;
		box-sizing: border-box;
	}
	.inputsytle{
		display: flex;
		flex-direction: row;
		padding: 10px;
		.inputContext{
			display: flex;
			flex: 1;
			flex-direction: row;
			justify-content: space-between;
			padding: 8px;
			border-width: 1px;
			border-color: #e6e6e6;
			background-color: #f8f8f8;
			image{
				width: 22px;
				height: 22px;
			}
			textarea{
				height: 100px;
			}
		}
	}
	.inputsytle text{
		font-size: 14px;
		color: #333333;
		width: 20%;
		text-align: center;
		align-self: center;
	}
	.inputsytle input,textarea{
		font-size: 14px;
		color: #333333;
		width: 80%;
	}

	.line{
		height: 1px;
		background-color: #dddddd;
	}
	.uni-uploader-body {
		width: 80%;
	}
	.uni-uploader__files {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.uni-uploader__file {
		margin: 10upx;
		width: 210upx;
		height: 210upx;
	}
	.uni-uploader__img {
		display: block;
		width: 210upx;
		height: 210upx;
	}
	.uni-uploader__input-box {
		position: relative;
		margin:10upx;
		width: 208upx;
		height: 208upx;
		border: 2upx solid #D9D9D9;
	}
	.uni-uploader__input-box:before,
	.uni-uploader__input-box:after {
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #D9D9D9;
	}
	.uni-uploader__input-box:before {
		width: 4upx;
		height: 79upx;
	}
	.uni-uploader__input-box:after {
		width: 79upx;
		height: 4upx;
	}
	.uni-uploader__input-box:active {
		border-color: #999999;
	}
	.uni-uploader__input-box:active:before,
	.uni-uploader__input-box:active:after {
		background-color: #999999;
	}
	.uni-uploader__input {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	.commit{
		display: flex;
		height: 300upx;
		justify-content: center;
		align-items: center;
	}
	.commit button{
		width: 400upx;
		height: 88upx;
		background-color: #1c713d;
		color: white;
	}
</style>
