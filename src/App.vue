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
</style>
