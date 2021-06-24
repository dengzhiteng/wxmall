<template>
  <div class="details">
    <div class="content">1212</div>
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon
        replace
        to="/cart"
        icon="cart-o"
        text="购物车"
        :badge="cartNum"
      />
      <van-action-bar-button type="warning" text="加入购物车" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { getDetails } from "@/api/home";
export default {
  computed: {
    ...mapState(["cartNum"]),
  },
  async created() {
    const { id } = this.$route.query;
    const data = await getDetails({ id });
    console.log(data);
  },
};
</script>
