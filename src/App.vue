<template>
  <router-view></router-view>
</template>

<style lang="less">
@media screen and (min-width: 600px) {
  body {
    overflow: hidden;
  }
  
  #app {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
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
</style>
