<template>
  <div class="Table3">
    
      <div class="TableTitle">
        <span>核心交换</span>
      </div>

      <div class="TableTitleSecond">
        <div class="width20">设备</div>
        <div class="width20">接口</div>
        <div class="width20">时延</div>
        <div class="width20">负载</div>
        <div class="width20">防雷等级</div>
      </div>

      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width20">{{item.name}}</div>
        <div class="itemTitle textColor width20">{{item.line}}</div>
        <div class="itemStaff textColor width20">{{item.delayTime}}</div>
        <div class="itemStaff textColor width20">{{item.max}}</div>
        <div class="itemStaff textColor width20">{{item.protect}}</div>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        {
          id: 1,
          name: "h3c  s6800",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 2,
          name: "HW s5720",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 3,
          name: "H3c s5500",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 4,
          name: "H3c s3328",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 5,
          name: "H3c s5120",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 6,
          name: "H3c s5120",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 7,
          name: "H3c s5120",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        },
        {
          id: 8,
          name: "H3c s5120",
          line: "40G",
          delayTime: "2.8",
          max: "96%",
          protect: "4kv"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.Table3 {
  font-size: 14px;
  height: 190px;
  /* border:3px solid #47607E; */
  background-color: #47607e;
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
  font-size: 40px;
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

.DetailLogo {
  position: absolute;
  top: 5px;
  right: 5px;
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

.width20 {
  width: 20%;
  text-align: center;
}
</style>
