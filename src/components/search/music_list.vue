<template>
  <div class="list">
    <div class="showarea">
      <span>
        <p class="index"></p>
      </span>
      <p class="name">音乐标题</p>
      <p class="ar">歌手</p>
      <p class="al">专辑</p>
      <p class="dt">时长</p>
      <p class="pop">热度</p>
    </div>
    <div
      class="showarea"
      v-for="(item, index) in store.state.searchResult.songs"
      :key="item.id"
      @dblclick="dblclick(item)"
    >
      <span>
        <p class="index">
          {{ index + 1 }}
        </p>
      </span>
      <p class="name">{{ item.name }}</p>
      <p class="ar">{{ item.ar[0].name }}</p>
      <p class="al">{{ item.al.name }}</p>
      <p class="dt">{{ dateFormat(item.dt) }}</p>
      <!-- store.commit('increment',{'MM-SS',item.dt}) -->
      <p class="pop">{{ item.pop }}</p>
    </div>
  </div>
</template>
<script>
import { MusicUrl, MusicCheck, dateFormat } from "@/request/api";
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
      onMounted(() => {
        
        // store.commit("increment", "MM:SS", 188000);
      });

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
    const dateFormat = (e) => {
      let sec = e / 1000;
      let hour = Math.floor(sec / 3600);
      let minute = Math.floor((sec - hour * 3600) / 60);
      let second = Math.floor(sec - hour * 3600 - minute * 60);
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (hour == "00") {
        hour = "";
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      return hour + minute + ":" + second;
    };

    // const dateFormat = (fmt, date) => {
    //   console.log("dateFormat", fmt);
    //   console.log("dateFormat", date);
    //   let ret;
    //   let date=
    //   const opt = {
    //     "Y+": date.getFullYear().toString(), // 年
    //     "m+": (date.getMonth() + 1).toString(), // 月
    //     "d+": date.getDate().toString(), // 日
    //     "H+": date.getHours().toString(), // 时
    //     "M+": date.getMinutes().toString(), // 分
    //     "S+": date.getSeconds().toString(), // 秒
    //   };
    //   for (let k in opt) {
    //     ret = new RegExp("(" + k + ")").exec(fmt);
    //     if (ret) {
    //       fmt = fmt.replace(
    //         ret[1],
    //         ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
    //       );
    //     }
    //   }
    //   return fmt;
    // };
    return {
      ...toRefs(data),
      dblclick,
      dateFormat,
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
  .index {
    text-align: center;
    width: 30px;
  }
  .name {
    width: 120px;
  }
  .ar,
  .al,
  .dt,
  .pop {
    width: 90px;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    margin: 0 4px;
  }
  .dt {
    width: 70px;
  }
}
.showarea:nth-child(even) {
  background: #fff;
}
.showarea:nth-child(odd) {
  background: #f9f9f9;
}
</style>