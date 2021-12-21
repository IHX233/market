<template>
    <div>
        <common-nav-bar>
            <template #middle>分类</template>
        </common-nav-bar>
        <common-scroll class="left" >
            <category-left-nav-bar :categorys='categorys' @itemClick='itemClick'></category-left-nav-bar> 
        </common-scroll>
        <common-scroll class="right" ref="scroll">
            <category-grid-view :subcategorys='subcategorys' ></category-grid-view>
            <comment-tab-control :titles='Object.values(types)' @goods='tabClick' ></comment-tab-control>
            <comment-goods-list :goods='goods[currentType].list'></comment-goods-list>
        </common-scroll>
       
    </div>
</template>
<script>
import {scrollMixin} from 'utils/scroll.js'
import CommentTabControl from 'components/comment/tabcontrol/TabControl.vue'
import CommentGoodsList from 'components/comment/goodslist/GoodList.vue'
import {reqCategory,reqSubcategory,reqCategoryDetail} from 'api/category.js'
import CategoryLeftNavBar from './base/left.vue'
import CategoryGridView from './base/gridView.vue'
export default ({
    name:"Category",
    data(){
        return{
            categorys:[], //左侧滑动区数据
            currentIndex:0,
            subcategorys:[], //右侧滑动区数据
            goods:{        //商品数据
                pop:{
                    list:[]
                },
                new:{
                    list:[]
                },
                sell:{
                    list:[]
                }
            },
            types:{pop:'流行',new:'新款',sell:'销量'},
            currentType:'pop'
        }
    },
    created(){
        this.getCategory()
    },
    methods:{
        itemClick(index){
            if(this.currentIndex===index)return
            this.currentIndex = index
            this.getSubcategory()
            Object.keys(this.types).forEach(type=>this.getSubCategoryDetail(type))
            
        },
        async getCategory(){//获取左边数据
            const result = await reqCategory()
            this.categorys = result.data.category.list
            this.getSubcategory()
            Object.keys(this.types).forEach(type=>this.getSubCategoryDetail(type))
        },
        async getSubcategory(){//获取右上数据
            const {maitKey} = this.categorys[this.currentIndex]
            const result = await reqSubcategory(maitKey)
            this.subcategorys = result.data.list
            
        },
        async getSubCategoryDetail(type){//获取右下数据
            const {miniWallkey} = this.categorys[this.currentIndex]
            const result = await reqCategoryDetail(miniWallkey,type)
            this.goods[type].list = result
        },
        tabClick(index){
            this.currentType = Object.keys(this.types)[index]
            
        }
    },
    mixins:[scrollMixin],
    components:{
        CategoryLeftNavBar,
        CategoryGridView,
        CommentTabControl,
        CommentGoodsList
    }
})
</script>
<style scoped>
    .nav-bar{
        background-color:pink;
        font-weight: bold;
        color:#fff
    }
    .left{/*设置better-scroll的滑动区域*/
        position:fixed;
        width:20%;
        top: 44px;
        bottom: 49px;
        left:0;
        right:0;  
    }
    .right{
        position:fixed;
        margin-left:20%;
        width:80%;
        top: 44px;
        bottom: 49px;
        left:0;
        right:0; 
    }
</style>