<template>
  <div id="UPSGroup">
    <!--创建一个echarts的容器-->
    <div id="UPS2" style="height:220px;"></div>
    <div class="UPSTitle">UPS电压</div>
    <div class="currentUPS">单位KVA</div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("UPS2"));

    // 绘制图表
    let option = {
      backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        // name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: [{
            value: 50,
            // name: '完成率',
        }]

    }]
      
    };
    myChart.setOption(option);

    setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
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

#UPS2 {
  /* background-color: #47607e; */
  background-color: #47607e;
  
  margin-top: 60px;
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

.currentUPS{
  position: absolute;
  top:25px;
  right:20px;
  font-size: 15px;
  font-weight: bold;
  color:#FFFFFF;
  padding: 5px 10px;
  background-color: #00BDB1;
  border-radius: 10px
}
</style>

