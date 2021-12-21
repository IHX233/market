<template>
    <div class="market">
        <common-nav-bar>
            <template #middle>购物车({{$store.getters.productLength}})</template>
        </common-nav-bar>
        <common-scroll ref='scroll' @getPosition='getPosition'>
            <market-products-list></market-products-list>
        </common-scroll>
        <market-button-bar @handleClick="toShow"></market-button-bar>
        <comment-back-top @backtop="backtop" v-show='isShowBackTop' :bottom="'100px'"></comment-back-top>
        <comment-toast ref="toast"></comment-toast>
    </div>
</template>
<script>
import {scrollMixin} from 'utils/scroll.js'
import commentToast from 'components/comment/toast/Toast.vue'
import {backTopMixin} from 'utils/mixins.js'
import MarketProductsList from './base/ProductsList.vue'
import MarketButtonBar from './base/ButtonBar.vue'
export default ({
    name:"Market",
    components:{
        MarketProductsList,
        MarketButtonBar,
        commentToast
    },
    mixins:[backTopMixin,scrollMixin],
        
    
    methods:{
        getPosition(position){
            if(-position.y >= 1000){
                this.isShowBackTop = true
            }else{
                this.isShowBackTop = false
            }
        },
        toShow(total){
            this.$refs.toast.show(`总金额为：${total.toFixed(2)}`)
        }
    }
})
</script>
<style scoped>
    .market{
        width:100%;
        height:calc(100% - 49px)
    }
    .nav-bar{
        background-color:lightblue;
        font-weight: bold;
        color:#fff;
    }
    .wrapper{/*设置better-scroll的滑动区域*/
        position:fixed;
        top: 44px;
        bottom: 93px;
        left:0;
        right:0;  
    }
</style>