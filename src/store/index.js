import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
const store = new vuex.Store({
    state: {
        products:JSON.parse(localStorage.getItem('products')) || []
    },
    mutations: {
        addMarket(state,payload){
            const product = state.products.find(item=>item.iid===payload.iid)
            if(product){
                product.count++
            }else{
                state.products.push({
                    ...payload,
                    count:1,
                    checked:true //使购物车的商品默认选中
                })
            }
        },
        updataCheck(state,payload){
            const product = state.products.find(item=>item.iid===payload)
            product.checked = !product.checked
        },
        checkAll(state,payload){//根据全选按钮同步其他单选按钮
            state.products.forEach(item => {
                item.checked = !payload
            });
        }
    },
    actions: {
    },
    getters: {
        count(state){//获取指定商品数量
            return function(iid){
                const product = state.products.find(item=>item.iid===iid)
                return product.count
            }
            
        },
        productLength(state){//商品种类数
            return state.products.length
        },
        selectProductLength(state){
            return state.products.filter(item=>item.checked===true).length
        },
        isCheckAll(state){//全选按钮是否选中
            return state.products.every(item=>item.checked)
        },
        total(state){
            return state.products.reduce((pre,next)=>{
                return pre + (next.checked?next.count*next.price:0)
            },0)

        }
    }
  })

  //监听mutations 里面方法的执行 因为一旦有方法执行了 state数据一定就改变了
  store.subscribe(function(mutations,state){
      localStorage.setItem('products',JSON.stringify(state.products))
  }) 
  export default store