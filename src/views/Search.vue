<template>
  <div class="Search">
    <div>找到</div>
    <div id="link">
      <div class="link_box">
        <router-link class="link" to="/Search/list">单曲</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/singer">歌手</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/album">专辑</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/video">视频</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/playlist">歌单</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/lyric">歌词</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/podcast">播客</router-link>
      </div>
      <div class="link_box">
        <router-link class="link" to="/Search/voice">声音</router-link>
      </div>
      <div class="link_box">
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
  setup(props, context) {
    let router = useRouter();
    let store = useStore();

    let data = reactive({
      input: "",
      reload: false,
    });
    onMounted(() => {});
    return {
      ...toRefs(data),
      store,
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
