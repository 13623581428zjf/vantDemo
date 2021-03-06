import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pull from '@/components/PullRefresh'
import Feid from '@/components/Feid'
import Form from '@/components/Form'
import Area from '@/components/Area'
import ShareSheet from '@/components/ShareSheet'
import SwipeCell from '@/components/SwipeCell'
import Collapse from '@/components/Collapse'
import CountDown from '@/components/CountDown'
import Lazyload from '@/components/Lazyload'
import List from '@/components/List'
import NoticeBar from '@/components/NoticeBar'
import Steps from '@/components/Steps'
import Swipe from '@/components/Swipe'
import IndexBar from '@/components/IndexBar'
import AddressEdit from '@/components/AddressEdit'
import TreeSelect from '@/components/TreeSelect'
import AddressList from '@/components/AddressList'
import Card from '@/components/Card'
import ContactCard from '@/components/ContactCard'
import Toast from '@/components/Toast'
import Coupon from '@/components/Coupon'
import GoodsAction from '@/components/GoodsAction'
import SubmitBar from '@/components/SubmitBar'
import Sku from '@/components/Sku'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/PullRefresh',
      name: 'PullRefresh',
      component: Pull
    },
    {
      path: '/Feid',
      name: 'Feid',
      component: Feid
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/Area',
      name: 'Area',
      component: Area
    },
    {
      path: '/ShareSheet',
      name: 'ShareSheet',
      component: ShareSheet
    },
    {
      path: '/SwipeCell',
      name: 'SwipeCell',
      component: SwipeCell
    },
    {
      path: '/Collapse',
      name: 'Collapse',
      component: Collapse
    },
    {
      path: '/CountDown',
      name: 'CountDown',
      component: CountDown
    },
    {
      path: '/Lazyload',
      name: 'Lazyload',
      component: Lazyload
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/NoticeBar',
      name: 'NoticeBar',
      component: NoticeBar
    },
    {
      path: '/Steps',
      name: 'Steps',
      component: Steps
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component: Swipe
    },
    {
      path: '/IndexBar',
      name: 'IndexBar',
      component: IndexBar
    },
    {
      path: '/AddressEdit',
      name: 'AddressEdit',
      component: AddressEdit
    },
    {
      path: '/TreeSelect',
      name: 'TreeSelect',
      component: TreeSelect
    },
    {
      path: '/AddressList',
      name: 'AddressList',
      component: AddressList
    }, 
    {
      path: '/Card',
      name: 'Card',
      component: Card
    },
    {
      path: '/ContactCard',
      name: 'ContactCard',
      component: ContactCard
    }, 
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    }, 
    {
      path: '/Coupon',
      name: 'Coupon',
      component: Coupon
    }, 
    {
      path: '/GoodsAction',
      name: 'GoodsAction',
      component: GoodsAction
    }, 
    {
      path: '/SubmitBar',
      name: 'SubmitBar',
      component: SubmitBar
    }, 
    {
      path: '/Sku',
      name: 'Sku',
      component: Sku
    } 
    
  ]
})
