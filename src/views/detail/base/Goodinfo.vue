<template>
    <div>
        <div class="base-info" v-if="Object.keys(goodInfo).length">
            <h3 class="info-title">{{goodInfo.title}}</h3>
            <div class="info-price">
                <span class="n-price">{{goodInfo.newPrice}}</span>
                <span class="o-price">{{goodInfo.oldPrice}}</span>
                <span class="discount">{{goodInfo.discount}}</span>
            </div>
            <div class="info-other">
                <span>{{goodInfo.columns[0]}}</span>
                <span>{{goodInfo.columns[1]}}</span>
                <span>{{goodInfo.services[goodInfo.services.length-1].name}}</span>
            </div>
            <div class="infoservice">
                <span class="info-service-item" v-for="index in goodInfo.services.length-1" :key="index">
                    <img :src="goodInfo.services[index-1].icon" alt="">
                    <span>{{goodInfo.services[index-1].name}}</span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        goodInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .base-info{
        margin-top:15px;
        padding:0 8px;
        color:#999;
        border-bottom:5px solid #f2f5f8
    }
    .info-title{
        color: #222;
    }
    .info-price{
        margin-top:10px;
    }
    .info-price .n-price{
        color:pink;
        font-size: 20px;
        margin-right:8px;

    } 
    .info-price .o-price{
        font-size:10px;
        margin-right:2px;
        text-decoration:line-through;
    }
    .info-price .discount{
        display: inline-block;
        width:35px;
        height:20px;
        background-color: red;
        font-size: 12px;
        text-align: center;
        line-height: 20px;
        color:#fff;
        border-radius: 8px;
        position:relative;
        top:-5px;
    }
    .info-other{
        margin-top:20px;
        margin-bottom: 20px;
        font-size: 12px;
        display:flex;
        justify-content:space-between;
    }
    .infoservice{
        font-size: 13px;
        display:flex;
        justify-content:space-between;
        margin-bottom: 3px;
    }
    .info-service-item img{
        width:14px;
        height:14px;
        position: relative;
        top:3px;
    }
    
</style>