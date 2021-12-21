import request from './request'
//请求轮播图数据
export const reqHomeMultidata = () =>request('/home/multidata')
//请求goodslist数据
export const reqHomeGoods = (type,page)=>request('/home/data',{type,page})