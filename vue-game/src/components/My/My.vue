<template>
  <div>
    <top></top>
    <br><br>
    <ul>
      <li>
          我的地址
      </li>
      <div id="fenge"></div>

      <li>
          我的收藏
      </li>
      <div id="fenge"></div>

      <li>
          我的评价
      </li>
      <div id="fenge"></div>

      <li>
          我的红包
      </li>
      <div id="fenge"></div>

      <li>
          设置信息
      </li>
      <div id="fenge"></div>
    </ul>
  </div>
</template>

<script>
import top from './top.vue'
export default {
name:'My',
components:{top},
setup(){
 
}
}
</script>

<style scoped>
li{
  margin:0 10%;
  margin-top: 10px;
  color: rgb(93,93,93);
  cursor:pointer;
}
#fenge{
  margin-top: 10px;
  height: 1px;
  background-color: rgb(190, 190, 190);
}
</style>