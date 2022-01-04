<template>
  <div class="list">
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
      listArr: "",
    });
    let store = useStore();
    let router = useRouter();

    return {
      ...toRefs(data),
      store,
    };
  },
});
</script>

<style lang="less" scoped>
.showarea {
  width: 100%;
  p {
    display: inline-flex;
  }
  .name {
    width: 100px;
  }
}
.showarea:nth-child(even) {
  background: #fff;
}
.showarea:nth-child(odd) {
  background: #f9f9f9;
}
</style>