<template>
  <div class="list">
    <div
      class="showarea"
      v-for="item in store.state.searchResult.songs"
      :key="item.id"
      @dblclick="dblclick(item)"
    >
      <p class="name">{{ item.name }}</p>
      <p>歌手{{ item.artists[0].name }}</p>
      <p>专辑{{ item.album.name }}</p>
      <p>时长（毫秒）{{ item.duration }}</p>
     
    </div>
  </div>
</template>
<script>
import { MusicUrl, MusicCheck } from "@/request/api";
import { useStore } from "vuex";
import { reactive, nextTick, onMounted, defineComponent, toRefs } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "list",
  setup(props) {
    let data = reactive({
      // listArr: "",
    });
    let store = useStore();
    let router = useRouter();
    let dblclick = (e) => {
      console.log("我双击了");
      console.log(e);
      console.log(e.id);
      console.log(e.name);
      let param = {
        id: e.id,
        // br: //码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
      };
      MusicCheck(param)
        .then((res) => {
          console.log("MusicCheck", res.success);
          if (res.success) {
            console.log("有版权");
            MusicUrl(param)
              .then((res) => {
                console.log(res.data[0].url);
                console.log(store);
                store.commit("changeState", {
                  name: "MusicUrlInfo",
                  value: res.data[0],
                });

                // let searchResultList = res.result;
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    return {
      ...toRefs(data),
      dblclick,
      store,
    };
  },
});
</script>

<style lang="less" scoped>
.showarea {
  width: 100%;
  // 文字禁止选中
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  p {
    // display: inline-flex;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
  }
  .name {
    width: 188px;
  }
}
.showarea:nth-child(even) {
  background: #fff;
}
.showarea:nth-child(odd) {
  background: #f9f9f9;
}
</style>