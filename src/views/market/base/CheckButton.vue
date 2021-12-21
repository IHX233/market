<template>
    <div class="icon" :class="{'selector-active':checked}">
        <img src="~assets/img/market/xuanzhong.svg" alt="">
    </div>
</template>
<script>
export default {
    name:'MarketCheckButton',
    props:{
        checked:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style scoped>
    .icon{
        position:relative;
        margin:0;
        width:18px;
        height:18px;
        border-radius: 50%;
        border:2px solid #ccc;
        cursor: pointer;
    }
    .icon img{
        width:16px;
        height:16px;
        border-radius: 50%;
    }
    .selector-active{
        background-color: #59c3e5;
        border-color:#59c3e5
    }
</style>