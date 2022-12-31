<template>
  <Top></Top>
  <Central></Central>
  <div>
    <!-- 这里的index很重要 使用它作为唯一表示去数据库中寻找对应的店铺信息 -->
    <Store index="4"></Store>
    <Store index="5"></Store>
    <Store index="5"></Store>
    <Store index="5"></Store>
    <Store index="5"></Store>
    <Store index="5"></Store>
    <Store index="5"></Store>
    <Store index="5"></Store>
  </div>
  <!-- 底部 这里最底部需要100px 来把gotolist铺垫出去 -->
  <div id="dibu"></div>
</template>

<script>
import Top from './top.vue'
import Central from './central.vue'
import Store from './Store.vue'

export default {
name:'Home',
components:{Top,Central,Store}
}
</script>

<style scoped>
#dibu{
  height: 100px;
}
</style>