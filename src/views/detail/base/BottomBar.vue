<template>
    <div class="bottom-bar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <span class="text">客服</span>
            </div>
            <div>
                <i class="icon shop"></i>
                <span class="text">店铺</span>
            </div>
            <div>
                <i class="icon select"></i>
                <span class="text">收藏</span>
            </div>
        </div>
        <div class="bar-item bar-right" @click="addMarket">
                <div class="cart" >加入购物车</div>
                <div class="buy">购买</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailBottomBar',
    data(){
        return{
            start:0//记录初始事件
        }
    },
    methods:{
        //节流 一定时间内某个事件只能触发一次
        addMarket(){
            let now = new Date();//点击时间
            if(now-this.start>=1000){
                this.$emit('addMarket')
                this.start = now
            }
            
        }
    }
}
</script>
<style scoped>
    .bottom-bar{
        display: flex;
        position:absolute;
        z-index:10;
        height:58px;
        left:0;
        right:0;
        bottom:-58px;
        text-align:center;
        background-color: #fff;
        box-shadow: 0 -1px -1px rgba(100, 100, 100, .1);
    }
    .bar-item{
        flex:1;
        display: flex;
    }
    .bar-item>div{
        flex:1;
    }
    .bar-left text{
        font-size:13px;
    }
    .bar-left .icon{
        display: block;
        width:22px;
        height:22px;
        margin:10px auto 3px;
        
    }
    .bar-left .service{
        background:url(~assets/img/detail/kefu.svg) 0 0/100%
    }
    .bar-left .shop{
        background:url(~assets/img/detail/dianpu.svg) 0 0/100%
    }
    .bar-left .select{
        background:url(~assets/img/detail/guanzhu.svg) 0 0/100%
    }
    .bar-right{
        font-size:16px;
        color:#fff;
        line-height:58px;
    }
    .bar-right .cart{
        background-color: #ffe817;
        color:#333;
    }
    .bar-right .buy{
        background-color: #f69;
    }
</style>