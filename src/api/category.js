import request from "./request"
//左侧数据
export const reqCategory = () => request('/category')
//右上数据
export const reqSubcategory = maitKey => request('/subcategory',{ maitKey })
//右下数据
export const reqCategoryDetail = (miniWallkey,type) => request('/subcategory/detail',{miniWallkey,type})