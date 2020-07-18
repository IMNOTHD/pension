<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <div class="item-container" :style="contentStyle"><wxc-button text="确定"
                                                                      @wxcButtonClicked="wxcButtonClicked"></wxc-button></div>
        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle"><text>发现</text></div>
        <!-- 第三个页面内容-->
        <div class="item-container" :style="contentStyle"><text>我的</text></div>
    </wxc-tab-bar>
</template>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
        justify-content: center;
    }
</style>
<script>
import { WxcTabBar, Utils, WxcButton } from 'weex-ui'
// https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js
import Config from './config'
import Main from '@/components/Main'
export default {
  name: 'App',
  components: { Main, WxcTabBar, WxcButton },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    },
    wxcButtonClicked (e) {
      let modal = weex.requireModule('modal')
      modal.toast({
        message: 'This is a toast',
        duration: 0.3
      })
      this.$router.push('/test')
    }
  }
}
</script>
