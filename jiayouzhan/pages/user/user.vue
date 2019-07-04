<template>
    <view class="content" style="padding: 0px;">
        <!-- <view class="btn-row">
            <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
            <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
        </view> -->
		<view class="headBar">
			<view class="headerimg">
				<image style="width: 100%; height: 100%;" src="" mode=""></image>
			</view>
			<view class="headerInfo">
				<view>用户昵称</view>
				<view>性别</view>
			</view>
		</view>
		
		<view class="menuList">
			<view class="menu">
				<image src="../../static/img/iconGas.png" mode=""></image>
				<text>加油站</text>
			</view>
			<view style="width:100%;height: 1px; background-color: #edecf2"></view>
			<view class="menu">
				<image src="../../static/img/iconSet.png" mode=""></image>
				<text>设置</text>
			</view>
			<view style="width:100%;height: 1px; background-color: #edecf2"></view>
			
			<view class="menu" @tap="bindLogout">
				<image src="" mode=""></image>
				<text>登出</text>
			</view>
			<view style="width:100%;height: 1px; background-color: #edecf2"></view>
		</view>
    </view>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex'

    export default {
        computed: {
            ...mapState(['hasLogin', 'forcedLogin'])
        },
        methods: {
            ...mapMutations(['logout']),
            bindLogin() {
                uni.navigateTo({
                    url: '../login/login',
                });
            },
            bindLogout() {
                this.logout();
                /**
                 * 如果需要强制登录跳转回登录页面
                 */
                if (this.forcedLogin) {
                    uni.reLaunch({
                        url: '../login/login',
                    });
                }
            }
        }
    }
</script>

<style lang="scss">
	.headBar{
		display: flex;
		flex-direction: row;
		padding: 30upx;
		padding-top: 60upx;
		padding-bottom: 60upx;
		.headerimg{
			width: 140upx;
			height: 140upx;
			background-color: black;
			border-radius: 70upx;
		}
		.headerInfo{
			display: flex;
			flex-direction: column;
			margin-left: 40upx;
			justify-content: space-between;
			
			:first-child{
				font-size: 16px;
			}
			:last-child{
				font-size: 14px;
			}
			
		}
	}
	
	.menuList{
		.menu{
			background-color: white;
			padding: 20upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 14px;
			image {
				height: 44upx;
				width: 44upx;
				margin-left: 30upx;
			}
			text{
				margin-left: 20upx;
			}
		}
	}
	
</style>
