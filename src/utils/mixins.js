import CommentBackTop from 'components/comment/backtop/BackTop.vue'
export const backTopMixin = {
    data(){
        return {
            isShowBackTop:false
        }
    },
    components:{
        CommentBackTop
    },
    methods:{
        backtop(){
            this.$refs.scroll.scrollTo(0,0,1000)
        }
    }
}