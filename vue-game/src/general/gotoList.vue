<template>
  <div id="Main">
    <ul>
        <li>
            <router-link to="/">
                <img src="@/assets/img/gotoList/home.png" alt="">
                <br>
                首页
            </router-link>
        </li>
        <!-- 剩下的router-link 后替换 -->
        <li>
            <router-link to="/my">
                <img src="@/assets/img/gotoList/ding.png" alt="">
                <br>
                订单
            </router-link>
        </li>

        <li>
            <router-link to="/my">
                <img src="@/assets/img/gotoList/my.png" alt="">
                <br>
                我的
            </router-link>
        </li>
    </ul>
   
  </div>
</template>

<script>
export default {
name:'gotoList'
}
</script>

<style scoped>
#Main{
position:fixed;
bottom: 0px;
background-color: white;
width: 100%;
height: 65px;
border-top: 1px solid rgba(218, 218, 218, 0.937);
}

#Main img{
    width: 25px;
}
li{
    float: left;
    padding-left: 20%;
    padding-top: 3%;
    text-align: center;
}
</style>