<template>
  <div class="ScrollViewGroup">
    <vue-seamless-scroll :data="List" class="luckyRoll" :class-option="optionSetting">
      <!-- <el-table :data="List" stripe style="width: 100%">
        <el-table-column prop="name"></el-table-column>
        <el-table-column prop="title"></el-table-column>
        <el-table-column prop="staff"></el-table-column>
      </el-table>-->

      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor">{{item.name}}</div>
        <div class="itemTitle textColor">{{item.title}}</div>
        <div class="itemStaff textColor">{{item.staff}}</div>
      </div>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        {
          name: "1号机房",
          title: "电压正常",
          staff: "1号操作员"
        },
        {
          name: "2号机房",
          title: "电压正常",
          staff: "2号操作员"
        },
        {
          name: "3号机房",
          title: "电压正常",
          staff: "3号操作员"
        },
        {
          name: "4号机房",
          title: "电压正常",
          staff: "4号操作员"
        },
        {
          name: "5号机房",
          title: "电压正常",
          staff: "5号操作员"
        },
        {
          name: "6号机房",
          title: "电压正常",
          staff: "6号操作员"
        },
        {
          name: "7号机房",
          title: "电压正常",
          staff: "7号操作员"
        },
        {
          name: "8号机房",
          title: "电压正常",
          staff: "8号操作员"
        },
        {
          name: "9号机房",
          title: "电压正常",
          staff: "9号操作员"
        },
        {
          name: "10号机房",
          title: "电压正常",
          staff: "10号操作员"
        },
        {
          name: "11号机房",
          title: "电压正常",
          staff: "11号操作员"
        },
        {
          name: "12号机房",
          title: "电压正常",
          staff: "12号操作员"
        },
        {
          name: "13号机房",
          title: "电压正常",
          staff: "13号操作员"
        },
        {
          name: "14号机房",
          title: "电压正常",
          staff: "14号操作员"
        },
        {
          name: "15号机房",
          title: "电压正常",
          staff: "15号操作员"
        },
        {
          name: "16号机房",
          title: "电压正常",
          staff: "16号操作员"
        }
      ]
    };
  },
  components: {},
  computed: {
    optionSetting() {
      return {
        step: 0.5, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      };
    }
  }
};
</script>

<style scoped>
.ScrollViewGroup {
  padding: 0px 10px 10px 10px;
  overflow: hidden;
  font-size: 14px;
}

.luckyRoll {
  background-color: #47607e;
  border-radius: 15px;
  overflow: hidden;
  height: 180px;
}

.ListTable {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 2;
}

.textColor {
  color: #ffffff;
  font-weight: bold;
}

.ListBgcOne {
  background-color: #00bdb1;
}

.ListBgcTwo {
  background-color: #91c7ae;
}
</style>
