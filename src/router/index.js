import Vue from 'vue'
import Router from 'vue-router'
import CreateBlog from '@/components/CreateBlog'
import HomePage from '@/components/HomePage'
import OurServices from '@/components/OurServicesGroup/OurServices'
import ContactUSPage from '@/components/ContactUsGroup/ContactUsPage'
import Blog from '@/components/Blog'
import BlogHome from '@/components/BlogHome'
import Portal from '@/components/Portal/PortalPage'
import TermsOfBusiness from '@/components/HiddenPages/TermsOfBusiness'
import AboutUs from '@/components/AboutUs'
import CreditApplicationForm from '@/components/HiddenPages/CreditApplicationForm'


Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) { // if has a hash...
      return { selector: to.hash } // scroll to the element
    } if(savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path:'/Blog/:blogId',
      name: 'Blog',
      component: Blog
    },
    {
      path:'/Blog',
      name: 'BlogHome',
      component: BlogHome
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUSPage
    },
    {
      path: '/OurServices',
      name: 'OurServices',
      component: OurServices
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/Create',
      name: 'Create',
      component: CreateBlog
    },
    {
      path: '/Portal',
      name: 'Portal',
      component: Portal
    },
    {
      path: '/support/documents/TermsOfBusiness',
      name: 'TermsOfBusiness',
      component: TermsOfBusiness
    },
    {
      path: '/support/documents/CreditApplicationForm',
      name: 'CreditApplicationForm',
      component: CreditApplicationForm
    }
  ]
})
