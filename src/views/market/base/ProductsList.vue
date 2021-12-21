<template>
    <div>
        <market-product-list-item v-for="product,index in products" :key="index" :itemInfo='product'></market-product-list-item>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import MarketProductListItem from './ProductsListItem.vue'
export default {
    name:'MarketProductList',
    components:{
        MarketProductListItem
    },
    computed:{
        ...mapState(['products'])
    }
}
</script>
<style scoped>

</style>