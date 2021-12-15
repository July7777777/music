<template>
  <div class="left">
    <div><router-link to="/">发现音乐</router-link></div>
    <div>
      <router-link to="/Podcast">播客</router-link>
    </div>
    <div>
      <router-link to="/Video">视频</router-link>
    </div>
    <div>
      <router-link to="/Friends">朋友</router-link>
    </div>
    <div>
      <router-link to="/LiveStream">直播</router-link>
    </div>
    <div>
      <router-link to="/FM">私人FM</router-link>
    </div>
    <div>我的音乐</div>
    <div>
      <router-link to="/Download">本地与下载</router-link>
    </div>
    <div>
      <router-link to="/Recently_Played">最近播放</router-link>
    </div>
    <div>创建的歌单</div>
    <div>
      <router-link to="/My_Love">私人FM</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
#left {
  width: 100%;
}
a {
  color: #000;
}
a:hover {
  text-decoration: none;
}
</style>
