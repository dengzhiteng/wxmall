<template>
  <div class="home">
    <van-swipe :autoplay="3000" height="200">
      <van-swipe-item v-for="item in swipeImages" :key="item.id">
        <van-image :src="item.imageUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="goodList">
      <router-link
        :to="'/details?id=' + item.id"
        v-for="item in goodList"
        :key="item.id"
      >
        <van-card
          :price="item.price"
          :origin-price="item.orginPrice"
          :desc="item.desc"
          :title="item.title"
          :thumb="item.imageUrl"
        />
      </router-link>
    </div>
  </div>
</template>
<script>
import { reactive, onMounted, toRefs } from "vue";
import { getHomeSwiper, getGoodList } from "@/api/home";
// import { useStore } from "vuex";
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
    // const store = useStore();
    onMounted(() => {
      handleGetHomeSwiper();
      handleGoodList();
      // store.commit("setCartNum", 1);
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
