<template>
    <div class="home-popular">
        <img src="~assets/img/home/popular.jpg" alt="" >
    </div>
</template>
<script>
export default {
    name:"HomePopular"
}
</script>
<style scoped lang="less">
    .home-popular{
        width:100%;
        height:0;
        padding-bottom:73.37%;//与上一句代码一起，防抖屏
        img{
            width:100%
        }
    }
</style>