<template>
  <div>
    <van-skeleton title avatar :row="20" :loading="loading">
      <router-view />
    </van-skeleton>
    <van-tabbar v-model="active" v-if="isShowtabber">
      <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="shopping-cart-o" badge="3">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      active: 0,
      isShowtabber: true,
    };
  },
  watch: {
    $route(to) {
      const name = to.name;
      if (name == 'user' || name == 'home' || name == 'cart') {
        this.isShowtabber = true;
      } else {
        this.isShowtabber = false;
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
