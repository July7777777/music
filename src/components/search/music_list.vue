<template>
  <div class="list">
    <h1>单曲</h1>
    <div
      class="showarea"
      v-for="item in store.state.searchResult.songs"
      :key="item.id"
    >
      <p class="name">{{ item.name }}</p>
      <p id="">id:{{ item.id }}</p>
      <p>mark:{{ item.mark }}</p>
      <p>mvid:{{ item.mvid }}</p>
    </div>
  </div>
</template>
<script>
// import { Search } from "@/request/api";
import { useStore } from "vuex";
import { reactive, nextTick, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "list",
  setup(props) {
    let data = reactive({
      listArr: ""
    });
    let store = useStore();
    let router = useRouter();

    return {
      ...toRefs(data),
      store,
    }
  }
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