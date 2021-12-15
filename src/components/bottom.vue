<template>
  <div class="bottom">底部组件</div>
</template>

<script>
export default {
  name: "bottom",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
.bottom {
  width: 100%;
  height: 60px; //底部高度
  background-color: aquamarine;
}
</style>
