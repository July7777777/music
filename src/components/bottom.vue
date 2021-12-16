<template>
  <div class="bottom">
    <!-- <div id="audio">
      <audio
        controls
        src="https://webfs.ali.kugou.com/202112161500/cbecb22c979809ccd1a54f6206810536/G176/M05/1F/19/8A0DAF3LyviAenTVACG3QGSRe1k906.mp3"
      ></audio>
    </div> -->
    <span class="tsp-audio" :class="{ playing: status == 1 }">
      <audio
        width="100%"
        ref="audio"
        onload="test"
        class="audio"
        :src="url"
        controls="controls"
      >
        浏览器不支持录音播放
      </audio>
    </span>
  </div>
</template>

<script>
export default {
  name: "bottom",
  // props: {
  //   msg: String,

  // },
  props: ["url"],

  data() {
    return {
      status: 0, // 0 pause, 1 play
      url: "https://webfs.ali.kugou.com/202112161500/cbecb22c979809ccd1a54f6206810536/G176/M05/1F/19/8A0DAF3LyviAenTVACG3QGSRe1k906.mp3",
    };
  },
  mounted() {
    var self = this;
    let audio = this.$refs.audio;
    new MediaElementPlayer(audio);
    audio.addEventListener("play", function (e) {
      self.status = 1;
    });
    audio.addEventListener("pause", function (e) {
      self.status = 0;
    });
  },
};
</script>

<style scoped lang="less">
.bottom {
  width: 100%;
  height: 60px; //底部高度
  background-color: rgba(127, 255, 212, 0.418);
}
#audio {
  width: 300px;
  height: 20px;
}
</style>

<style lang="less">
.mejs__container {
  background-color: rgba(255, 255, 255, 0) !important;
}
// .mejs__horizontal-volume-slider, .mejs__mute {
//     display: none;
// }
// .mejs__controls, .mejs__container {
//     overflow: hidden;
//     border-radius: 13px!important;
//     height: 25px!important;
// }
// .mejs__time-current, .mejs__time-loaded, .mejs__time-hovered {
//     height: 5px;
// }
// .mejs__time-total {
//     height: 4px;
// }
// .mejs__controls {
//     bottom: 6px;
// }
// .mejs__button button {
//     // background-image: url('../../images/sprite-default.svg')!important;
//     transform: scale(0.7);
// }
// .tsp-audio.playing {
//     .mejs__currenttime {
//         color: #5F9EFA;
//     }
//     .mejs__button button {
//         // background-image: url('../../images/sprite-primary.svg')!important;
//     }
// }

// .mejs__time-current {
//     background: #5F9EFA;
// }
// .mejs__currenttime, .mejs__duration {
//     color: #A4A4A4!important;
// }

// .mejs__time-total {
//     background: #DEDEDE!important;
// }

// .mejs__container, .mejs__controls {
//     background: #F6F6F6!important;
// }
// .el-table__row.current-row,
// .el-table__row:hover {
//     .mejs__container,
//     .mejs__controls {
//         background: #FFF!important;
//     }
// }
// .el-table__row:not(.current-row):hover {
//     .mejs__currenttime {
//         color: #000;
//     }
//     .mejs__button button {
//         // background-image: url('../../images/sprite-default.svg')!important;
//         transform: scale(0.8);
//     }
// }

// .mejs__time-handle {
//     top: -2px;
//     .mejs__time-handle-content {
//         border: 1px solid #ccc;
//     }
// }
// .mejs__time-float {
//     display: none!important;
// }
</style>
