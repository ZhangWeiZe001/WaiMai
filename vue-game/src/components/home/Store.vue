<template>
  <div id="Main" v-if="on">
    <!-- 这里需要使用店面的图像 -->
    <img id="dianIMG" src="" alt="">
    
    <!-- 店名与头部-->
    <h2 id="name">{{store.name }}</h2>
    <!-- 中部 -->
    <div id="zhong">
      <img  src="@/assets/img/homeImg/xing.png" alt="">
      <span id="xing">{{ store.xing}}</span>
      <span id="yueshou">月售:{{store.yueshou}}</span>
      <span id="renjun">人均:{{ store.renjun }}元</span>
    </div>
    <!-- 底部 -->
    <div id="di">
      <span id="qisong">起送:{{store.qisong}}元</span>
      <span id="diqv">地区:{{store.diqv}}</span>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import {reactive,toRefs,ref,toRaw} from 'vue';
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';

export default {
name:'Store',
props:['index'],
setup(props,context){
 axios({
  method:'post',
  url:'http://121.5.139.16:5055/homeGetData',
  data:{id:props.index}
 }).then(
  value =>{
    data.store = value.data,
    data.on = true
  }
 )
 let data = reactive({
  on:false,
  store:{},
 }) 

 return{
  ...toRefs(data)
 }
}
}
</script>

<style scoped>
#Main{
  margin:0 10%;
  margin-top: 10px;
  height: 100px;
  background-color: white;
  border-radius:15px
}

#dianIMG{
  width: 70px;
  height: 70px;
  position: relative;
  left: 5%;
  top: 15%;
}
#name{
  position: relative;
  left: 30%;
  top: -60px;
  width: 150px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
#zhong>img{
  position: relative;
  left: 30%;
  top: -60px;
  width: 15px;
}
#zhong>#xing{
  position: relative;
  left: 31%;
  top: -58px;
  color: orange;
}
#zhong>#yueshou{
  position: relative;
  left: 33%;
  top: -59px;
  color: rgb(174, 173, 173);
  font-size: 12px;
}
#zhong>#renjun{
  position: relative;
  left: 33%;
  top: -59px;
  color: rgb(174, 173, 173);
  font-size: 12px;
}

#di>#qisong{
  position: relative;
  left: 31%;
  top: -55px;
  color: rgb(174, 173, 173);
  font-size: 12px;
}

#di>#diqv{
  position: relative;
  left: 32%;
  top: -55px;
  color: rgb(174, 173, 173);
  font-size: 12px;
}
</style>