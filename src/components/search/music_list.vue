<template>
  <div class="list">
    <div class="showarea">
      <p class="index"></p>
      <p class="name top_title">音乐标题</p>
      <p class="ar top_title">歌手</p>
      <p class="al top_title">专辑</p>
      <p class="dt top_title">时长</p>
      <p class="pop_bg top_title">热度</p>

      <!-- <span>
        <p class="index"></p>
      </span>
      <p class="name">音乐标题</p>
      <p class="ar">歌手</p>
      <p class="al">专辑</p>
      <p class="dt">时长</p> -->
      <!-- <p class="pop">热度</p> -->
      <!-- <div class="pop_boxx">热度</div> -->
    </div>
    <div
      :class="['showarea', bg_flag == item.id ? 'click_bg' : '']"
      v-for="(item, index) in store.state.searchResult.songs"
      :key="item.id"
      @click="bg_flag = item.id"
      @dblclick="dblclick(item, item.id)"
    >
      <p class="index">{{ index + 1 }}</p>
      <p class="name">{{ item.name }}</p>
      <p class="ar">{{ item.ar[0].name }}</p>
      <p class="al">{{ item.al.name }}</p>
      <p class="dt">{{ dateFormat(item.dt) }}</p>
      <div class="pop_box">
        <p
          class="pop_p"
          :style="{ width: item.pop == null ? '0' : item.pop + '%' }"
        ></p>
      </div>

      <!-- <span>
        <p class="index">
          {{ index + 1 }}
        </p>
      </span>
      <p class="name">{{ item.name }}</p>
      <p class="ar">{{ item.ar[0].name }}</p>
      <p class="al">{{ item.al.name }}</p>
      <p class="dt">{{ dateFormat(item.dt) }}</p>

      <div class="pop_box">
        <p
          class="pop_p"
          :style="{ width: item.pop == null ? '0' : item.pop + '%' }"
        ></p>
      </div> -->
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
      value5: 80,
      bg_flag: "",
    });
    let store = useStore();
    let router = useRouter();
    let s_click = (e) => {
      console.log(e);
    };
    let dblclick = (e, id) => {
      console.log("我双击了");
      console.log(e);
      console.log(e.id);
      console.log(e.name);
      data.bg_flag = id;
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
      s_click,
      dblclick,
      dateFormat,
      store,
    };
  },
});
</script>

<style lang="less" scoped>
.showarea {
  display: flex;
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
    text-overflow: ellipsis;
  }
  .index {
    text-align: center;
    width: 30px;
    padding: 5px 0;
  }
  .name {
    flex-grow: 3;
    width: 120px;
    padding: 5px 0;
  }
  .ar,
  .al,
  .dt,
  .pop {
    flex-grow: 1;
    width: 90px;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    margin: 0 4px;
    padding: 5px 0;
  }
  .dt {
    width: 50px;
    flex-grow: 0;
  }
}
.top_title {
  color: #373737;
}
.pop_box {
  position: relative;
  top: 10px;
  // flex-grow: 2;
  margin: 5px 4px;

  width: 70px;
  height: 4px;
  border-radius: 4px;
  background-color: #dfdfdf;
}

.pop_p {
  position: absolute;
  // top: 10px;
  height: 100%;
  border-radius: 4px;
  background-color: #c8c8c8;
}
.pop_bg {
  margin: 0 4px;
  padding: 5px 0;
  background-color: none;
  // flex-grow: 2;
  width: 70px;
}

.showarea:nth-child(even) {
  background: #fff;
}
.showarea:nth-child(odd) {
  background: #f9f9f9;
}
.list {
  .click_bg {
    background-color: #e5e5e5;
  }
}
</style>