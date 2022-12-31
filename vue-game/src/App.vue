<template>
  <div>
    <router-view></router-view>
  </div>
  <!-- 这里需要放置一个跳转至不同路由的列表 -->
  <gotoList></gotoList>
</template>

<script>

//老三样
import {nextTick,ref,provide} from 'vue';
import { useRouter } from 'vue-router';

import gotoList from './general/gotoList.vue';


export default {
  components: { gotoList },
  name: "app",
}

</script>

<style>
/* 这里设置全局的样式 */
html{
  background-color: rgb(245,245,245);
}
</style>
