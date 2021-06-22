<template>
  <div class="home">
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <p class="desc">test</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
};
</script>
<style lang="scss" scoped>
.desc {
  color: red;
  font-size: 14px;
  width: 200px;
  margin: 0;
}
</style>
