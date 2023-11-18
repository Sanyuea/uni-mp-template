<template>
  <view class="viewport">
    <CustomNavbar></CustomNavbar>
    <scroll-view scroll-y class="scroll-view"></scroll-view>
    <wSwiper :list="bannerList"></wSwiper>
    <CategoryPanel :list="categoryList"></CategoryPanel>
    <HotPannel :list="hotList"></HotPannel>
    <Guess></Guess>
  </view>
</template>

<script setup lang="ts">
//@ts-nocheck
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPannel from './components/HotPannel.vue'
import { getHomeBannerAPI } from '@/api/home.api'
//获取轮播图
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

//获取分类数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

//获取热门推荐数据
const hotList = ref([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

onLoad(async () => {
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
})
</script>

<style lang="scss" scoped></style>
