<template>
  <div class="Nav">
    <el-row class="row-bg HomeNav">
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <div class="HomeNavTitle">监控和网络中心</div>
      </el-col>
      <el-col :span="6">
        <div class="HomeNavTime">{{time}}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: ''
    };
  },

  mounted() {
    // this.time =  this.moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    setInterval(() => {
      this.time =  this.moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    }, 1000)
      
  },

  components: {},
  computed: {
    newDate() {
     return 1
    }
  },
  methods: {}
};
</script>

<style scoped>
.Nav {
  position: fixed;
  width: 100%;
  z-index: 9999999;
}

.HomeNav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  background-color: #606c78;
  box-shadow: 0px 0px 2px 3px #4d5d6c;
}

.HomeNavTitle {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
}

.HomeNavTime {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
}
</style>
