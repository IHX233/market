<template>
    <div v-if="Object.keys(imageInfo).length !== 0" class="goods-info">
        <div class="info-desc clear-fix">
            <i class="=start"></i>
            <p class="desc">{{imageInfo.desc}}</p>
            <i class="end"></i>
        </div>
        <h4 class="info-key">{{imageInfo.detailImage[0].key}}</h4>
        <div class="info-list">
            <img v-for="item,index in image" :src="item" :key="index" alt="" @load='imgLoad'>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailImagInfo',
    props:{
        imageInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
            count:0
        }
    },
    computed:{
        image(){
            return this.imageInfo.detailImage[0].list
        }
    },
    methods:{
        imgLoad(){
            //当所有图片加载完，告知detail组件可以获取offsetTopList数据
            this.count ++
            if(this.count === this.image.length){
                this.$emit('getData')
            }
            //每张图片加载完就更新滑动
            this.$bus.$emit('img')
        }
        
    }
}
</script>
<style scoped>
    .goods-info{
        padding:20px 0;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-desc{
        padding:0 15px;
    }
    .info-desc .start,.info-desc .end{
        width:90px;
        height:1px;
        background-color: #a3a3a5;
        position: relative;
    }
    .info-desc .staet{
        float:left;
    }
    .info-desc .end{
        float:right;
    }
    .info-desc .start::before, .info-desc .end::after{
        content:'';
        position:absolute;
        width:5px;
        height:5px;
        background-color: #333;
    }
    .info-desc .end::after{
        right:0;
    }
    .info-desc .desc{
        padding:15px 0;
        font-size:14px;
    }
    .info-key{
        margin:10px 0 10px 15px;
        color:#333;
        font-size:15px;
    }
    .info-list img{
        width:100%
    }
</style>