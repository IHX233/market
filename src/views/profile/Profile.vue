<template>
    <div id="profile">
        <common-nav-bar class="profile-nav">
            <template #middle>超级商场</template>
        </common-nav-bar>
        <user-info></user-info>
        <ul class="account">
            <li class="account-item">
                <div class="number">
                    <span class="balance">0.00</span>元
                </div>
                <div class="account-info">我的余额</div>
            </li>
            <li class="account-item">
                <div class="number">
                    <span class="balance">0</span>个
                </div>
                <div class="account-info">我的优惠</div>
            </li>
            <li class="account-item">
                <div class="number">
                    <span class="balance">0</span>分
                </div>
                <div class="account-info">我的积分</div>
            </li>
            
        </ul>
        <list-view :listData='orderList'></list-view>
        <list-view :listData='serviceList'></list-view>
        <list-view :listData='moreList'></list-view>
    </div>
</template>
<script>
import ListView from './base/ListView.vue'
import CommonNavBar from 'components/common/navbar/NavBar.vue'
import UserInfo from './base/UserInfo.vue'
export default ({
    name:"Profile",
    data(){
        return{
            orderList:['我的消息','积分商城','会员卡'],
            serviceList:['我的购物车','下载购物APP'],
            moreList:['设置','更多']
        }
    },
    components:{
        CommonNavBar,
        UserInfo,
        ListView
    }
})
</script>
<style scoped lang='less'>
    @import '~assets/css/varible.less';
    #profile{
        height:100vh;
        position:relative;
        background-color: #f2f2f2;
    }
    .profile-nav{
        background-color: pink;
        color:#fff;
    }
    .account{
        display: flex;
    }
    .account-item{
        flex:1;
        background-color: #fff;
        margin-right:1px;
        text-align:center;
    }
    .account-item:last-of-type{
        margin-right:0;
    }
    .account-item{
        color:#666;
        font-size:13px;
        padding:18px;
    }
    .account-item .balance{
        font-size:24px;
        font-weight:700;
        color:#ff5f3e
    }
    .account-info{
        margin-top:6px;
    }
    .order-list, .service-list{
        margin-top:12px
    }
    .order-list, .more-list{
        margin-top:12px
    }
</style>