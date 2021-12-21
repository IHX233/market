<template>
    <div class="category-left-nav">
        <ul class="menu-list">
            <li v-for='item,index in categorys' class="menu-list-item" :class="{active:current===index}" @click="btnClick(index)" :key="index">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'CategoryLeftNavBar',
    data(){
        return {
            current:0
        }
    },
    props:{
        categorys:{
            type:Array,
            default(){
                return {}
            }
        }
    },
    methods:{
        btnClick(index){
            this.current = index
            this.$emit('itemClick',index)
        }
    }
}
</script>
<style  scoped lang="less">
    .category-left-nav{
        background-color: #f6f6f6;
        height:100%;
        width:100%;
        box-sizing: border-box;
    }
    .menu-list-item{
        height:45px;
        line-height: 45px;
        text-align:center;
        font-size:14px;
    }
    .menu-list .active{
        font-weight: 700;
        color:red;
        background-color: #fff;
        border-left: 3px solid red;
    }
</style>