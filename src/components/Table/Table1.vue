<template>
  <div class="Table2">
    <div class="TableTitle">
      <span>虚拟服务器</span>
    </div>

    <div class="TableTitleSecond">
      <div class="width10">端口</div>
      <div class="width10">城市</div>
      <div class="width20">设备类型</div>
      <div class="width20">协议</div>
      <div class="width30">IP地址</div>
      <div class="width10">时间</div>
    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div
        class="ListTable"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width10">{{item.name}}</div>
        <div class="itemTitle textColor width10">{{item.title}}</div>
        <div class="itemStaff textColor width20">{{item.staff}}</div>
        <div class="itemStaff textColor width20">{{item.text}}</div>
        <div class="itemStaff textColor width30">{{item.ip}}</div>
        <div class="itemStaff textColor width10">{{item.date}}</div>
      </div>
    </GeminiScrollbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
         {
          name: "5000",
          title: "上海",
          staff: "数据中心",
          text: "ddp-ddp",
          ip:'168.192.2.5',
          date: "2018"
        },
        
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.Table2 {
  margin: 0px 10px 0px 10px;
  overflow: hidden;
  font-size: 14px;
  height: 230px;
  border-radius: 15px 15px 15px 15px;

  border:3px solid #47607E;
  background-color: #6B6B83;
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

.width10 {
  width: 10%;
  text-align: center;
}

.width20 {
  width: 20%;
  text-align: center;
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
