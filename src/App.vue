<template>
  <div id="nav">
    <van-skeleton title avatar :row="4" :loading="loading">
      <router-view />
    </van-skeleton>
    <van-skeleton title avatar :row="4" :loading="loading" />
    <van-skeleton title avatar :row="4" :loading="loading" />
    <van-skeleton title avatar :row="4" :loading="loading" />
    <van-tabbar>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 250);
  },
};
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
:root {
  --van-button-primary-background-color: #fcb01d;
  --van-button-primary-border-color: #fcb01d;
  --van-button-border-radius: 10px;
}
</style>
