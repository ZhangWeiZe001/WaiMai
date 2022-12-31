<template>
  <div id="Main">
    <h1>今日推荐</h1>
    <ul>
        <li>
           <img src="@/assets/img/homeImg/jitui.png" alt="">
           <br>
           炸鸡
        </li>
        <li>
           <img src="@/assets/img/homeImg/shaokao.png" alt="">
           <br>
           烧烤
        </li>
        <li>
           <img src="@/assets/img/homeImg/haixian.png" alt="">
           <br>
           海鲜
        </li>
        <li>
           <img src="@/assets/img/homeImg/chaocai.png" alt="">
           <br>
           正餐
        </li>
    </ul>
  </div>
</template>

<script>
export default {
name:'central'
}
</script>

<style scoped>
#Main{
  margin: 0 10%;
  margin-top: 15px;
  margin-bottom: 15px;
  width: 80%;
  height: 130px;
  border: solid 1px black;
  border-radius:25px
}

h1{
  text-align: center;
}

ul{
  width: 100%;
}

li{
  position: relative;
  text-align: center;
  float: left;
  padding-left: 10%;
  padding-top: 15px;
}
li img{
  width: 40px;
}
</style>