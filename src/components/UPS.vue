<template>
  <div id="UPSGroup">
    <!--创建一个echarts的容器-->
    <div id="UPS" style="height:220px;"></div>
    <div class="UPSTitle">UPS电压</div>
    <div class="currentUPS">单位KVA</div>
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
          detail: { formatter: "{value}", fontSize: 14,color:"#C85060" },
          data: [
            //起始温度
            // { value: 0, name: "温度" },
            { value: 0, },

            ],
           min: 0,                 // 最小的数据值,默认 0 。映射到 minAngle。
           max: 200,  
           splitNumber:5,
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

    this.currentNumber = option.series[0].data[0].value
  },
  data() {
    return {
      dataNumber:[156,120,200,178,88],
      currentNumber:''
    };
  },
  methods: {
   
  },
  components: {
   
  },

  computed: {
    // currentNumber(){
    //   return this.dataNumber[Math.floor((Math.random()*this.dataNumber.length))]
    // }
  },
};
</script>

<style scoped>
#UPSGroup {
  /* margin-top: 40px; */
  position: relative;
  padding: 0px 10px 0 10px;
}

#UPS {
  /* background-color: #47607e; */
  background-color: #47607e;
  margin-top: 60px;
  border-radius: 15px;
  margin-bottom: 10px;
  overflow: hidden;
  
}

.UPSTitle {
  position: absolute;
  top:5px;
  left:15px;
  font-size: 15px;
  font-weight: bold;
  color:#FFFFFF;
  padding: 5px 10px;
  background-color: #00BDB1;
  border-radius: 10px
}

.currentUPS{
  position: absolute;
  top:5px;
  right:15px;
  font-size: 15px;
  font-weight: bold;
  color:#FFFFFF;
  padding: 5px 10px;
  background-color: #00BDB1;
  border-radius: 10px
}
</style>

