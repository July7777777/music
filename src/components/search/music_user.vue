<template>
  <div class="user">
    <h1>用户</h1>
    <div
      class="showarea"
      v-for="item in store.state.searchResult.userprofiles"
      :key="item.id"
    >
      <p class="name">{{ item.nickname }}</p>
      <p id="">id:{{ item.userId }}</p>
      <!-- <p>mark:{{ item.mark }}</p>
      <p>mvid:{{ item.mvid }}</p> -->
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { reactive, onMounted, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "user",
  setup(props) {
    let data = reactive({
      store: "",
    });
    let store = useStore();
    onMounted(() => {
      console.log("歌手");
    });
    return {
      ...toRefs(data),
      store
    };
  },
});
</script>
<style lang="less" scoped>
.showarea {
  width: 100%;
  background-color: aquamarine;
  p {
    display: inline-flex;
  }
  .name {
    background-color: rgba(127, 187, 255, 0.6);
    width: 100px;
  }
}
</style>