<template>
    <div v-if="Object.keys(subcategorys).length!==0">
        <div class="grid-view" ref="gridView">
            <div class="content-item" v-for="item,index in subcategorys" :key="index" :style="{width:styleObj}">
                <img :src="item.image" alt="" @load="imgLoad">
                <p>{{item.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'CategoryGridView',
    props:{
        subcategorys:{
            type:Array,
            default(){
                return []
            }
        },
        clos:{//每一行展示的商品数
            type:Number,
            default:3
        }
        
    },
    computed:{
        styleObj(){
            return `${100/this.clos}%`
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('img')
        }
    }
}
</script>
<style scoped>
.grid-view{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
}
.content-item{
    text-align:center;
    font-size:12px;
}
.content-item img{
    width:80%;
}
.content-item p{
    margin-top:15px;
    line-height:20px;
    font-size:14px;
}

</style>