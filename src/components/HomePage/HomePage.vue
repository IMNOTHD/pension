<template>
    <div class="item-container">
        <!--搜索框、定位以及信息提示服务-->
        <div class="top-function">
            <div class="top-function-location" style="background-color: #00B4FF; width: 10%">
                <!--定位-->
                <location></location>
            </div>
            <div class="top-function-search" style="width: 80%">
                <!--搜索框-->
                <search></search>
            </div>
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
.item-container{
    margin-top: 0px;
}
.top-function{
    width: 100%;
}
.top-function-location{
    float: left;
}
.top-function-search{
    width: 80%;
    float: left;
}
</style>
