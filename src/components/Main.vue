<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="icon"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <!-- 第一个页面内容-->
        <div class="item-container" :style="contentStyle"><HomePage/></div>
        <!-- 第二个页面内容-->
        <div class="item-container" :style="contentStyle"><Discovery/></div>
        <!-- 第三个页面内容-->

        <div class="item-container" :style="contentStyle"><Me /></div>

    </wxc-tab-bar>
</template>

<style scoped>
    .item-container {
        width: 750px;
        background-color: #f2f3f4;
        align-items: center;
    }
    >>> .tab-title-list {
        position: fixed;
        bottom: 0;
        width: 750px;
    }
</style>
<script>
import { WxcTabBar, Utils, WxcButton } from 'weex-ui'
// https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js

import Config from './config'
import Main from '@/components/Main'
import Me from '@/components/Me/Me'
import HomePage from '@/components/HomePage/HomePage'
import Discovery from '@/components/Discovery/Discovery'
export default {
  name: 'App',
  components: { Discovery, HomePage, Main, WxcTabBar, WxcButton, Me },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles,
    contentStyle: ''
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    // const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight) + 'px' }
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
      this.$router.push('/location')
    }
  }
}
</script>
