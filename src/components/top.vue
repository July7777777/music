<template>
  <div id="top">
    头部组件
    <input type="text" v-model="input" @keyup.enter="search" />
  </div>
</template>

<script>
import { Search } from "../request/api";
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search() {
      console.log(this.input);
      let input = this.input;
      Search({ keywords:input })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="less">
#top {
  height: 50px;
}
</style>
