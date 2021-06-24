<template>
  <div class="home">
    <van-swipe :autoplay="3000" height="200">
      <van-swipe-item v-for="item in swipeImages" :key="item.id">
        <van-image :src="item.imageUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="goodList">
      <router-link to="/details">
        <van-card
          :price="item.price"
          origin-price="10.00"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.imageUrl"
          v-for="item in goodList"
          :key="item.id"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted, toRefs } from 'vue';
import { getHomeSwiper, getGoodList } from '@/api/home';
export default {
  setup() {
    const state = reactive({
      swipeImages: [],
      goodList: [],
    });
    const handleGetHomeSwiper = async () => {
      const res = await getHomeSwiper();
      state.swipeImages = res.data.list;
    };
    const handleGoodList = async () => {
      const res = await getGoodList();
      state.goodList = res.data.list;
    };
    onMounted(() => {
      handleGetHomeSwiper();
      handleGoodList();
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
}
.desc {
  color: red;
  font-size: 14px;
  width: 200px;
  margin: 0;
  span {
    color: black;
  }
}
</style>
