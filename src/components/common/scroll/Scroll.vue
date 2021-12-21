<template>
    <div class="wrapper" ref='wrapper'>
        <div><!--滚动内容应该在一个节点中-->
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'CommonScroll',
    data(){
        return{
            scroll:null
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{                
         click:true,//滑动区域允许单击
         pullUpLoad:true//是否允许上拉更新更多数据
        })
        //拉到滑动区域底部时触发
        this.scroll.on('pullingUp',() => {
            //监听滑动区域拉到底部，默认只会监听一次，若需要监听多次，需触发finishPullUp()
            this.$emit('loadMore')
        })
        //滑动时触发
        this.scroll.on('scroll',(position)=>{
            this.$emit('getPosition',position)
        })
        //防抖：限制指定函数的执行频率，一个需要频繁触发的函数，在规定时间内，只让最后一次生效
        const debounce = function(fn,time){
            let timer = null
            return function(){
                clearTimeout(timer)
                timer = setTimeout(fn,time)
            }
        }
        const fresh = debounce(()=>this.scroll.refresh(),500)
        this.$bus.$on('img',fresh) 
        
        
    },
    
    methods:{
        //封装到达滑动区域顶部方法
        scrollTo(x,y,time=1000){
            this.scroll.scrollTo(x,y,time)
        }
    }
}
</script>
