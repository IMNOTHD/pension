<template>
    <div class="container">
        <wxc-searchbar ref="wxc-searchbar"
                       @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                       @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                       @wxcSearchbarCloseClicked="wxcSearchbarCloseClicked"
                       @wxcSearchbarInputOnFocus="wxcSearchbarInputOnFocus"
                       @wxcSearchbarInputOnBlur="wxcSearchbarInputOnBlur"></wxc-searchbar>
    </div>
</template>

<script>
import {WxcSearchbar} from 'weex-ui'
export default {
  name: 'search',
  components: {WxcSearchbar},
  data: () => ({
    // 搜索框中的value值
    value: ''
  }),
  methods: {
    // 搜索框的方法
    wxcSearchbarInputOnFocus () {
    },
    wxcSearchbarInputOnBlur () {
    },
    wxcSearchbarInputReturned () {
    },
    wxcSearchbarCloseClicked () {
    },
    wxcSearchbarInputOnInput (e) {
      this.value = e.value
    }
  }
}
</script>

<style scoped>

</style>
