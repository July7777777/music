<template>
  <div class="bottom">
    底部播放
    <div id="audio">
      <audio controls
        src="https://webfs.ali.kugou.com/202112161500/cbecb22c979809ccd1a54f6206810536/G176/M05/1F/19/8A0DAF3LyviAenTVACG3QGSRe1k906.mp3"
      ></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
.bottom {
  width: 100%;
  height: 60px; //底部高度
  background-color: rgba(127, 255, 212, 0.418);
}
#audio{
  width: 300px;
  height: 20px;
}
</style>
