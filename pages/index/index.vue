<template>
	<view class="indexContainer">
    <view class="header">
      <image class="logo" src="../../static/images/logo.png" mode=""></image>
      <view class="search">
        <text class="iconfont icon-sousuo"></text>
        <!-- placeholder-style="color:red"可以给input组件设置placeholder样式 -->
        <input class="ipt" type="text" placeholder="搜索商品" placeholder-class="place">
      </view>
      <button class="btn">北方汉子</button>
    </view>
    
    <scroll-view class="navScroll" scroll-x="true" enable-flex >
      <view class="scrollItem active">推荐</view>
      <view class="scrollItem" v-for="(nav,index) in navList" :key="nav.L1Id">
        {{nav.text}}
      </view>
    </scroll-view>
    
    <scroll-view scroll-y="true" enable-flex class="mainScroll">
      <view class="main">
        <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
          <swiper-item>
            <view class="swiper-item">
              <image class="swiperImg" src="https://yanxuan.nosdn.127.net/static-union/166908625437b102.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image class="swiperImg" src="https://yanxuan.nosdn.127.net/static-union/166925730637b102.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
            </view>
          </swiper-item>
          <swiper-item>
            <view class="swiper-item">
              <image class="swiperImg" src="https://yanxuan.nosdn.127.net/static-union/166925964737b102.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
            </view>
          </swiper-item>
        </swiper>
        
        <view class="iconList">
          <view class="iconItem" v-for="(icon,index) in iconList" :key="icon.icon">
            <image class="iconImg" :src="icon.icon" mode=""></image>
            <text class="iconText">{{icon.desc}}</text>
          </view>
        </view>
        
        <view class="categoryList">
          <view class="categoryItem" v-for="(category,index) in navList" :key="category.L1Id">
            <image class="itemImg" :src="category.picUrl"></image>
            <text class="itemText">{{category.text}}</text>
          </view>
        </view>
        
        <Floor v-for="(floor,index) in floorList" :key="index" :floor="floor"></Floor>
        
      </view>
    </scroll-view>
  </view>
</template>

<script>
	import Floor from './components/Floor/index.vue'
	import {mapGetters} from 'vuex'
	export default {
		name:'Home',
		components:{
			Floor
		},
		mounted() {
			this.getIndexData()
			
			console.log(this.getIndexData)
		},
		methods:{
      getIndexData(){
				
        this.$store.dispatch('home/getIndexData')
      }
    },
		computed: {
			...mapGetters('home',['navList','iconList','floorList'])
		}
	};
</script>

<style lang="stylus">
.indexContainer
  height: 100%
  .header
    height: 80upx
    display: flex
    align-items: center
    .logo
      width: 120upx
      height: 40upx
      margin: 0 20upx
    .search
      display: flex
      align-items: center
      flex: 1
      height: 60upx
      border: 2upx solid #aaa
      box-sizing: border-box
      .iconfont
        margin: 0 10upx
      .ipt
        font-size: 28upx
        // color: red input的placeholder是没办法直接设置样式的
      .place
        color: red
    .btn
      width: 140upx
      height: 60upx
      font-size: 28upx
      text-align: center
      line-height: 60upx
      padding: 0 10upx
      margin: 0 10upx
	.navScroll
		height: 80upx
		display: flex
		.scrollItem
			width: 140upx
			height: 80upx
			font-size: 28upx
			text-align: center
			line-height: 80upx
			flex-shrink: 0
			box-sizing: border-box
			&.active
				border-bottom: 2upx solid red
	.mainScroll
		height: calc(100vh - 160upx)
		.main
			.swiperImg
				width: 100%
				height: 300upx
			.iconList
				height: 32upx
				display: flex
				justify-content: space-around
				.iconItem
					display: flex
					justify-content: space-around
					.iconImg
            width: 32upx
            height: 32upx
          .iconText
            font-size: 26upx
			.categoryList
        display: flex
        flex-wrap: wrap
        justify-content: space-around
        .categoryItem
          width: 20%
          display: flex
          flex-direction: column
          align-items: center
          .itemImg
            width: 110upx
            height: 110upx
            margin: 20upx 0
          .itemText
            font-size: 28upx
</style>
