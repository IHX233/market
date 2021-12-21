<template>
    <div class="detail">
        <detail-nav-bar @run="run" ref="NavBar"></detail-nav-bar>
        <common-scroll ref="scroll" @getPosition='getPosition'>
            <common-swiper :banner='banner' :padding-bottom='"80%"'></common-swiper>
            <detail-goods-info :goodInfo='goodInfo'></detail-goods-info>
            <detail-shop-info :shop='shopInfo'></detail-shop-info>
            <detail-imag-info :imageInfo='imageInfo' @getData='getData'></detail-imag-info>
            <detail-params-info ref='param' :paramsInfo='paramsInfo'></detail-params-info>
            <detail-comment-info ref='comment' :commentInfo='commentInfo'></detail-comment-info>
            <comment-goods-list ref='recommend' :goods='recommendsInfo'></comment-goods-list>
        </common-scroll>
        <comment-back-top @backtop="backtop" v-show='isShowBackTop'></comment-back-top>
        <detail-bottom-bar @addMarket='addMarket'></detail-bottom-bar>
        <comment-toast ref="toast"></comment-toast>
    </div>
</template>
<script>
//import DetailScroll from './base/DetailScroll.vue'
import commentToast from 'components/comment/toast/Toast.vue'
import DetailBottomBar from './base/BottomBar.vue'
import {backTopMixin} from 'utils/mixins.js'
import CommentGoodsList from 'components/comment/goodslist/GoodList.vue'
import DetailCommentInfo from './base/CommentInfo.vue'
import DetailParamsInfo from './base/ParamsInfo.vue'
import DetailImagInfo from './base/ImageInfo.vue'
import DetailShopInfo from './base/ShopInfo.vue'
import DetailNavBar from './base/NavBar.vue'
import DetailGoodsInfo from './base/Goodinfo.vue'
import {reqDetails,GoodInfo,ShopInfo,GoodsParam,CommentInfo,reqRecommends} from 'api/detail.js'
export default {
    name:'Detail',
    data(){
        return{
            banner:[],
            goodInfo:{},
            shopInfo:{},
            imageInfo:{},
            paramsInfo:{},
            commentInfo:{},
            recommendsInfo:[],
            offsetTopList:[],
            iid:'',
            isShow:false,
            message:''
        }
    },
    components:{
        DetailNavBar,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailImagInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        CommentGoodsList,
        DetailBottomBar,
        commentToast
        //DetailScroll
    },
    mixins:[backTopMixin],
    created(){
        this.getDetail()
        this.getRecommends()
    },
    methods:{
        async getDetail(){
            this.iid = this.$route.params.iid
            const {result} = await reqDetails(this.iid)
            //轮播图信息
            this.banner = result.itemInfo.topImages
            //商品信息
            this.goodInfo = new GoodInfo(result.itemInfo,result.columns,result.shopInfo.services)
            //商家信息
            this.shopInfo = new ShopInfo(result.shopInfo)
            //图片信息
            this.imageInfo = result.detailInfo
            //商品参数信息
            this.paramsInfo = new GoodsParam(result.itemParams.info,result.itemParams.rule)
            //评论信息
            if(result.rate.cRate){
                this.commentInfo = new CommentInfo(result.rate.list[0])
            }


        },
        //获取推荐数据
        async getRecommends(){
            const result = await reqRecommends()
            this.recommendsInfo = result.data.list
        },
        run(index){
            this.$refs.scroll.scrollTo(0,-this.offsetTopList[index],0.5)
        },
        getData(){
            this.offsetTopList=[]
            this.offsetTopList.push(0,this.$refs.param.$el.offsetTop,this.$refs.comment.$el.offsetTop,this.$refs.recommend.$el.offsetTop)
        },
        getPosition(position){
            if(-position.y >= 1000){
                this.isShowBackTop = true
            }else{
                this.isShowBackTop = false
            }
            if(0 >= position.y && position.y> -this.$refs.param.$el.offsetTop){
                this.$refs.NavBar.currentIndex = 0
            }else if(-this.$refs.param.$el.offsetTop >= position.y && position.y> -this.$refs.comment.$el.offsetTop){
                this.$refs.NavBar.currentIndex = 1
            }else if(-this.$refs.comment.$el.offsetTop >= position.y && position.y> -this.$refs.recommend.$el.offsetTop){
                this.$refs.NavBar.currentIndex = 2
            }else if(-this.$refs.recommend.$el.offsetTop >= position.y && position.y > -1000000){
                this.$refs.NavBar.currentIndex = 3
            }
        },
        addMarket(){
            const product = {}
            product.image = this.banner[0];
            product.title = this.goodInfo.title;
            product.desc = this.goodInfo.desc;
            product.price = this.goodInfo.realPrice;
            product.iid = this.iid;
            this.$store.commit('addMarket',product)
            this.$refs.toast.show(`购物车中的数量为：${this.$store.getters.count(this.iid)}`)
        }
    }
}
</script>
<style scoped>
.detail{
    width:100%;
    height:calc(100% - 58px)
}
    .nav-bar{
        background-color: #fff;
    }
    .wrapper{/*设置better-scroll的滑动区域*/
        position:fixed;
        top: 44px;
        bottom: 58px;
        left:0;
        right:0;
        
        
    }
</style>