<template>
  <div class="Search">
    <div>找到</div>
    <div id="link">
      <div class="link_box" @click="search(1)">
        <router-link class="link" to="/Search/list">单曲</router-link>
      </div>
      <div class="link_box" @click="search(100)">
        <router-link class="link" to="/Search/singer">歌手</router-link>
      </div>
      <div class="link_box" @click="search(10)">
        <router-link class="link" to="/Search/album">专辑</router-link>
      </div>
      <div class="link_box" @click="search(1014)">
        <router-link class="link" to="/Search/video">视频</router-link>
      </div>
      <div class="link_box" @click="search(1000)">
        <router-link class="link" to="/Search/playlist">歌单</router-link>
      </div>
      <div class="link_box" @click="search(1006)">
        <router-link class="link" to="/Search/lyric">歌词</router-link>
      </div>
      <div class="link_box" @click="search()">
        <router-link class="link" to="/Search/podcast">播客</router-link>
      </div>
      <div class="link_box" @click="search()">
        <router-link class="link" to="/Search/voice">声音</router-link>
      </div>
      <div class="link_box" @click="search(1002)">
        <router-link class="link" to="/Search/user">用户</router-link>
      </div>
    </div>
    <div>
      <router-view></router-view>
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
  router,
} from "vue";
import { useRouter } from "vue-router";

import { useStore } from "vuex";
export default defineComponent({
  name: "Search",
  components: {},
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
    let search = (e) => {
      // type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合

      // store.commit("changeState", { name: "searchInfo", value: data.input });

      console.log(e);
      console.log(store.state.searchInfo)
      e.length!=0&&store.state.searchInfo.length!=0?store.dispatch("search", { type: e }):'';
      // let param = { keywords: data.input, timestamp: Date.parse(new Date()) };
      // Search(param)
      //   .then((res) => {
      //     console.log(res.result);
      //     console.log(store);
      //     let searchResultList = res.result;
      //     store.commit("searchResultList_c", searchResultList);
      //     console.log(router.currentRoute.value.fullPath);
      //     // if(router.currentRoute.value.fullPath!="/Search"){
      //     //   }
      //     router.push({ path: "/Search" });
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      // router.push({ path: "/Search" });
    };
    return {
      ...toRefs(data),
      search,
    };
  },
});
</script>
<style lang="less" scoped>
.Search {
  height: 100%;
  overflow-y: scroll;
}
#link {
  display: flex;
  flex-direction: row;
  background-color: antiquewhite;
  .link_box {
    margin: 10px 20px;
  }
}
.showarea {
  width: 100%;
  background-color: aquamarine;
  p {
    display: inline-flex;
  }
  .name {
    background-color: rgba(127, 187, 255, 0.616);
    width: 100px;
  }
}
</style>
