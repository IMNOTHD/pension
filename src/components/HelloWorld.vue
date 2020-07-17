<template>
    <div></div>
</template>

<script>
import {WxcTabBar, Utils} from 'weex-ui'
// https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js
import Config from '../../configs/config'

export default {
  components: {WxcTabBar},
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const {tabStyles} = this
    this.contentStyle = {height: (tabPageHeight - tabStyles.height) + 'px'}
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }
</style>
