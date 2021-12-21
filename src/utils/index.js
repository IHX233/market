/*防止当前项目需要用到的工具方法 */
export const formate = time=>{
    let date = new Date(new Date() - time);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
}