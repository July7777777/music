<template>
  <div class="left">
    <div class="link_box">
      <router-link class="link" to="/Home" exact>发现音乐</router-link>
    </div>
    <div class="link_box">
      <router-link class="link" to="/Podcast">播客</router-link>
    </div>
    <div class="link_box">
      <router-link class="link" to="/Video">视频</router-link>
    </div>
    <div class="link_box">
      <router-link class="link" to="/Friends">朋友</router-link>
    </div>
    <div class="link_box">
      <router-link class="link" to="/LiveStream">直播</router-link>
    </div>
    <div class="link_box">
      <router-link class="link" to="/FM">私人FM</router-link>
    </div>
    <div class="title">我的音乐</div>
    <div class="link_box">
      <router-link class="link" to="/Download">本地与下载</router-link>
    </div>
    <div class="link_box">
      <router-link class="link" to="/Recently_Played">最近播放</router-link>
    </div>
    <div class="title">创建的歌单</div>
    <div class="link_box">
      <router-link class="link" to="/My_Love">我喜欢的音乐</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "left",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
.left {
  width: 150px;
}
.title {
  font-size: small;
  color: rgb(107, 107, 107);
}
.link_box {
  width: 100%;
  // margin: 5px 0 5px 20px;
}
.link_box:hover {
  background-color: #f6f6f7;
}
.link {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  width: calc(100% - 20px); //减去下边padding   right  的20px
  font-size: medium;
  color: rgb(36, 36, 36);
}

.title,
a {
  margin: 0;
  padding: 5px 0 5px 20px;
}
.active {
  // color: #3822ff;
  background-color: #f6f6f7;
  font-weight: bold;
}
a {
  color: #000;
}
a:hover {
  text-decoration: none;
}

input,
p,
div,
a {
  font-family: "微软雅黑", Courier, monospace;
}
</style>
