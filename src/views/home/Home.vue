<template>
    <div >
        <common-nav-bar>
            <template #middle>购物街</template>
        </common-nav-bar>
        <comment-tab-control :titles="Object.values(types)" @goods="handleclick" ref='tabControl1' v-show='isShowTabControl' ></comment-tab-control>
        <common-scroll @loadMore='loadMore' ref='scroll' @getPosition='getPosition'>
                <common-swiper :banner='banner' :padding-bottom='"52%"'></common-swiper>
                <home-recommend :recommend='recommend'></home-recommend>
                <home-popular></home-popular>
                <comment-tab-control :titles="Object.values(types)" @goods="handleclick" ref='tabControl2'></comment-tab-control>
                <comment-goods-list :goods="goods[currentType].list"></comment-goods-list>
        </common-scroll>
        <comment-back-top @backtop="backtop" v-show='isShowBackTop'></comment-back-top>
        
    </div>
</template>
<script>
import {scrollMixin} from 'utils/scroll.js'
import {backTopMixin} from 'utils/mixins.js'
import {reqHomeMultidata,reqHomeGoods} from 'api/home.js'
import HomeRecommend from './base/Recommend'
import HomePopular from './base/Popular.vue'
import CommentTabControl from 'components/comment/tabcontrol/TabControl.vue'
import CommentGoodsList from 'components/comment/goodslist/GoodList.vue'
export default ({
    name:"Home",
    data(){
        return{
            banner:[],     //轮播图数据
            recommend:[],  //推荐数据
            goods:{        //商品数据
                pop:{
                    list:[],
                    page:0
                },
                new:{
                    list:[],
                    page:0
                },
                sell:{
                    list:[],
                    page:0
                }
            }, 
            types:{
                pop:'流行',
                new:'新款',
                sell:'精选'
            },
            currentType:'pop',
            //决定第一个showtabcontrol组件是否显示
            isShowTabControl:false
        }
    },
    components:{
        HomeRecommend,
        HomePopular,
        CommentTabControl,
        CommentGoodsList
    },
    mixins:[backTopMixin,scrollMixin],
    created(){
      this.getHomeMultidata(),
      //this.getHomeGoods('pop')
      //this.getHomeGoods('new')
      //this.getHomeGoods('sell')
      Object.keys(this.types).forEach((type)=>{
          this.getHomeGoods(type)
      }) 
    },
    methods:{
        handleclick(index){
            //保持两个tabcontrol组件行为一致
            this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index
            this.currentType = Object.keys(this.types)[index]
        },
        loadMore(){
            //加载更多数据
            this.getHomeGoods(this.currentType)
            //告知子组件上拉动作已结束
            this.$refs.scroll.scroll.finishPullUp()
        },
        getPosition(position){
            if(-position.y > this.$refs.tabControl2.$el.offsetTop){
                this.isShowTabControl = true
                
            }else{
                this.isShowTabControl = false
            }
            if(-position.y >= 1000){
                this.isShowBackTop = true
            }else{
                this.isShowBackTop = false
            }
        },
        async getHomeMultidata(){
        const result = await reqHomeMultidata()
        this.banner = result.data.banner.list.map(item => item.image)
        this.recommend = result.data.recommend.list
        },
        async getHomeGoods(type){
        const page = ++this.goods[type].page
        const result = await reqHomeGoods(type,page)
        this.goods[type].list.push(...result.data.list)
        this.goods[type].page ++
        }
    }
})
</script>
<style scoped lang='less'>
    .nav-bar{
        background-color:lightblue;
        font-weight: bold;
        color:#fff
    }
    .wrapper{/*设置better-scroll的滑动区域*/
        position:fixed;
        top: 44px;
        bottom: 49px;
        left:0;
        right:0;
    }
</style>
