import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index'
// import Login from '@/components/login'
const Index = () =>
  import ('@/components/Index')

const Login = () =>
  import ('@/components/Login')

const Search = () =>
  import ('@/components/Search')

const Voice = () =>
  import ('@/components/Voice')

const Travel = () =>
  import ('@/components/travel')

const Destination = () =>
  import ('@/components/Destination')

const Destination1 = () =>
  import ('@/components/Destination1')

const PlaneTicket = () =>
  import ('@/components/PlaneTicket')

const GrzHotel = () =>
  import ('@/components/GrzHotel')

const GrzDetal = () =>
  import ('@/components/GrzDetal')

const GrzPay = () =>
  import ('@/components/GrzPay')

const Reserve = () =>
  import ('@/components/Reserve')

const IndexOrder = () =>
  import ('@/components/IndexOrder')

const IndexType = () =>
  import ('@/components/IndexType')

const IndexBank = () =>
  import ('@/components/IndexBank')

const IndexMessage = () =>
  import ('@/components/IndexMessage')

const IndexFace = () =>
  import ('@/components/IndexFace')

const AboutMe = () =>
  import ('@/components/AboutMe')

const Orders = () =>
  import ('@/components/Orders')

const OrdersDetail = () =>
  import ('@/components/OrdersDetail')

const DestinationDetail = () =>
  import ('@/components/DestinationDetail')

const Travels1 = () =>
  import ('@/components/Travels1')

const Notice = () =>
  import ('@/components/Notice')

const SearchList = () =>
  import ('@/components/SearchList')

const PlaneSeat = () =>
  import ('@/components/PlaneSeat')

const PlaneQuery = () =>
  import ('@/components/PlaneQuery')

const PlaneCity = () =>
  import ('@/components/PlaneCity')

const PlaneConfirm = () =>
  import ('@/components/PlaneConfirm')

const IndexAddBank = () =>
  import ('@/components/IndexAddBank')

const PlaneInfo = () =>
  import ('@/components/PlaneInfo')

const GrzLocation = () =>
  import ('@/components/GrzLocation')

const GrzList = () =>
  import ('@/components/GrzList')

const Finding = () =>
  import ('@/components/Finding')

const TravelDetail = () =>
  import ('@/components/traveldetail')

const More = () =>
  import ('@/components/More')

const Ticket = () =>
  import ('@/components/Ticket')

const Daren = () =>
  import ('@/components/daren')

const Darenxq = () =>
  import ('@/components/darenxq')

const guide = () =>
  import ('@/components/guide')

const guidexq = () =>
  import ('@/components/guidexq')

const sheyingshi = () =>
  import ('@/components/sheyingshi')

const sheyingshixq = () =>
  import ('@/components/sheyingshixq')

const Ticketxq = () =>
  import ('@/components/ticketxq')

const safe = () =>
  import ('@/components/safe')


const pay = () =>
  import ('@/components/pay')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/voice',
      name: 'voice',
      component: Voice
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/Destination',
      name: 'Destination',
      component: Destination
    },
    {
      path: '/Destination1',
      name: 'Destination1',
      component: Destination1
    },
    {
      path: '/PlaneTicket',
      name: 'PlaneTicket',
      component: PlaneTicket
    },
    {
      path: '/GrzHotel',
      name: 'GrzHotel',
      component: GrzHotel
    },
    {
      path: '/GrzDetal',
      name: 'GrzDetal',
      component: GrzDetal
    },
    {
      path: '/GrzPay',
      name: 'GrzPay',
      component: GrzPay
    },
    {
      path: '/Reserve',
      name: 'Reserve',
      component: Reserve
    },
    {
      path: '/IndexOrder',
      name: 'IndexOrder',
      component: IndexOrder
    },
    {
      path: '/IndexType',
      name: 'IndexType',
      component: IndexType
    },
    {
      path: '/IndexBank',
      name: 'IndexBank',
      component: IndexBank
    },
    {
      path: '/IndexMessage',
      name: 'IndexMessage',
      component: IndexMessage
    },
    {
      path: '/IndexFace',
      name: 'IndexFace',
      component: IndexFace
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/OrdersDetail',
      name: 'OrdersDetail',
      component: OrdersDetail
    },
    {
      path: '/DestinationDetail',
      name: 'DestinationDetail',
      component: DestinationDetail
    },
    {
      path: '/travels1',
      name: 'Travels1',
      component: Travels1
    },
    {
      path: '/Notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/SearchList',
      name: 'SearchList',
      component: SearchList
    },
    {
      path: '/PlaneSeat',
      name: 'PlaneSeat',
      component: PlaneSeat
    },
    {
      path: '/PlaneQuery',
      name: 'PlaneQuery',
      component: PlaneQuery
    },
    {
      path: '/PlaneCity',
      name: 'PlaneCity',
      component: PlaneCity
    },
    {
      path: '/PlaneConfirm',
      name: 'PlaneConfirm',
      component: PlaneConfirm
    },
    {
      path: '/IndexAddBank',
      name: 'IndexAddBank',
      component: IndexAddBank
    },
    {
      path: '/PlaneInfo',
      name: 'PlaneInfo',
      component: PlaneInfo
    },
    {
      path: '/GrzLocation',
      name: 'GrzLocation',
      component: GrzLocation
    },
    {
      path: '/GrzList',
      name: 'GrzList',
      component: GrzList
    },
    {
      path: '/Finding',
      name: 'Finding',
      component: Finding
    },
    {
      path: '/TravelDetail',
      name: 'TravelDetail',
      component: TravelDetail
    },
    {
      path: '/More',
      name: 'More',
      component: More
    },
    {
      path: '/Ticket',
      name: 'Ticket',
      component: Ticket
    },
    {
      path: '/daren',
      name: 'daren',
      component: Daren,
    },
    {
      path: '/darenxq',
      name: 'darenxq',
      component: Darenxq
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide
    },
    {
      path: '/guidexq',
      name: 'guidexq',
      component: guidexq
    },
    {
      path: '/sheyingshi',
      name: 'sheyingshi',
      component: sheyingshi
    },
    {
      path: '/sheyingshixq',
      name: 'sheyingshixq',
      component: sheyingshixq
    },
    {
      path: '/ticketxq',
      name: 'ticketxq',
      component: Ticketxq
    },
    {
      path: '/safe',
      name: 'safe',
      component: safe
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
