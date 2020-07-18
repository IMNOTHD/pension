<template>
    <div class="item-container">
        <!--搜索框、定位以及信息提示服务-->
        <div class="top-function" style="width: 720px;display: flex;flex-flow: row wrap;margin-top: 20px">
            <div class="top-function-location" style="width: 80px;">
                <!--定位-->
                <location></location>
            </div>
            <div class="top-function-search" style="width: 580px;">
                <!--搜索框-->
                <search style="width: 580px;"></search>
            </div>
            <div class="top-function-information" >
                <!---->
                <img src="https://i.loli.net/2020/07/19/MfYz2JC8uFeVQ4L.png" style="width: 50px; height: 50px">
            </div>
        </div>
<!--        FirstFuntion-->
        <div class="first-function" style="width: 720px;display: flex;flex-flow: row wrap;margin-top: 30px">
            <img src="https://i.loli.net/2020/07/19/fFmA2GXv9r7dioP.png" style="width: 150px ;height:180px;margin-left: 60px" />
            <img src="https://i.loli.net/2020/07/19/AGUzCfrm2WBiI9R.png" style="width: 150px ;height:180px;margin-left: 80px" />
            <img src="https://i.loli.net/2020/07/19/Ft76PA5RDILWj3d.png" style="width: 150px ;height:180px;margin-left: 80px" />
        </div>

        <div class="separator" style="background-color: darkgrey;width: 720px;height: 2px;margin-top: 50px"></div>

        <!--SecondFunction-->
        <div class="second-function" style="width: 720px;display: flex;flex-flow: row wrap;margin-top: 80px">
            <div class="second-function" style="margin-left: 50px">
                <img src="https://i.loli.net/2020/07/19/cCMdhF1SeraHxkW.png" style="width: 120px;height: 120px">
                <text>惠民政策</text>
            </div>
            <div class="second-function" style="margin-left: 40px">
                <img src="https://i.loli.net/2020/07/19/nh5FugobmJyAVfR.png" style="width: 120px;height: 120px">
                <text>附近圈子</text>
            </div>
            <div class="second-function" style="margin-left: 40px">
                <img src="https://i.loli.net/2020/07/19/iDF5fVEne7BL6d9.png" style="width: 120px;height: 120px">
                <text>调查问卷</text>
            </div>
            <div class="second-function" style="margin-left: 40px">
                <img src="https://i.loli.net/2020/07/19/2mMvnocH8Ou4ZyW.png" style="width: 120px;height: 120px">
                <text>社区活动</text>
            </div>
        </div>

        <div class="separator" style="background-color: black;width: 750px;height: 2px;margin-top: 50px"></div>

    </div>
</template>
<script>
import { WxcSearchbar, WxcCity } from 'weex-ui'
import Location from '@/components/HomePage/location'
import Search from '@/components/HomePage/search'

export default {
  name: 'HomePage',
  components: {Search, Location, WxcSearchbar, WxcCity},
  data: () => ({
  })
}
</script>

<style scoped>
</style>
