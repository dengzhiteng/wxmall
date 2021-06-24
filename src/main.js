import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
require('./mock/home.js');

import { Button, Cell, CellGroup, Tabbar, TabbarItem, Skeleton, Swipe, SwipeItem, Image as VanImage, Card } from 'vant';

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Skeleton)
  .use(Swipe)
  .use(SwipeItem)
  .use(VanImage)
  .use(Card)
  .mount('#app');
