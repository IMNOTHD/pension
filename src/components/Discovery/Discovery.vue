\
<template>
    <div class="container">
        <div class="container-detail">
            <text class="container-title">救助</text>
        </div>

        <div class="separator"></div>

        <div class="container-detail" style="height: 1000px">
            <img class="container-help-image" src="https://i.loli.net/2020/07/19/aGIZ5vw3y8R1OmH.png">
        </div>

    </div>
</template>

<script>
export default {
  name: 'Discovery'
}
</script>

<style scoped>
    .container{
        background-color: white;
        height: 1200px;
        width: 750px;
    }
    .container-detail{
        align-items: center;
        justify-content: center;
    }

    .separator{
        background-color: #F5F5F5;
        width: 750px;
        height: 10px;
        margin-top: 50px;
    }
    .container-help-image{
        width: 500px;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
