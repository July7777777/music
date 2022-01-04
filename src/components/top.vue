<template>
  <div id="top">
    头部组件
    <input type="text" v-model="input" @keyup.enter="search" />
  </div>
</template>


<script>
import { useStore } from "vuex";
import { reactive,  onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "top",
  setup(props) {
    let data = reactive({
      input: "",
    });
    let store = useStore();
    let router = useRouter();
    // onMounted(() => {
    //   console.log('1111')
    //   console.log("useStore", store.state.searchResultList);
    // });
    let search = () => {
      router.push({ path: "/Search" });
      store.commit("changeState", { name: "searchInfo", value: data.input });
      store.dispatch('search',{type:'1'})
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
input{
  border: none;
  outline: none;
}
</style>
