<template>
  <div id="Main">
    <h3>我的</h3>
    <div v-if="1" id="qing">
      请登录
    </div>
    <div id="user" v-else>
      <!-- 这里的url需要从数据库中找 -->
      <img src="" alt="">
      用户:<span></span>
      <br>
      <span>电话:</span>
    </div>

  </div>
</template>

<script>
import {ref,reactive,toRefs} from 'vue'
export default {
name:'My_Top'
}
</script>

<style scoped>
#Main{
    width: 100%;
    height: 100px;
    background-color: rgb(255,209,97);
}
h3{
    background-color: rgba(0, 0, 0, 0);
    padding-top: 10px;
    font-size: 20px;
    text-align: center;
}
#qing{
  margin-left: 12%;
  margin-top: 5px;
  font-size: 15px;
}
#user{
  font-size:20px;
  margin-left: 12%;
}
#user>img{
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius:50%;
  float:left;
  margin-right: 4%;
}
#user span{
  font-size: 16px;
}
</style>