<template>
	<view class="floor">
    <image class="floorImg" :src="floor.titlePicUrl"></image>
    <scroll-view scroll-x="true" enable-flex class="floorScroll">
      <view class="scrollItem" v-for="(item,index) in floor.itemList" :key="item.id">
        <image class="itemImg" :src="item.primaryPicUrl"></image>
        <text class="itemText">{{item.name}}</text>
      </view>
    
      <view class="scrollItem single">
        查看更多>>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
	name:'Floor',
  props:['floor']
};
</script>

<style lang="stylus" scoped>
.floor
  .floorImg
    width: 100%
    height: 350upx
  .floorScroll
    display: flex
    height: 300upx
    .scrollItem
      display: flex
      flex-direction: column
      margin-right: 20upx
      &.single
        width: 200upx
        height: 300upx
        text-align: center
        line-height: 300upx
        flex-shrink: 0
      .itemImg
        width: 200upx
        height: 200upx
      .itemText
        font-size: 28upx
        width: 200upx
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
</style>