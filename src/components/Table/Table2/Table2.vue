<template>
  <div class="Table2">
    <div class="TableTitle">
      <span>防火墙</span>
    </div>

    <div class="DetailLogo" @click="gotoDetail">
      <img src="../../../../public/logo/detail.png" alt />
    </div>

    <div class="TableTitleSecond">
      <div class="width25">设备</div>
      <div class="width25">接口</div>
      <div class="width20">吞吐量</div>
      <div class="width15">时延</div>
      <div class="width15">详情</div>
    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width25">{{item.name}}</div>
        <div class="itemTitle textColor width25">{{item.title}}</div>
        <div class="itemStaff textColor width20">{{item.staff}}</div>
        <div class="itemStaff textColor width15">{{item.date}}</div>

        <div class="width15">
          <InfoDetail2
            :Name="item.name"
            :Line="item.title"
            :delayTime="item.staff"
            :Max="item.date"
          />
        </div>
      </div>
    </GeminiScrollbar>
  </div>
</template>

<script>
import InfoDetail2 from "../Table2/InfoDetail2";
export default {
  data() {
    return {
      List: [
        {
          name: "华为防火墙",
          title: "802.3ad聚合",
          staff: "25",
          date: "218"
        },
        {
          name: "思科",
          title: "802.3ad聚合",
          staff: "25",
          date: "218"
        },
        {
          name: "深信服",
          title: "802.3ad聚合",
          staff: "25",
          date: "201"
        },
        {
          name: "瞻博",
          title: "802.3ad聚合",
          staff: "25",
          date: "201"
        },
        {
          name: "锐捷",
          title: "802.3ad聚合",
          staff: "25",
          date: "201"
        },
        {
          name: "华为防火墙",
          title: "802.3ad聚合",
          staff: "25",
          date: "218"
        },
        {
          name: "思科",
          title: "802.3ad聚合",
          staff: "25",
          date: "218"
        },
        {
          name: "深信服",
          title: "802.3ad聚合",
          staff: "25",
          date: "201"
        },
        {
          name: "瞻博Juniper",
          title: "802.3ad聚合",
          staff: "25",
          date: "201"
        },
        {
          name: "锐捷",
          title: "802.3ad聚合",
          staff: "25",
          date: "201"
        }
      ]
    };
  },

  methods: {
    gotoDetail() {
      console.log(1);
      this.$router.push({ name: "Table2Detail" });
      // this.$router.push({ path: '/Table2Detail'})
    }
  },

  components: { InfoDetail2 }
};
</script>

<style scoped>
.ScrollBorder {
  height: 140px;
}
.Table2 {
  position: relative;
  margin: 0px 5px 0px 0px;
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
  text-align: left;
}

.DetailLogo {
  position: absolute;
  top: 5px;
  right: 0px;
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
