<template>
  <div id="top">
    头部组件
    <input type="text" v-model="input" @keyup.enter="search" />
  </div>
</template>


<script>
import { Search } from "../request/api";
import { useStore } from "vuex";
import { reactive, nextTick, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Search",
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
    let search = () => {
      console.log(router);
      console.log(data);
      let param = { keywords: data.input, timestamp: Date.parse(new Date()) };
      Search(param)
        .then((res) => {
          console.log(res.result);
          console.log(store);
          let searchResultList = res.result;
          store.commit("searchResultList_c", searchResultList);
          console.log(router.currentRoute.value.fullPath);
          // if(router.currentRoute.value.fullPath!="/Search"){
          //   }
          router.push({ path: "/Search"});
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return {
      ...toRefs(data),
      search,
    };
  },
});
</script>

<style scoped lang="less">
#top {
  height: 50px;
}
</style>
