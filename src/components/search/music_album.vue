<template>
  <div class="album">
    <h1>专辑</h1>
  </div>
</template>
<script>
// import { Search } from "../request/api";
import { useStore } from "vuex";
import { reactive, nextTick, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "list",
  setup(props) {
    let data = reactive({
      input: "",
      store: "",
    });
    let store = useStore();
    let router = useRouter();
    // onMounted(() => {
    //   console.log('1111')
    //   console.log("useStore", store.state.searchResultList);
    // });
    
    return {
      ...toRefs(data),
    };
  },
});
</script>
<style lang="less" scoped>
</style>