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
      // this.$router.push({name:'Search'}) 
      this.$router.push({path:'/Search'})
      console.log(this.input);
      let input = this.input;
      Search({ keywords:input })
        .then((res) => {
          console.log(res.result);
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
