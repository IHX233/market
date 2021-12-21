import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Market = () => import('views/market/Market.vue')
const Profile = () => import('views/profile/Profile.vue')
const Detail = () => import('views/detail/Detail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home,
    //index值用来控制页面切换时，页面的移动方向
    meta:{index:1}
  }, 
  {
    path:'/category',
    component:Category,
    meta:{index:2}
  }, 
  {
    path:'/market',
    component:Market,
    meta:{index:3,requireAuth:false}
    //requireAuth决定是否验证
    //验证规则是购物车中有数据才能访问
  }, 
  {
    path:'/profile',
    component:Profile,
    meta:{index:4}
  },
  {
    path:'/detail/:iid',
    component:Detail,
    meta:{index:5}
  }
]
const route = new VueRouter({
  routes,
  mode:'history'
})
route.beforeEach((to,from,next)=>{
  if(to.meta.requireAuth){//如果需要验证，就进行验证
    if(localStorage.getItem('products')){//如果获取到了数据，就跳转到market
      next()
    }else{//没有通过验证，就直接转到home
      next('/home')
    }
  }else{//如果不需要验证，就直接通过
    next()
  }
})
export default route
/* export default new VueRouter({
  routes,
  mode:'history'
})
 */