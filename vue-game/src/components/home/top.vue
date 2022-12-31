<template>
  <div id="Main">
    <div id="content">
        <!-- 定位 -->
        <div id="ding">
            <h3>张氏外卖网</h3>
        </div>
        <!-- 搜索框 -->
        <div id="sou">
            <input id="soutext" type="text">
            <img id="fangda" src="@/assets/img/homeImg/fangda.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue'
export default {
name:'Home_Top'
}
</script>

<style scoped>
#Main{
    width: 100%;
    height: 100px;
    background-image: url("@/assets/img/homeImg/beijing.jpg");
    background-position: left bottom ;
}
#content{
    padding-top: 20px;
    margin:0 10%
}
#ding{
    background-color: rgba(0, 0, 0, 0);
    font-size: 16px;
}
#sou{
    width: 100%;
    margin-top: 15px;
}

#soutext{
    width: 92%;
    height:30px;
    margin-left: 5px;
    padding: 2px;
    padding-left: 15px;
    font-size: 18px;
    border: 1px solid black;
    border-radius:30px
}
#fangda{
    display: block;
    position:relative;
    width: 30px;
    left: 95%;
    top: -30px;
}
</style>