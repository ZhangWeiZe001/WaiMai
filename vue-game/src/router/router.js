import {createRouter,createWebHashHistory,createWebHistory} from 'vue-router'

const routes= [
  //home(入口路由)
  {
    name:'home',
    path:'/',
    component:()=>import('@/components/home/home.vue')
  },
  //My(个人信息路由)
  {
    name:'my',
    path:'/my',
    component:()=>import('@/components/My/My.vue')
  }
 
]

const router = new createRouter({
    mode:'hash',
    //createWebHashHistory 使用这个表示 hash方式
    history:createWebHashHistory(),

    //createWebHistory 表示 History 模式
    // history:createWebHistory(),
    routes,
})

export default router