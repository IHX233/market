<template>
    <div id="list">
        <div v-for="item,index in listData" :key="index" class="item">
            <div class="info">{{item}}</div>
        </div>
    </div>
</template>
<script>
export default {
    nane:'ListView',
    props:{
        listData:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    #list{
        background-color: #fff;
        font-size: 15px;
        color:#333;
    }
    #list .item{
        height:44px;
        line-height:44px;
        position:relative;
        margin-top:10px;
    }
    .item .info{
        border-bottom: 1px solid rgba(100,100,100,.1);
        padding-left:5px;
        text-indent:20px;
    }
</style>