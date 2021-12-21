export const scrollMixin = {
    data(){
        return {
            saveY:0
        }
    },
    activated()
    {
      // activated时,dom还未加载完成
      if(this.$refs.scroll.scroll!=null)
      {
      //通过ref获取到滑动组件内部的属性和方法
       this.$refs.scroll.scrollTo(0,this.saveY,100);
       this.$refs.scroll.scroll.refresh();
      }
    },
    deactivated()
    {
      if(this.$refs.scroll.scroll!=null)
      {
        this.saveY=this.$refs.scroll.scroll.y;
      }
    }
  
}