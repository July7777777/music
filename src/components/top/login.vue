<template>
  <div id="login">登录页</div>
</template>


<script>
import { useStore } from "vuex";
import { reactive, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "login",
  setup(props) {
    let data = reactive({});
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

<style scoped lang="less">
.flex {
  display: flex;
  align-items: center;
  // justify-content: center;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
input,
p,
div,
a {
  font-family: "微软雅黑", Courier, monospace;
  font-size: 13px;
}

.pointer {
  cursor: pointer;
}
</style>
