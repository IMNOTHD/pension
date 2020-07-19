<template>
    <div class="item-container">
        <list ref="scroller">
            <cell>
                <div style="width: 750px; flex-wrap: wrap; flex-direction: row;">
                    <div @click="showListCity" style="width: 70px; align-items: center; justify-content: center; margin-left: 20px">
                        <text style="font-size: 30px" >{{currentCity}}</text>
                    </div>

                    <div style="width: 580px">
                        <search />
                    </div>
                    <div style="width: 79px; align-items: center; justify-content: center">
                        <!--消息-->
                        <img src="https://i.loli.net/2020/07/19/MfYz2JC8uFeVQ4L.png" style="width: 50px; height: 50px">
                    </div>
                </div>
            </cell>
            <cell>
                <!--        FirstFuntion-->
                <div class="first-function">
                    <img src="https://i.loli.net/2020/07/19/fFmA2GXv9r7dioP.png" style="width: 150px ;height:180px;margin-left: 60px" />
                    <img src="https://i.loli.net/2020/07/19/AGUzCfrm2WBiI9R.png" style="width: 150px ;height:180px;margin-left: 80px" />
                    <img src="https://i.loli.net/2020/07/19/Ft76PA5RDILWj3d.png" style="width: 150px ;height:180px;margin-left: 80px" />
                </div>
                <div class="separator"></div>
            </cell>
            <cell>
                <!--SecondFunction-->
                <div class="second-function" >
                    <div class="second-function-detail">
                        <img src="https://i.loli.net/2020/07/19/cCMdhF1SeraHxkW.png" style="width: 120px;height: 120px">
                        <text class="second-function-name">惠民政策</text>
                    </div>
                    <div class="second-function-detail">
                        <img src="https://i.loli.net/2020/07/19/nh5FugobmJyAVfR.png" style="width: 120px;height: 120px">
                        <text class="second-function-name">附近圈子</text>
                    </div>
                    <div class="second-function-detail">
                        <img src="https://i.loli.net/2020/07/19/iDF5fVEne7BL6d9.png" style="width: 120px;height: 120px">
                        <text class="second-function-name">调查问卷</text>
                    </div>
                    <div class="second-function-detail">
                        <img src="https://i.loli.net/2020/07/19/2mMvnocH8Ou4ZyW.png" style="width: 120px;height: 120px">
                        <text class="second-function-name">社区活动</text>
                    </div>
                </div>
            </cell>
            <cell>
                <div class="separator"></div>

                <!--绑定老人、匹配圈子功能-->
                <div class="item-container" :style="contentStyle">
                    <img src="https://i.loli.net/2020/07/19/lHEyea8buBcI1Ko.png" style="width: 500px;height: 500px;margin-top: 20px">
                </div>
            </cell>
            <cell>
                <div class="padding"></div>
            </cell>
        </list>
    </div>
</template>
<script>
import { WxcSearchbar, WxcCity } from 'weex-ui'
import Search from '@/components/HomePage/search'
import sourceData from './data'

export default {
  name: 'HomePage',
  components: {Search, WxcSearchbar, WxcCity},
  data: () => ({
    currentCity: '定位',
    sourceData,
    cityStyleType: 'list'
  }),
  mounted () {
    // 模拟定位
    setTimeout(() => {
      this.location = '杭州'
    }, 500)
  },
  created: function () {
    this.currentCity = this.$router.params.cityName
  },
  methods: {
    showListCity () {
      this.$router.push('/location')
    }
  }
}
</script>

<style scoped>
    .item-container{
        background-color: white;
        align-items: center;
    }
    .padding {
        width: 750px;
        height: 150px;
    }
    .first-function{
        width: 750px;
        display: flex; flex-wrap: wrap;
        flex-direction: row;
        margin-top: 30px;
    }
    .second-function{
        width: 750px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 80px;
    }
    .second-function-detail{
        margin-left: 50px;
    }
    .second-function-name{
        width: 130px;
        text-align: center;
        margin-top: 15px;
    }
    .separator{
        background-color: #F5F5F5;
        width: 750px;
        height: 20px;
        margin-top: 50px;
    }
</style>
