<template>
  <div>
    <van-skeleton title avatar :row="20" :loading="loading">
      <router-view />
    </van-skeleton>
    <van-tabbar v-model="active" v-if="isShowtabber">
      <van-tabbar-item replace to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item
        replace
        to="/cart"
        icon="shopping-cart-o"
        :badge="cartNum"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/user" icon="friends-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loading: true,
      active: 0,
      isShowtabber: true,
    };
  },
  computed: {
    ...mapState(["cartNum"]),
  },
  watch: {
    $route(to) {
      const name = to.name;
      switch (name) {
        case "home":
          this.isShowtabber = true;
          this.active = 0;
          break;
        case "cart":
          this.isShowtabber = true;
          this.active = 1;
          break;
        case "user":
          this.isShowtabber = true;
          this.active = 2;
          break;
        default:
          this.isShowtabber = false;
          this.active = 0;
          break;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 250);
  },
};
</script>
<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding-bottom: 50px;
}
:root {
  --van-button-primary-background-color: #fcb01d;
  --van-button-primary-border-color: #fcb01d;
  --van-button-border-radius: 10px;
}
</style>
