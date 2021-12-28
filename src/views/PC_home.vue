<template>
  <div class="bg"></div>
  <!-- b背景图 -->

  <div id="contont">
    <div id="top">
      <!-- 头部组件 -->
      <top />
    </div>

    <div class="main">
      <!-- 主体 -->
      <div id="left">
        <!-- 左侧路由 -->
        <left />
      </div>
      <div id="right">
        <!-- 右侧路由展示区域 -->
        <!-- <router-view v-if="isRouterAlive" @reload="reload" /> -->
        <router-view  />
      </div>
    </div>

    <div class="bottom"><bottom /></div>
  </div>
</template>

<script>
import top from "@/components/top.vue";
import left from "@/components/left.vue";
import bottom from "@/components/bottom.vue";
import {
  reactive,
  onMounted,
  defineComponent,
  toRefs,
  watch,
  nextTick,
} from "vue";

export default {
  name: "PC_home",
  components: {
    top,
    left,
    bottom,
  },
  setup() {
    let data = reactive({
      // isRouterAlive: true,
    });
    // let reload = () => {
    //   data.isRouterAlive = false;
    //   nextTick(function () {
    //     data.isRouterAlive = true;
    //   });
    // };

    return {
      ...toRefs(data),
      // reload,
    };
  },
};
</script>

<style lang="less" scoped>
.bg {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url("../assets/img/bg_PC.jpg") no-repeat fixed center;
  background-size: cover;
  filter: blur(3px);
}
#contont {
  position: absolute;
  width: 50vw;
  height: 32vw;
  min-width: 666px;
  min-height: 436.6px;
  border-radius: 2px;
  overflow: hidden;
  background-color: antiquewhite;
  #top {
    background-color: #ec4141;
  }
  .main {
    height: 100%;
    display: flex;
    height: calc(100% - 110px); //还要减去底部的高度
    #left {
      width: 19.55%;
      background-color: rgb(255, 255, 255);
    }
    #right {
      width: 80.45%;
      background-color: rgb(169, 210, 247);
    }
  }
}
</style>
