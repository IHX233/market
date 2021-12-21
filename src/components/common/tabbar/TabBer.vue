<template>
    <div class="tab-bar">
        <tab-bar-item path='/home' >
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/zhuye1.svg" alt="">
            </template>
            <template v-slot:action-item-icon>
                <img src="~assets/img/tabbar/zhuye2.svg" alt="">
            </template>
            <template v-slot:item-msg>
                <p>首页</p>
            </template>
        </tab-bar-item>
        <tab-bar-item path='/category'>
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/fenlei1.svg" alt="">
            </template>
            <template v-slot:action-item-icon>
                <img src="~assets/img/tabbar/fenlei2.svg" alt="">
            </template>
            <template v-slot:item-msg>
                <p>分类</p>
            </template>
        </tab-bar-item>
        <tab-bar-item path='/market'>
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/gouwuche1.svg" alt="">
            </template>
            <template v-slot:action-item-icon>
                <img src="~assets/img/tabbar/gouwuche2.svg" alt="">
            </template>
            <template v-slot:item-msg>
                <p>购物车</p>
            </template>
        </tab-bar-item>
        <tab-bar-item path='/profile'>
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/wode1.svg" alt="">
            </template>
            <template v-slot:action-item-icon>
                <img src="~assets/img/tabbar/wode2.svg" alt="">
            </template>
            <template v-slot:item-msg>
                <p>我的</p>
            </template>
        </tab-bar-item>
    </div>
</template>
<script>
export default {
    name:'CommonTabBar'
}
</script>
<style scoped lang="less">
    .tab-bar{
        display:flex;
        position: fixed;
        z-index: 1;
        left: 0;
        bottom:0;
        right:0;
        background-color: #f8f8f8;
        box-shadow: 0 -2px 1px rgba(100,100,100,0.3);
    }
</style>