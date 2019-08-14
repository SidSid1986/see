<template>
  <div class="Table1">
    <div class="TableTitle">
      <span>虚拟服务器</span>
    </div>

    <div class="DetailLogo" @click="gotoDetail">
      <img src="../../../../public/logo/detail.png" alt />
    </div>

    <div class="TableTitleSecond">
      <div class="width25">CPU</div>
      <div class="width20">端口</div>
      <!-- <div class="width20">城市</div> -->
      <div class="width35">IP地址</div>
      <div class="width20">详情</div>

    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div class="ListTable" v-for="(item, index) in List" :key="index">
        <div class="itemName textColor width25">{{item.cpu}}</div>
        <div class="itemTitle textColor width20">{{item.title}}</div>
        <!-- <div class="itemStaff textColor width20">{{item.staff}}</div> -->
        <div class="itemStaff textColor width35">{{item.ip}}</div>

        <div class="width20">
        <InfoDetail1 :Name="item.cpu" :Line="item.title" :delayTime="item.ip" :Max="item.ip" />
      </div>


      </div>
    </GeminiScrollbar>
  </div>
</template>

<script>
import InfoDetail1 from "../Table1/InfoDetial1";
export default {
  data() {
    return {
      List: [
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip: "168.192.2.5"
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip: "168.192.2.5"
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip: "168.192.2.5"
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip: "168.192.2.5"
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip: "168.192.2.5"
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip: "168.192.2.5"
        }
      ]
    };
  },

  methods: {
    gotoDetail() {
      console.log(1);
      this.$router.push({ name: "Table1Detail" });
      // this.$router.push({ path: '/Table2Detail'})
    }
  },
  components: {
    InfoDetail1
  }
};
</script>

<style scoped>
.ScrollBorder {
  height: 140px;
}
.Table1 {
  position: relative;
  margin: 0px 10px 0px 10px;
  overflow: hidden;
  font-size: 14px;
  height: 184px;
  border-radius: 15px 15px 15px 15px;

  border: 3px solid #47607e;
  background-color: #6b6b83;
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
  text-align: center;
}

.DetailLogo {
  position: absolute;
  top: 5px;
  right: 0px;
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

.width40 {
  width: 40%;
  text-align: center;
}
</style>
