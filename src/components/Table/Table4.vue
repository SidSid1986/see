<template>
  <div class="Table2">
    <div class="TableTitle" @click="gotoVideo">
      <span>监控画面</span>
    </div>
    <!-- <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      customEventName="customstatechangedeventname"
    ></video-player> -->
  </div>
</template>

<script>
// import "video.js/dist/video-js.css";
// import "videojs-flash";
// import { videoPlayer } from "vue-video-player";

export default {
  data() {
    return {
      title: "",
      size: "",
      name: [1],
      videoShow: false,
      playerOptions: {
        // videojs options
        muted: false,//声音开关
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // aspectRatio:'16:9',
        //  fluid: true,//自动适应容器画面比例
        techOrder: ["flash", "html5"], //设置顺序，
        sourceOrder: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            type: "rtmp/flv",
            src: "rtmp://58.200.131.2:1935/livetv/hunantv"
          },
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "http://xxxx" //这是hls流
          }
        ],  
        width: "363px",
        height: "160px",
        autoplay: true
      }
    };
  },
  components: { 
    // videoPlayer 
    },

  methods: {
    gotoVideo() {
      // this.$router.push({ name: "Video" });
    }
  }
};
</script>

<style scoped>
.Table2 {
  margin: 0px 10px 0px 10px;
  overflow: hidden;
  font-size: 14px;
  height: 190px;
  border-radius: 15px 15px 15px 15px;

  /* border:3px solid #47607E; */
  background-color: #47607e;
}

.ScrollBorder {
  overflow: hidden;
}
.ListTable {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 3;
}

.textColor {
  color: #ffffff;
  font-weight: bold;
}

.ListBgcOne {
  background-color: #00bdb1;
}

.ListBgcTwo {
  background-color: #47607e;
}

.TableTitle {
  text-align: center;
  /* background-color: red; */
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  border-radius: 15px 15px 0 0;
}

.TableTitle span {
  padding: 5px 15px;
  background: #00bdb1;
  border-radius: 10px;
}

.TableTitleSecond {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
}

.width25 {
  width: 25%;
  text-align: center;
}
.width30 {
  width: 30%;
  text-align: center;
}
.width15 {
  width: 15%;
  text-align: center;
}
</style>
