<template>
	<view class="content">
		<view class="inputsytle">
			<text>故障项目</text>
			<text @tap="pickershow()">请选择</text>
		</view>
		<view class="line" />
		
		<view class="inputsytle">
			<text>故障描述</text>
			<textarea style="margin-top: 2px;" value="" placeholder="请输入" />
		</view>
		<view class="line" />
		
		<view class="inputsytle">
			<text>加油站</text>
			<text @tap="pickershow()">请选择</text>
		</view>
		<view class="line" />
		
		<view class="inputsytle">
			<text>详细地址</text>
			<textarea style="margin-top: 2px;" value="" placeholder="请输入" />
		</view>
		<view class="line" />
		
		<view class="inputsytle">
			<text style="align-self: center;">联系人</text>
			<input type="text" placeholder="请输入" value="" />
		</view>
		<view class="line" />
		
		<view class="inputsytle">
			<text style="align-self: center;">联系电话</text>
			<input type="text" placeholder="请输入" value="" />
		</view>
		<view class="line" />
		
		<view class="inputsytle">
			<text>上传图片\n最多四张\n长按删除</text>
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
		<view class="line" />
		
		<view class="commit">
			<button type="primary" @tap="submit">提交</button>
		</view>
		
		<mpvuePicker :mode='mode' ref='mpvuePicker' :pickerValueArray='pickerAry' :pickerValueDefault='pickerDefault' :deepLenth='deep'></mpvuePicker>
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
				mode:'',
				pickerAry:[],
				pickerDefault:[],
				deep:0,
				imageList:[]
			}
		},
		components:{
			mpvuePicker
		},
		methods: {
			pickershow(){
				this.mode = 'multiLinkageSelector';
				this.pickerAry = [
					{
						label:'第一',
						value:1,
						children:
						[
							{
								label:'1-1',
								value:1
							},
							{
								label:'1-2',
								value:2
							}
						]
					},
					{
						label:'第二',
						value:2,
						children:
						[
							{
								label:'2-1',
								value:1
							},
							{
								label:'2-2',
								value:2
							},
							{
								label:'2-3',
								value:3
							}
						]
					},
					{
						label:'第三',
						value:3,
						children:
						[
							{
								label:'3-1',
								value:1
							},
							{
								label:'3-2',
								value:2
							}
						]
					}];
				this.pickerDefault = [0];
				this.deep = 2;
				this.$refs.mpvuePicker.show();
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
				
			submit(){
				// console.log(this.$fly)
				// this.$fly.get("")
				// .then(function(response){
				// 	console.log(response)
				// }).catch(function(error){
				// 	console.log(error.url);
				// })
				test.print(3);
				test.wuli('哈哈哈')
			}
		}
	}
</script>

<style>
	.inputsytle{
		display: flex;
		flex-direction: row;
		padding: 10px;
	}
	.inputsytle text{
		font-size: 14px;
		color: #333333;
		width: 25%;
	}
	.inputsytle input,textarea{
		font-size: 14px;
		color: #333333;
		width: 75%;
	}

	.line{
		height: 1px;
		background-color: #dddddd;
	}
	.uni-uploader-body {
		width: 100%;
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
	}
</style>
