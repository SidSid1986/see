<template>
  <div id="UPSGroup">
    <!--创建一个echarts的容器-->
    <div id="UPS" style="height:220px;"></div>
    <div class="UPSTitle">UPS电源温度</div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("UPS"));

    // 绘制图表
    let option = {
      tooltip: {
        // formatter: "{a} <br/>{b} : {c}℃"
      },
      toolbox: {
        feature: {
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: "UPS温度",
          type: "gauge",
          detail: { formatter: "{value}℃", fontSize: 18,color:"#C85060" },
          data: [
            //起始温度
            // { value: 0, name: "温度" },
            { value: 0, },

            ],
          title: {
            textStyle: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: "bolder",
              fontSize: 15,
              fontStyle: "italic",
              color: "#C85060"
            }
          }
        }
      ]
    };
    myChart.setOption(option);

    setInterval(() =>{
      option.series[0].data[0].value = this.dataNumber[Math.floor((Math.random()*this.dataNumber.length))];//这里是传过来的温度
      myChart.setOption(option, true);
    }, 2000);
  },
  data() {
    return {
      dataNumber:[56,12,25,78,88],
    };
  },
  methods: {
   
  },
  components: {
   
  },

  computed: {
  },
};
</script>

<style scoped>
#UPSGroup {
  margin-top: 40px;
  position: relative;
  padding: 20px 10px 0 10px;
}

#UPS {
  /* background-color: #47607e; */
  background-color: #47607e;
  
  border-radius: 15px;
  margin-bottom: 10px;
  overflow: hidden;
  
}

.UPSTitle {
  position: absolute;
  top:25px;
  left:20px;
  font-size: 15px;
  font-weight: bold;
  color:#FFFFFF;
  padding: 5px 10px;
  background-color: #00BDB1;
  border-radius: 10px
}
</style>

