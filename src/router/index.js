import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Über_uns from '../views/Über_uns.vue'
import Kleiderspende_registrieren from '../views/Formular_Kleiderspende.vue'
import FAQs from '../views/FAQs.vue'
import Impressum_Homepage from '../views/Impressum_Homepage.vue'
import Datenschutz_Homepage from '../views/Datenschutz_Homepage.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/Über-uns',
    name: 'Über-uns',
    component: Über_uns
  },
  {
    path: '/Kleiderspende_registrieren',
    name: 'Kleiderspende_registrieren',
    component: Kleiderspende_registrieren,
  },
  {
    path: '/FAQs',
    name: 'FAQs',
    component: FAQs,
  },
  {
    path: '/Impressum',
    name: 'Impressum_Homepage',
    component: Impressum_Homepage,
  },
  {
    path: '/Datenschutz',
    name: 'Datenschutz_Homepage',
    component: Datenschutz_Homepage,
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
