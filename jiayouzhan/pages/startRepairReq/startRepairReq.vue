<template>
	<view>
		<button type="primary" @tap="pickershow">联动</button>
		<mpvuePicker :mode='mode' ref='mpvuePicker' :pickerValueArray='pickerAry' :pickerValueDefault='pickerDefault' :deepLenth='deep'></mpvuePicker>
	</view>
</template>

<script>
	import mpvuePicker from '../template/mpvue-picker/mpvuePicker.vue';
	export default {
		data() {
			return {
				mode:'',
				pickerAry:[],
				pickerDefault:[],
				deep:0
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
			}
		}
	}
</script>

<style>

</style>
