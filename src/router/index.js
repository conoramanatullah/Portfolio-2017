import Vue from 'vue'
import Router from 'vue-router'

// Components
import Home from 'components/Home'
import About from 'components/About'
import Countdown from 'components/Countdown'
import Esports from 'components/Esports'
import MarsOasis from 'components/MarsOasis'
import Skills from 'components/Skills'
import Vr from 'components/Vr'
import Webgl from 'components/Webgl'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: Countdown
    },
    {
      path: '/esports',
      name: 'esports',
      component: Esports
    },
    {
      path: '/mars-oasis',
      name: 'mars-oasis',
      component: MarsOasis
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/vr',
      name: 'vr',
      component: Vr
    },
    {
      path: '/webgl',
      name: 'webgl',
      component: Webgl
    },

  ]
})
