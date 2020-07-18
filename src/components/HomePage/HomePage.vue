<template>
    <div class="item-container">
        <!--搜索框、定位以及信息提示服务-->
        <div class="top-function">
            <div class="top-function-location">
                <!--定位-->
                <location></location>
            </div>
            <div class="top-function-search">
                <!--搜索框-->
                <search></search>
            </div>
        </div>
        <!--FirstFuntion-->
        <div class="first-function" style="width: 720px;display: flex;flex-direction: column;overflow: hidden">
            <img src="https://i.loli.net/2020/07/19/fFmA2GXv9r7dioP.png" style="width: 150px ;height:180px;float: left" />
            <img src="https://i.loli.net/2020/07/19/AGUzCfrm2WBiI9R.png" style="width: 150px ;height:180px;float: left" />
            <img src="https://i.loli.net/2020/07/19/Ft76PA5RDILWj3d.png" style="width: 150px ;height:180px;float: left" />
        </div>
        <!--SecondFunction-->
        <div class="second-function" style="width: 720px">
            <img src="https://i.loli.net/2020/07/19/cCMdhF1SeraHxkW.png" style="width: 120px;height: 150px"><text>惠民政策</text>
            <img src="https://i.loli.net/2020/07/19/nh5FugobmJyAVfR.png" style="width: 120px;height: 150px"><text>附近圈子</text>
            <img src="https://i.loli.net/2020/07/19/iDF5fVEne7BL6d9.png" style="width: 120px;height: 150px"><text>问卷调查</text>
            <img src="https://i.loli.net/2020/07/19/2mMvnocH8Ou4ZyW.png" style="width: 120px;height: 150px"><text>社区活动</text>
        </div>
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
