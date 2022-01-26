import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title: 'Accueil'
    }
  },
  {
    path: '/aboutMe',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title: 'A propos de moi'
    }
  },
  {
    path:'/production',
    name:'production',
    component: () => import(/* webpackChunkName: "about" */ '../views/Production.vue'),
    meta:{
      title: 'AP'
    }
  },
    {
      path:'/competences',
      name:'Competences',
      component: () => import(/* webpackChunkName: "about" */ '../views/Skill.vue'),
      meta:{
        title: 'Competence'
      }

  }
]

const router = new VueRouter({
  routes
})
router.afterEach((to,from) => {
  document.title = to.meta.title;
  console.log(from);
})

export default router
