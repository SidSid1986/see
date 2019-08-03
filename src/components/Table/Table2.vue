<template>
  <div class="Table2">
    <div class="TableTitle">
      <span>防火墙</span>
    </div>

     <div class="TableTitleSecond">
      <div class="width25">运营数(辆)</div>
      <div class="width30">线路总长度(公里)</div>
      <div class="width30" >客运总量(万人次)</div>
      <div class="width15">日期</div>
      
    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width25 ">{{item.name}}</div>
        <div class="itemTitle textColor width30">{{item.title}}</div>
        <div class="itemStaff textColor width30">{{item.staff}}</div>
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
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },
        {
          name: "58544",
          title: "20252",
          staff: "252528",
          date:"2018"
        },

        
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.Table2 {
  margin: 0px 5px 0px 5px;
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
