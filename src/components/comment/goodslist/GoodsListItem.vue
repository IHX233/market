<template>
<div class="goods-list-item" @click='handleclick'> 
    <img v-lazy="showImage" alt="" @load="imgLoad($event)" ref="img">
    <div class="goods-info">
        <p>{{item.title}}</p>
        <span class="price">¥{{item.price}}</span>
        <span class="collect">{{item.cfav}}</span>
    </div>
</div>
    
</template>
<script>
export default {
    name:'GoodListItem',
    props:{
        item:{
            type:Object,
            default(){
                return []
            }
        }
    },
    methods:{
        imgLoad(e){
            this.$emit('onimg', e)
        },
        handleclick(){
            const iid = this.item.iid
            //允许在home组件中的goodlistitem跳转
            if(this.$route.path.includes('home')){
                this.$router.push(`/detail/${iid}`)
            }
            
        }
    },
    computed:{
        showImage(){
            return this.item.image||this.item.img||this.item.show.img
        }
    }
    
}
</script>
<style scoped lang='less'>
    /* .goods-list-item{
        position: relative;
        width:46%;
        padding-bottom: 40px; 
        img{
            width:100%;
            border-radius: 10px;
        }
        .goods-info{
            font-size:12px;
            position:absolute;
            bottom:5px;
            left:0;
            right:0;
            p{
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                margin-bottom:3px;
            }
            .price{
                color:pink;
                margin-right:30px;
            }
            .collect{
                position: relative;
            }
            .collect::before{
                content:'';
                z-index: 10;
                position:absolute;
                left:-15px;
                top:1px;
                width:14px;
                height:14px;
                background:url("~assets/img/home/guanzhu.svg") ;
                background-size: contain;
            }
        }
    } */
    .goods-list-item{
        width: 100%;
        height: 100%;
        background-color: #fffeff;
        margin-bottom: 10px;
        border-radius: 10px;
        position: relative;   
        img{
            width:100%;
            height: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .goods-info{
            height: 30px;
            font-size:12px;
            position:absolute;
            padding: 0 5px;
            bottom:10px;
            left:0;
            right:0;
            p{
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                margin-bottom:3px;
            }
            .price{
                color:pink;
                margin-right:30px;
            }
            .collect{
                position: relative;
            }
            .collect::before{
                content:'';
                z-index: 10;
                position:absolute;
                left:-15px;
                top:1px;
                width:14px;
                height:14px;
                background:url("~assets/img/home/guanzhu.svg") ;
                background-size: contain;
            }
        }
    }
</style>