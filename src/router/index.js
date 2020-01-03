import Vue from 'vue'
import Router from 'vue-router'
import CreateBlog from '@/components/CreateBlog'
import Testimonials from '@/components/Testimonials'
import HomePage from '@/components/HomePage'
import Test from '@/components/SlideShowMenu'
import Icons from '@/components/Icons'
import AllServices from '@/components/AllServices'
import OurServices from '@/components/OurServicesGroup/OurServices'
import OurServicesTitle from '@/components/OurServicesGroup/OurServicesTitle'
import OurServicesIcons from '@/components/OurServicesGroup/OurServicesIcons'
import SLAPackages from '@/components/OurServicesGroup/SLAPackages'
import ContactUSPage from '@/components/ContactUsGroup/ContactUsPage'
import Blog from '@/components/Blog'
import BlogHome from '@/components/BlogHome'

import AboutUs from '@/components/AboutUs'


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
      path: '/SLAPackages',
      name: 'SLAPackages',
      component: SLAPackages
    },
    {
      path: '/OurServicesTitle',
      name: 'OurServicesTitle',
      component: OurServicesTitle
    },
    {
      path: '/OurServicesIcons',
      name: 'OurServicesIcons',
      component: OurServicesIcons
    },
    {
      path: '/OurServices',
      name: 'OurServices',
      component: OurServices
    },
    {
      path: '/AllServices',
      name: 'AllServices',
      component: AllServices
    },
    {
      path: '/Testimonials',
      name: 'Testimonials',
      component: Testimonials
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Icons',
      name: 'Icons',
      component: Icons
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
    }
  ]
})
