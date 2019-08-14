<template>
  <div class="InfoDetail">
    <el-popover placement="right" width="400" trigger="click">
      <div class="InfoFlexGroup">
        <div class="InfoFlexGroupTitle">{{Name}}</div>
        <div class="InfoFlexGroupContent">
          <div class="InfoFlexGroup1 ItemFlex">
            <div class="width50">接口</div>
            <div class="width50">{{Line}}G</div>
          </div>
          <div class="InfoFlexGroup2 ItemFlex">
            <div class="width50">吞吐量</div>
            <div class="width50">{{delayTime}}毫秒</div>
          </div>
          <div class="InfoFlexGroup3 ItemFlex">
            <div class="width50">时延</div>
            <div class="width50">{{Max}}</div>
          </div>
        </div>
      </div>
      <el-button slot="reference">详情</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},

  props:['Name','Line','delayTime','Max','Protect']
};
</script>

<style scoped>
/deep/ .el-button {
  padding: 5px 10px;
}

.InfoFlexGroupContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 70px;
  /* border:1px solid red; */
}

.InfoFlexGroupTitle {
  font-size: 24px;
  text-align: center;
  border-bottom: 2px solid #47607e;
}

.ItemFlex {
  /* border:1px solid red;  */
  display: flex;
  flex-direction: row;
  /* justify-content:space-around; */
  padding: 5px;
}

.width50{
  width:50%;
  text-align: center;
}
</style>
