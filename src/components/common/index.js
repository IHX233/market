import Vue from 'vue'
const requireContext = require.context('./',true,/\.vue$/)
requireContext.keys().forEach(filename=>{
    const componentConfig = requireContext(filename)
    //全局注册组件,全局组件不用引入即可调用
    Vue.component(
        componentConfig.default.name,
        componentConfig.default
    )
})