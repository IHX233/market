<template>
    <common-nav-bar>
            <template #left>
                <img src="~assets/img/common/back.svg" alt="" @click="goBack">
            </template>
            <template #middle>
                <ul class="nav-bar-title">
                    <li 
                        v-for="item,index in title"
                        :key="index" 
                        @click="handleclick(index)"
                        :class="{active:currentIndex===index}">{{item}}</li>
                </ul>
            </template>
    </common-nav-bar>
</template>
<script>
export default {
    name:'DetailNavBar',
    data(){
        return{
            title:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        goBack(){
            this.$router.replace('/home')
        },
        handleclick(index){
            this.currentIndex = index
            this.$emit('run',index)
        }
    }
    
}
</script>
<style scoped lang="less">
    @import '~assets/css/varible.less';
    
    .nav-bar-title{
        display:flex;
        li{
            flex:1
        }
    }
    .active{
        color:@heightTextColor;
        font-weight: bold;
        font-size: 16px;
    }
    img{
        margin-top:12px;
        //width:25px
    }
    
</style>