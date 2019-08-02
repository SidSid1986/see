<template>
  <div class="HomePage">
    <Nav />

    <div class="HomeFlex">
      <div class="FirstLineLeft">
        <Temp />
        <RH />
      </div>
      <div class="FirstLineMiddle">
        <Lines3 />
      </div>
      <div class="FirstLineRight">
        <UPS/>
        <!-- <div>机房2</div> -->
      </div>
    </div>

    <!-- 底部一行 -->
    <!-- <div>
      <el-row class="row-bg HomeNav">
        <el-col :span="6">
          <div>机房1</div>
        </el-col>
        <el-col :span="6">
          <div>机房1</div>
        </el-col>
        <el-col :span="6">
          <div>机房1</div>
        </el-col>
        <el-col :span="6">
          <div>机房1</div>
        </el-col>
      </el-row>
    </div>-->
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Temp from "../components/Temp";
import RH from "../components/RH";
import Lines from "../components/Lines/Lines";
import Lines2 from "../components/Lines2/Lines2";
import Lines3 from "../components/Lines3/Lines3";

import UPS from '../components/UPS.vue';

export default {
  data() {
    return {};
  },
  components: {
    Nav,
    Temp,
    RH,
    Lines,
    Lines2,
    Lines3,
    UPS
  }
};
</script>

<style scoped>
.HomeFlex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.FirstLineLeft {
  width: 25%;
  padding: 20px 10px;
}

.FirstLineMiddle {
  width: 45%;
}

.FirstLineRight {
  width: 30%;
  padding: 20px 10px;
}
</style>
