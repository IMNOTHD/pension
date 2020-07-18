<template>
    <div>
        <text>fuck</text>
        <wxc-button text="确定"
                    @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>

<script>
import { WxcButton } from 'weex-ui'
export default {
  name: 'Test',
  components: { WxcButton },
  methods: {
    wxcButtonClicked (e) {
      let modal = weex.requireModule('modal')
      modal.toast({
        message: 'This is a toast',
        duration: 0.3
      })
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
