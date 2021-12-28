<template>
  <div class="Search">
    搜索展示区域
    <div class="showarea" v-for="item in store.state.searchResultList.songs" :key="item.id">
      <p id="id">id:{{ item.id }}</p>
      <p>mark:{{ item.mark }}</p>
      <p>name:{{ item.name }}</p>
      <p>mvid:{{ item.mvid }}</p>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  onMounted,
  defineComponent,
  toRefs,
  watch,
  router
} from "vue";
import { useRouter } from "vue-router";

import { useStore } from "vuex";
export default defineComponent({
  name: "Search",
  components: {},
  setup(props,context) {
    let router = useRouter();
    let store = useStore();
    
    let data = reactive({
      input: "",
      reload:false
    });
    onMounted(() => {

    });
    return {
      ...toRefs(data),
      store
    };
  },
});
</script>
<style lang="less" scoped>
.Search {
  height: 100%;
  overflow-y: scroll;
}
</style>
