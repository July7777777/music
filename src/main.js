import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/flex.css'

// mediaelement 插件  参考自 https://www.jianshu.com/p/be69b201818b
import 'mediaelementjs';
import 'mediaelementjs/build/mediaelementplayer.min.css';
// import 'mediaelement/full';
// import 'mediaelement/build/mediaelementplayer.min.css';

createApp(App).use(store).use(router).mount('#app')
