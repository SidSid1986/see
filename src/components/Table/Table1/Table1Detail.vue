<template>
  <div class="Table1">
    <div class="TableTitle">
      <span>虚拟服务器</span>
    </div>

    <div class="TableTitleSecond">
      <div class="width25">CPU</div>
      <div class="width25">端口</div>
      <div class="width25">城市</div>
      <div class="width25">IP地址</div>      
    </div>

    
      <div
        class="ListTable"
        v-for="(item, index) in List"
        :key="index"
      >
        <div class="itemName textColor width25">{{item.cpu}}</div>
        <div class="itemTitle textColor width25">{{item.title}}</div>
        <div class="itemStaff textColor width25">{{item.staff}}</div>
        <div class="itemStaff textColor width25">{{item.ip}}</div>
      </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip:'168.192.2.5',
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip:'168.192.2.5',
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip:'168.192.2.5',
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip:'168.192.2.5',
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip:'168.192.2.5',
        },
        {
          cpu: "I7-9900",
          title: "8080",
          staff: "呼和浩特",
          ip:'168.192.2.5',
        }       
      ]
    };
  },

  methods: {
   
  },
  components: {}
};
</script>

<style scoped>
.Table1 {
  position: relative;
  /* margin: 0px 10px 0px 10px; */
  /* overflow: hidden; */
  font-size: 14px;
  height: 184px;
  border-radius: 15px 15px 15px 15px;

  /* border:3px solid #47607E; */
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
  font-size: 16px;
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
  justify-content:space-around;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
}

.DetailLogo {
  position:absolute;
  top: 5px;
  right:5px;
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
