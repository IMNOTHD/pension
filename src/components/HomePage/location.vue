<template>
    <!--定位-->
    <div class="container">

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
    location: '定位中',
    cityName: ''
  }),
  mounted () {
    // 模拟定位
    setTimeout(() => {
      this.location = '杭州'
    }, 500)
    this.cityStyleType = 'list'
    this.$refs['wxcCity'].show()
  },
  methods: {
    showGroupCity () {
      this.cityStyleType = 'group'
      this.$refs['wxcCity'].show()
    },
    citySelect (e) {
      this.currentCity = e.item
      this.$store.commit('setCityName', this.currentCity.cityName)
      this.$router.push('/')
    },
    onInput (e) {
    }
  }
}
</script>

<style scoped>

</style>
