<template>
  <div class="Table2">
    <div class="TableTitle">
      <span>监控画面</span>
    </div>

     <!-- <div class="TableTitleSecond">
      <div class="width30">载客汽车(万辆)</div>
      <div class="width30">载货汽车(万辆)</div>
      <div class="width30" >汽车拥有辆(万辆)</div>
      <div class="width10">日期</div>
      
    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div
        class="ListTable"
        
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width30 ">{{item.name}}</div>
        <div class="itemTitle textColor width30">{{item.title}}</div>
        <div class="itemStaff textColor width30">{{item.staff}}</div>
        <div class="itemStaff textColor width10">{{item.date}}</div>

      </div>
    </GeminiScrollbar> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // List: [
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },
      //   {
      //     name: "2.56",
      //     title: "154.56",
      //     staff: "158.54",
      //     date:"2018"
      //   },

        
        
      // ]
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
  height:190px;
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
  background-color: #47607E;
}

.TableTitle {
  text-align: center;
  /* background-color: red; */
  padding: 10px;
  font-size: 16px;
  color:#FFFFFF;
  font-weight: bold;
  border-radius: 15px 15px 0 0;
}

.TableTitle span{
  padding: 5px 15px;
  background: #00BDB1;
  border-radius: 10px;
}

.TableTitleSecond {
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  color:#FFFFFF;
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
