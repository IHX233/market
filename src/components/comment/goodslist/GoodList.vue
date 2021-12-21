<template>
    <div class="goods">
        <div v-for="item,index in goods" :key='index'> 
            <!-- <img ref="imgs" :url="item.show.img" alt="img" @load="imgLoad"> -->
            <good-list-item  :item='item' @onimg="imgLoad"></good-list-item>
            <!-- <div class="goods-info">
                <p>{{item.title}}</p>
                <span class="price">¥{{item.price}}</span>
                <span class="collect">{{item.cfav}}</span>
            </div> -->
        </div>
    </div>
    
</template>
<script>
import GoodListItem from './GoodsListItem.vue'
export default {
    name:'CommentGoodsList',
    props:{
        goods:{
            type:Array,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgLoad(e){
            this.$bus.$emit('img')
            const img = e.path[0]
            let src = img.getAttribute("src");
            let image = new Image();
            image.src = src;
            let width = img.width;
            let w = image.width;
            let h = image.height;
            let height = Math.round((h * width) / w);
            let n = (height + 50)/10
            img.parentNode.parentNode.style.gridRowEnd = `span ${~~(n)}`;
            img.style.height = height + 'px'
        }
    },
    components:{
        GoodListItem
    }
}
</script>
<style scoped lang = 'less'>
    
    .goods {
        background-color: #f0EFF1;
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 10px;
        grid-auto-rows: 10px; 
        
    }
    
     /* .goods-list-item{
         background-color: #fffeff;
         grid-row-start: auto;
         margin-bottom: 10px;
         border-radius: 10px;
         position: relative;   
         box-shadow:1px 1px 1px 1px rgb(187, 184, 184);    
        img{
            width:100%; 
            height:100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }

        .goods-info{
            height: 30px;
            font-size:12px;
            position:absolute;
            padding: 0 5px;
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
    
</style>