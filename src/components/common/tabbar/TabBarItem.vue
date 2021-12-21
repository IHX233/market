<template>
    <div class="tab-bar-item" @click='handleclick'>
        <div v-show="isShow">
            <slot name="item-icon"></slot>
        </div>
        <div v-show="!isShow">
            <slot name="action-item-icon"></slot>
        </div>
        
        <div  :style="{color:color}"><!--如果不用div框起来，当插槽被替换时，其上面定义的属性也会消失-->
            <slot name="item-msg"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:{
            type:String,
            require:true
        }
        
    },
    methods:{
        handleclick(){
            if(this.$router.history.current.fullPath!==this.path)
               this.$router.replace(this.path);
        }
    },
    computed:{
        isShow(){
            return this.$route.path!==this.path
        },
        color(){
            if(this.$route.path!==this.path){
                return '#aaa'
            }else{
                return 'skyblue'
            }
        }
    }
}
</script>
<style scoped lang="less">
    .tab-bar-item{
        flex:1;
        text-align:center;
        height:49px;
        img {
            width:24px;
            height:24px;
            margin-top:3px;
            vertical-align:middle
        }
    }
</style>