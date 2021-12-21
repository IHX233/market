import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
//让components/common/index执行
import 'components/common/index'
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false
//全局注册 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'
//图片懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
  loading:require('assets/img/common/loading.png')
})
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
/* 
  components
    comment 放置适用当前项目的组件
    common  放置适用性很高的组件，可以适用于其他项目

  NavBar如果是全局组件，可以少做两件事
    1.在其父组件中导入
    2.在其父组件注册

  为什么要做图片懒加载：
    1.屏幕并不能一次显示所有图片，所以没必要一次加载所有图片
    2.一次性加载所有图片对首屏的压力比较大

*/
