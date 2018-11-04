import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'TradePort',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
