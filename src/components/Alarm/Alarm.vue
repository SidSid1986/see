<template>
  <div class="Alarm">
    <div class="TableTitle">
      <span>预警信息</span>
    </div>

    <!-- <div class="DetailLogo" @click="gotoDetail">
      <img src="../../../../public/logo/detail.png" alt="">
    </div>-->

    <div class="TableTitleSecond">
      <div class="width25">设备</div>
      <div class="width25">编号</div>
      <div class="width25">状态</div>
      <span class="width25">详情</span>
    </div>

    <!-- <GeminiScrollbar :autoshow="true" class="ScrollBorder"> -->
      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="item.id"
      >
        <div class="itemName textColor width25">{{item.name}}</div>
        <div class="itemName textColor width25">{{item.id}}</div>
        <div class="itemName textColor width25 ">
          <span class="bling">异常</span>
        </div>

        <div class="width25">
          <InfoDetail :Name="item.name" :Id="item.id" />
        </div>
      </div>
    <!-- </GeminiScrollbar> -->
  </div>
</template>

<script>
import InfoDetail from "./AlarmDetail";

export default {
  data() {
    return {
      Flag: "",
      List: [
        {
          id: 1,
          name: "h3c  s6800",
          status: false
        },
        {
          id: 2,
          name: "HW s5720",
          status: false
        },
        {
          id: 3,
          name: "H3c s5500",
          status: false
        },
        {
          id: 4,
          name: "思科",
          status: false
        },
        {
          id: 5,
          name: "瞻博",
          status: false
        },

        {
          id: 6,
          name: "H3c s5500",
          status: false
        },
        {
          id: 7,
          name: "思科",
          status: false
        }
      ]
    };
  },
  components: {
    InfoDetail
    },

  methods: {
    showFlag(id) {
      if (this.Flag == id) {
        this.Flag = false;
      } else {
        this.Flag = id;
      }
    }
  },

  computed: {}
};
</script>

<style scoped>
.ScrollBorder {
  height: 140px;
}

.Alarm {
  /* margin: 60px 10px 10px 10px; */
  /* padding: 0px 10px; */
  position: relative;
  overflow: hidden;
  font-size: 14px;
  /* height: 190px; */
  /* border-radius: 15px 15px 15px 15px; */

  /* border:3px solid #47607E; */
  background-color: #47607e;
}

.ListTable {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 2.5;
  position: relative;
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
  background: #d53a35;
  border-radius: 10px;

  font-size: 30px;
}

.DetailLogo {
  position: absolute;
  top: 5px;
  right: 5px;
}

.TableTitleSecond {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #ffffff;
}

.info {
  cursor: pointer;
}

.info:hover {
  color: #cccccc;
}
.propInfo {
  width: 40px;
  height: 40px;
  background-color: red;
  /* position:absolute; */
  /* top:10px;
  left:20px;
  z-index:999; */
}

.bling {
  animation: bling 1.5s linear infinite;
  background-color: #d53a35;
  padding: 2px 5px;
  border-radius: 5px;
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
