<template>
  <div class="Nav">
    <el-row class="row-bg HomeNav">
      <el-col :span="6"></el-col>
      <el-col :span="12">
        <div class="HomeNavTitle">监控和网络中心</div>
      </el-col>
      <el-col :span="6">
        <div class="HomeNavTime">{2019-07-29}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.Nav {
  /* position: fixed; */
}

.HomeNav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height:50px;
  background-color: #606C78;
  box-shadow: 0px 0px 2px 3px #4D5D6C;
  position: fixed;
  width:100%;
}

.HomeNavTitle {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color:#FFFFFF;
  font-weight: bold;
  font-size: 30px;
  
}

.HomeNavTime {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color:#FFFFFF;
  font-weight: bold;
}

</style>
