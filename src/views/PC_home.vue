<template>
  <div class="bg"></div>
  <!-- b背景图 -->
  <div id="mask" v-if="store.state.loginState">
    <!-- 遮罩层 -->
    <!-- 登录位置 -->
    <div id="login" class="12313213">
      <!-- 登陆组件 -->
      <login />
    </div>
  </div>

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
        <router-view />
      </div>
    </div>

    <div class="bottom"><bottom /></div>
  </div>
</template>

<script>
import top from "@/components/top.vue";
import left from "@/components/left.vue";
import bottom from "@/components/bottom.vue";
import login from "@/components/login.vue";
import { useStore } from "vuex";
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
    login,
  },
  setup() {
    let data = reactive({
      // isRouterAlive: true,
    });
    let store = useStore();

    // let reload = () => {
    //   data.isRouterAlive = false;
    //   nextTick(function () {
    //     data.isRouterAlive = true;
    //   });
    // };

    return {
      ...toRefs(data),
      // reload,
      store,
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
  width: 60vw;
  height: 37.08vw;
  min-width: 666px;
  min-height: 436.6px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  #top {
    background-color: #ec4141;
    // background-color: #eb2f23;
  }
  .main {
    height: 100%;
    display: flex;
    height: calc(100% - 110px); //还要减去底部的高度
    #left {
      // border-right: 1px solid #d3d3d3;

      background-color: rgb(255, 255, 255);
      overflow: hidden;
      overflow-y: scroll;
    }
    #right {
      flex-grow: 1;
      background-color: #fff;
    }
  }
}
// 滚动条的设置   参考 https://blog.csdn.net/weixin_42839080/article/details/81572047
// 1. ::-webkit-scrollbar 滚动条整体部分，可以设置宽度等
// 2. ::-webkit-scrollbar-button 滚动条两端的按钮
// 3. ::-webkit-scrollbar-track  外层轨道
// 4. ::-webkit-scrollbar-track-piece  内层滚动槽
// 5. ::-webkit-scrollbar-thumb 滚动的滑块
// 6. ::-webkit-scrollbar-corner 边角
// 7. ::-webkit-resizer 定义右下角拖动块的样式

// 全局滚动条样式
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #e0e0e0;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #d3d3d3;
}
#mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 3000;
}
#login {
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  z-index: 2000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: fade-in; /*动画名称*/
  animation-duration: 1.5s; /*动画持续时间*/
  -webkit-animation: fade-in 1.5s; /*针对webkit内核*/
}
@keyframes fade-in {
  0% {
    opacity: 0;
  } /*初始状态 透明度为0*/
  50% {
    opacity: 0.5;
  } /*过渡状态 透明度为0*/
  100% {
    opacity: 1;
  } /*结束状态 透明度为1*/
}
@-webkit-keyframes fade-in {
  /*针对webkit内核*/
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  0% {
    opacity: 1;
  }
}
@-webkit-keyframes fade-out {
  /*针对webkit内核*/
  100% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  0% {
    opacity: 1;
  }
}
</style>
