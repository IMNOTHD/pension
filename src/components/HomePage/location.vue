<template>
    <!--定位-->
    <div class="container">
        <scroller class="scroller">
            <div class="btn" @click="showListCity">
                <text class="btn-txt" v-if="!currentCity" style="display:flex;justify-content: center;align-items: center">定位</text>
            </div>
            <div class="panel">
                <text v-if="currentCity" class="text" style="display:flex;justify-content: center;align-items: center">{{currentCity.cityName}}</text>
            </div>
        </scroller>
        <wxc-city ref="wxcCity"
                  :animationType="animationType"
                  :currentLocation="location"
                  :cityStyleType="cityStyleType"
                  :sourceData="sourceData"
                  @wxcCityItemSelected="citySelect"
                  @wxcCityOnInput="onInput"></wxc-city>
    </div>
</template>

<script>
import {WxcCity} from 'weex-ui'
import sourceData from './data'

export default {
  name: 'location',
  components: {WxcCity},
  data: () => ({
    // 定位自变量
    animationType: 'push',
    currentCity: '',
    sourceData,
    cityStyleType: 'list',
    location: '定位中'
  }),
  mounted () {
    // 模拟定位
    setTimeout(() => {
      this.location = '杭州'
    }, 500)
  },
  methods: {
    // 定位功能的方法
    showListCity () {
      this.cityStyleType = 'list'
      this.$refs['wxcCity'].show()
    },
    showGroupCity () {
      this.cityStyleType = 'group'
      this.$refs['wxcCity'].show()
    },
    citySelect (e) {
      this.currentCity = e.item
    },
    onInput (e) {
    }
  }
}
</script>

<style scoped>

</style>
