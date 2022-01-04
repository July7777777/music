import { createRouter, createWebHistory } from 'vue-router'
import PC_home from '../views/PC_home.vue'

const routes = [
  {
    path: '/',
    name: 'PC_home',
    redirect: '/Home',
    component: PC_home,
    children: [
      {
        path: '/Home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/Podcast',
        component: () => import('../views/Podcast.vue')
      },
      {
        path: '/Video',
        component: () => import('../views/Video.vue')
      },
      {
        path: '/Friends',
        component: () => import('../views/Friends.vue')
      },
      {
        path: '/LiveStream',
        component: () => import('../views/LiveStream.vue')
      },
      {
        path: '/FM',
        component: () => import('../views/FM.vue')
      },
      {
        path: '/Download',
        component: () => import('../views/Download.vue')
      },
      {
        path: '/Recently_Played',
        component: () => import('../views/Recently_Played.vue')
      },
      {
        path: '/My_Love',
        component: () => import('../views/My_Love.vue')
      },
      {
        path: '/Search',
        redirect: '/Search/list',
        component: () => import('../views/Search.vue'),
        children: [
          {
            path: '/Search/album',
            component: () => import('../components/search/music_album.vue')
          }, {
            path: '/Search/list',
            component: () => import('../components/search/music_list.vue')
          }, {
            path: '/Search/lyric',
            component: () => import('../components/search/music_lyric.vue')
          }, {
            path: '/Search/playlist',
            component: () => import('../components/search/music_playlist.vue')
          }, {
            path: '/Search/singer',
            component: () => import('../components/search/music_singer.vue')
          }, {
            path: '/Search/video',
            component: () => import('../components/search/music_video.vue')
          }, {
            path: '/Search/podcast',
            component: () => import('../components/search/music_podcast.vue')
          }, {
            path: '/Search/voice',
            component: () => import('../components/search/music_voice.vue')
          }, {
            path: '/Search/user',
            component: () => import('../components/search/music_user.vue')
          },
        ]
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
