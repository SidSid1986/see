<template>
  <div class="Table2">
    <div class="TableTitle">
      <span>核心交换</span>
    </div>

    <div class="TableTitleSecond">
      <div class="width20">省内(万件)</div>
      <div class="width20">省外(万件)</div>
      <div class="width20">省外(万件)</div>
      <div class="width25">总业务量(万件)</div>
      <div class="width15">日期</div>
    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width20">{{item.name}}</div>
        <div class="itemTitle textColor width20">{{item.title}}</div>
        <div class="itemStaff textColor width20">{{item.staff}}</div>
        <div class="itemStaff textColor width25">{{item.text}}</div>
        <div class="itemStaff textColor width15">{{item.date}}</div>
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
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        },
        {
          name: "58335.44",
          title: "20252.9",
          staff: "252.8",
          text: "201585.68",
          date: "2018"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.Table2 {
  margin: 0px 0px 0px 5px;
  overflow: hidden;
  font-size: 14px;
  height: 230px;
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
