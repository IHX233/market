<template>
    <div>
        <transition :name='name'><!--在组件中加入mode=“out-in”，使进入与离开动作分开执行-->
            <slot></slot>
        </transition>
    </div>
</template>
<script>
export default ({
    name:'CommonSliderTransition',
    props:{
        name:{
            type:String
        }
    }
})
</script>

<style lang='less' scoped>
  .right-leave-active{
    transform:translateX(0px);
    transition: 1s;
  }
  .right-leave-to{
    transform: translateX(-100%);
  }
  .right-enter-active{
    transform:translateX(100%);
    transition:1s;
  }
  .right-enter-to{
    transform: translateX(0px);
  }
  .left-leave-active{
    transform:translateX(0px);
    transition: 1s;
  }
  .left-leave-to{
    transform: translateX(100%);
  }
  .left-enter-active{
    transform:translateX(-100%);
    transition:1s;
  }
  .left-enter-to{
    transform: translateX(0px);
  } 
  /* 
  透明度切换
  .v-leave-active{
    opacity: 1;;
    transition:1s;
  }
  .v-leave-to{
    opacity: 0;
  }
 */
</style>