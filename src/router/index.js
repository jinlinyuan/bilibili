import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Home.vue')
const register = ()=>import('@/views/register.vue')
const login = ()=>import('@/views/Login.vue')
const userinfo = ()=>import('@/views/userinfo.vue')
const edit = ()=>import('@/views/Edit.vue')
const article = ()=>import('@/views/Article.vue')
const editcategory = ()=>import('@/views/EditCategory.vue')
const upload = ()=>import('@/views/Upload.vue')
const video = ()=>import('@/views/Video.vue')
const homecopy = ()=>import('@/views/HomeCopy.vue')
const index = ()=>import('@/views/Index.vue')
Vue.use(VueRouter)
  const routes = [
     {
       path:'/',
       component:Home,
       meta:{
         keepalive:true
       }
     },
     {
       path:'/register',
       component:register
     },
     {
       path:'/login',
       component:login
     },
     {
       path:'/userinfo',
       component:userinfo,
       meta:{
         istoken:true
       }
     },
     {
       path:'/edit',
       component:edit,
       meta:{
        istoken:true
      }
     },
     {
       path:'/article/:id',
       component:article
     },
    {
      path:'/editcategory',
      component:editcategory
    },
    {
      path:'/upload',
      component:upload
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/homecopy',
      component: homecopy,
      meta: {
        keepalive: true
      }
    },
    {
      path: '/index',
      component: index
    }
  ]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next) => {
  if((!localStorage.getItem('token') || !localStorage.getItem('id'))&&to.meta.istoken == true){
    router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()
})

export default router
