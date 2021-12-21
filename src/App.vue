<template>
  <div id="app">
    <common-slider-transition :name="name">
        <!--用keep-alive包裹，使页面切换时保留上个页面的浏览的位置-->
    <keep-alive exclude="Detail">
      <router-view class="show"></router-view>
    </keep-alive>
        
      
    </common-slider-transition>
    <common-tab-bar v-show="!$route.path.includes('detail')"></common-tab-bar>
  </div>
</template>
<script >
  
  export default {
    name:'App',
    data(){
      return{
        name:''//设置为空防止抖屏
      }
    },
    watch:{
      $route(to,from){
        if(from.path==='/'){
          return//防止初始化时就触发动画效果
        }
        if(to.meta.index>from.meta.index){
          this.name='right'
        }else{
          this.name='left'
        }
      }
    }
}
</script>
<style lang="less" scoped>
  .show{
    position:absolute ;
    width:100%;
  }
</style>
