<template>
  <div class="home">
    <van-swipe :autoplay="3000" height="300">
      <van-swipe-item v-for="item in swipeImages" :key="item.id">
        <van-image :src="item.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue';
import { getHomeSwiper } from '@/api/home';
export default {
  setup() {
    const state = reactive({
      swipeImages: [],
    });
    const handleGetHomeSwiper = async () => {
      const res = await getHomeSwiper();
      state.swipeImages = res.data.list;
    };
    onMounted(() => {
      handleGetHomeSwiper();
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
