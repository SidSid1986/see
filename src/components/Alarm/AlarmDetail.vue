<template>
  <div class="InfoDetail">
    <el-popover placement="right" width="400" trigger="click">
      <div class="InfoFlexGroup">
        <div class="InfoFlexGroupTitle">{{Name}}</div>
        <div class="InfoFlexGroupContent">
          <div class="InfoFlexGroup1 ItemFlex">
            <div class="width50">设备</div>
            <div class="width50">{{Name}}</div>
          </div>
           <div class="InfoFlexGroup3 ItemFlex">
            <div class="width50">编号</div>
            <div class="width50">{{Id}}</div>
          </div>
          <div class="InfoFlexGroup2 ItemFlex">
            <div class="width50">状态</div>
            <div class="width50">
              <span class="bling">异常</span>
            </div>
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

  props:['Name','Id']
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

.bling {
  animation: bling 1.5s linear infinite;
  background-color: #d53a35;
  padding: 2px 5px;
  border-radius: 5px;
  color:#FFFFFF;
  font-weight: bold;
}

@keyframes bling {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes bling {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.width50{
  width:50%;
  text-align: center;
}
</style>
