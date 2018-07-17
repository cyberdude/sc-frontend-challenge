import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contacts/:page',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
