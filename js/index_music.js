var app = new Vue({
  el: "#app",
  data: {
    mes: "",
    music_list_arr: [],
    music_id:"",
    music_url:"",
    music_img_url:"",
    music_name:"",
    music_maker:"",
    user_name:"",
    hot_comments:[],
    isPlaying:false,
    current:-1,
    music_lrc:"",
    lrc_arr:[],
    currentTime:"",
    duration:"",
    ul_height:"",
  },
  methods: {
    search(mes) {
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.mes).then(function (response) {
        that.music_list_arr = response.data.result.songs;
      }, function (err) {
        console.log(err)
      })
    },
    play(music_id,current) {
      var that = this;
      //播放键img切换
      this.current=current;

      //搜索结果
      axios.get("https://autumnfish.cn/song/url?id=" + music_id).then(function (response) {
        that.music_url = response.data.data[0].url;
      }, function (err) {})
      
      // 歌曲链接,歌名,演唱者
      axios.get("https://autumnfish.cn/song/detail?ids=" + music_id).then(function (response) {
        that.music_img_url = response.data.songs[0].al.picUrl;
        that.music_name=response.data.songs[0].name;
        that.music_maker=response.data.songs[0].ar[0].name;
      }, function (err) {});
      
      //歌词
      axios.get("https://api.imjad.cn/cloudmusic/?type=lyric&id="+music_id).then(function(response){
        that.music_lrc=response.data.lrc.lyric;
        that.lrc_arr=get_lrc_arr(response.data.lrc.lyric);
      },function(err){})
      // 热评
      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + music_id).then(function (response) {
        that.hot_comments = response.data.hotComments;
      }, function (err) {})

    },
    timeUpdate(e){

     //现在的时间
     currentTime=e.target.currentTime;
     //总时长
     duration=e.target.duration;
    //ul总长度带px,并取整
   
    ul_height=parseInt(getComputedStyle( this.$refs.lrc_ul,null).height);
    

     this.$refs.lrc_ul.style.marginTop = -(currentTime/duration)*ul_height*0.95+ "px" ;
      
  }

  }
})

 // 歌词分割功能函数
 var get_lrc_arr=function(lrc){
  //分割每一列
  var parts = lrc.split("\n");
  //遍历分割每一句
  for (let index = 0; index < parts.length; index++) {
    parts[index] = getLrcObj(parts[index]);
  }
  return parts;

  function getLrcObj(content) {
  //把一句分割为两个部分
    var twoParts = content.split("]");
    var time = twoParts[0].substr(1);//将时间前的"["截掉
    var timeParts = time.split(":");//用秒处理比较翻版这里转换成秒
    var seconds = +timeParts[1];
    var min = +timeParts[0];
    seconds = min * 60 + seconds;
    //歌词获取
    var words = twoParts[1];
    return{//返回秒和歌词
      seconds: seconds,
      words: words,
    };
    
    
  };
};

