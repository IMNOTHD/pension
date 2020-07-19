<template>
    <div style="width: 750px;">
        <div style="display: flex; justify-content: space-between; flex-wrap: nowrap; flex-direction: row;">
            <div>
                <text>123</text>
            </div>
            <div style="flex-direction: row;">
                <text class="iconfont-me" style="font-size: 75px; margin-right: 20px; margin-top: 20px; width: 80px;">&#xe607;</text>
                <text class="iconfont-me" style="font-size: 75px; margin-right: 20px; margin-top: 20px; width: 80px;">&#xe600;</text>
            </div>
        </div>

        <wxc-cell title="我的健康"
                  :has-arrow="true"
                  :has-top-border="true"
                  style="margin-top: 20px">
            <div slot="value" style="margin-right: 10px">
                <text>查看更多数据</text>
            </div>
        </wxc-cell>

        <wxc-cell title="我的订单"
                      :has-arrow="true"
                      :has-top-border="true"
                      style="margin-top: 20px">
            <div slot="value" style="margin-right: 10px">
                <text>查看更多订单</text>
            </div>
        </wxc-cell>
        <div class="row">
            <div class="item"><text class="i-box-icon iconfont-me">&#xe601;</text><text class="i-box-tlt">待付款</text></div>
            <div class="item"><text class="i-box-icon iconfont-me">&#xe602;</text><text class="i-box-tlt">待发货</text></div>
            <div class="item"><text class="i-box-icon iconfont-me">&#xe603;</text><text class="i-box-tlt">待收货</text></div>
            <div class="item"><text class="i-box-icon iconfont-me">&#xe604;</text><text class="i-box-tlt">待评价</text></div>
            <div class="item"><text class="i-box-icon iconfont-me">&#xe605;</text><text class="i-box-tlt">退换/售后</text></div>
        </div>

        <wxc-cell title="我的钱包"
                  :has-arrow="false"
                  :has-top-border="true"
                  style="margin-top: 20px">
        </wxc-cell>
        <div class="row" style="justify-content: flex-start">
            <div class="item"><text class="i-box-icon iconfont-me">&#xe646;</text><text class="i-box-tlt">账户余额</text></div>
            <div class="item"><text class="i-box-icon iconfont-me">&#xe606;</text><text class="i-box-tlt">优惠券</text></div>
        </div>

        <wxc-cell title="我的亲友"
                  :has-arrow="false"
                  :has-top-border="true"
                  style="margin-top: 20px">
        </wxc-cell>
        <div class="row">
            <div class="item"><text class="i-box-icon iconfont-me">&#xe666;</text><text class="i-box-tlt">圈子</text></div>
        </div>
    </div>
</template>

<script>
import { WxcCell } from 'weex-ui'
export default {
  name: 'Me',
  components: { WxcCell },
  mounted () {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont-me',
      'src': "url('//at.alicdn.com/t/font_1952730_a7i4gs02sg.ttf')"
    })
  },
  methods: {
    wxcCellClicked (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
    .iconfont-me {
        font-family: iconfont-me;
    }
    .item{
        flex:1;
        justify-content: center;
        align-items: center;
        border: 1px none;
    }
    .row{
        flex-direction: row;
        height: 150px;
        background-color: white;
    }
    .i-box-icon{
        font-size: 50px;
        text-align: center;
        padding-top: 15px;
        height:79px;
        padding-bottom: 10px;
        color:#666;
        width: 80px;
    }
    .i-box-tlt{
        font-size: 26px;
        text-align: center;
        color:#666;
    }
</style>
