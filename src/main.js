import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from '@/components/HelloWorld'
import UsersList from '@/components/UsersList'
import FullUserData from '@/components/FullUserData'

const routes = [{
  path: '/posts',
  component: HelloWorld
},
{
  path: '/users',
  component: UsersList
},
{
  path: '/users/:id',
  component: FullUserData
}
]

const router = new VueRouter({
routes: routes,
mode: 'history'
})

Vue.config.productionTip = false

new Vue({
router: router,
render: h => h(App),
}).$mount('#app')