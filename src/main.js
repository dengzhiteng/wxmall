import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import { Button } from 'vant';
import { ConfigProvider } from 'vant';

createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(ConfigProvider)
    .mount("#app");
