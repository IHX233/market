<template>
    <ul class="tab-control">
        <li v-for="item,index in titles" :key="index" @click='handleclick(index)' :class="{active:index===currentIndex}"><!--当两值相等时，类名为active-->
            <span>{{item}}</span>
        </li>
    </ul>
</template>
<script>
export default {
    name:'CommentTabControl',
    data(){
        return{
            type:['pop','new','sell'],
            currentIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
        
    },
    methods:{
        handleclick(index){
            this.currentIndex = index
            this.$emit('goods',index)
        }
    }

}
</script>
<style scoped lang='less'>
 @import '~assets/css/varible.less';
 .tab-control{
     z-index:1;
        position:relative;
     display:flex;
     text-align:center;
     line-height:40px;
     background-color: #fff;
     li{
         flex:1
     }
     .active{
         span{
             padding:5px;
             color:@heightTextColor;
             border-bottom:3px solid @heightTextColor;
         }
     }
 }
</style>