<template>
  <div class="Table2">
    <div class="TableTitle">
      <span>核心交换</span>
    </div>

    <div class="TableTitleSecond">
      <div class="width25">设备</div>
      <div class="width10">接口</div>
      <div class="width15">时延</div>
      <div class="width20">负载</div>
      <div class="width15">防雷等级</div>
      <span class="width15">详情</span>
    </div>

    <GeminiScrollbar :autoshow="true" class="ScrollBorder">
      <div
        class="ListTable"
        :class="[index%2==1 ?'ListBgcOne':'ListBgcTwo']"
        v-for="(item, index) in List"
        :key="item.id"
      >
        <div class="itemName textColor width25">{{item.name}}</div>
        <div class="itemTitle textColor width10">{{item.title}}</div>
        <div class="itemStaff textColor width15">{{item.staff}}</div>
        <div class="itemStaff textColor width20">{{item.text}}</div>
        <div class="itemStaff textColor width15">{{item.date}}</div>
        <span  @click="showFlag(item.id)" class="itemStaff textColor width15 info">详情</span>
        <div class="propInfo" v-if="Flag==item.id">123</div>
      </div>
    </GeminiScrollbar>
  </div>
</template>

<script>
export default {
  data() {
   
    return {
      Flag:'',
      List: [
        {
          id:1,
          name: "h3c  s6800",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:2,
          name: "HW s5720",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:3,
          name: "H3c s5500",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:4,
          name: "H3c s3328",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:5,
          name: "H3c s5120",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:6,
          name: "H3c s5120",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:7,
          name: "H3c s5120",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        },
        {
          id:8,
          name: "H3c s5120",
          title: "40G",
          staff: "2.8",
          text: "96%",
          date: "4kv"
        }
      ]
    };
  },
  components: {},

  methods: {
   showFlag(id){

     if(this.Flag == id ){
       this.Flag = false
     }else {
        this.Flag = id;
     }
    
   
    }
  },

  computed: {
    
  },
};
</script>

<style scoped>
.Table2 {
  margin: 0px 0px 0px 5px;
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
  background: #00bdb1;
  border-radius: 10px;
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
  color:#cccccc;
}
.propInfo {
  position:absolute;
  top:10px;
  left:20px;
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
