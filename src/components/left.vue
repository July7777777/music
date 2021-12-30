<template>
  <div class="left">
    <div class="link_box"><router-link class="link" to="/Home" exact>发现音乐</router-link></div>
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
#left {
  width: 100%;
}
.title {
  font-family: "黑体";
  font-size: small;
  color: rgb(107, 107, 107);
}
.link_box{
  width: 100%;
}
.link_box:hover{
  background-color:#F6F6F7 ;
}
.link {
  display: inline-block;
  width: 100%;
  font-family: "黑体";
  font-size: medium;
  color: rgb(36, 36, 36);
}


.active {
  // color: #3822ff;
  background-color:#F6F6F7 ;
  font-weight: bold;


}
a {
  color: #000;
}
a:hover {
  text-decoration: none;
}
</style>
