<template>
<div class="swiper" :style="{paddingBottom:paddingBottom}">
    <swiper :options="swiperOptions" v-if="banner.length!==0">
        <swiper-slide v-for="(item,index) in banner" :key="index">
            <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div><!--    分页器-->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> 左按钮
        <div class="swiper-button-next" slot="button-next"></div>      右按钮
        <div class="swiper-scrollbar" slot="scrollbar"></div>          滚动条-->      
    </swiper>
</div>
    
</template>

<script>
    export default {
        name: 'CommonSwiper',
        props:{
            banner:{
                type:Array,
                default(){
                    return []
                }
            },
            paddingBottom:{
                type:String,
                default(){
                    return '52%'
                }
            }
        },
        data() {
            return {
                swiperOptions: {
                    autoplay: true, // 自动轮播  
                    speed: 1000,   // 轮播速度
                    pagination: {
                        el: '.swiper-pagination'//确定哪个是分页器
                    }
                }
            }
        }
    }
</script> 
<style scoped>
.swiper{
    /*先用div占个位置，防止数据未加载完成时引起的抖屏*/
    position: relative;/*使其成为分页器的定位父级 */
    overflow: hidden;
    width:100%;
    height:0;
}
.swiper img{
    width:100%;
}
.swiper >>> .swiper-pagination-bullet-active{
    /*
      >>>  样式穿透，当前项目需要修改第三方库时使用，只能原生css生效，把>>>改成/deep/就能支持css编译器
      .swiper-pagination-bullet-active为活动分页器按钮类名
    */
    background: lightskyblue;
} 
.swiper >>> .swiper-container{
    position:static;
    /*使其不能成为分页器的定位父级 */
}
</style>
