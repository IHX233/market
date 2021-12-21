<template>
    <div class="back-top" @click='backTop' :style={bottom}>
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>
<script>
export default {
    name:'CommentBackTop',
    props:{
        bottom:{
            type:String,
            default:'60px'
        }
    },
    methods:{
        backTop(){
            this.$emit('backtop')
        }
    }
}
</script>
<style scoped lang='less'>
    .back-top{
        position:fixed;
        width:50px;
        height:50px;
        right:10px;
        //bottom: 50px;
        img{
            width:50px;
        }
    }
</style>