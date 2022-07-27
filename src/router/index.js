import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexTransaction from '../views/transaction/Index.vue'
import CreateTransaction from '../views/transaction/Create.vue'
import EditTransaction from '../views/transaction/Edit.vue'


const routes = [

  {
    path: '/',
    name: 'transaction.index',
    // component: () => ('@views/transaction/Index.vue')
    component: IndexTransaction
  },
  {
    path: '/create',
    name: 'transaction.create',
    component: CreateTransaction
  },
  {
    path: '/edit/:id',
    name: 'transaction.edit',
    component: EditTransaction
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/AboutView.vue')
  // },

];
const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes
  // routes: [{
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   },
  //   // {
  //   //   path: '/transaction',
  //   //   name: 'transaction.index',
  //   //   component: () => import('..views/transaction/Index.vue')
  //   // },

  // ],
})


// const router = createRouter({
//   history: createWebHistory(),
//   router
// });


export default router