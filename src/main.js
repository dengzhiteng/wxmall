import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import 'amfe-flexible'

import { Button, Cell, CellGroup } from 'vant';
import { ConfigProvider } from 'vant';

createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(ConfigProvider)
    .mount("#app");