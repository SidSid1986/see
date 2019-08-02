<template>
  <div id="UPSGroup">
    <!--创建一个echarts的容器-->
    <div id="UPS" style="width:280px; height:160px;"></div>
  </div>
</template>

<script>
let echarts = require("echarts");
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("UPS"));
    let weatherIcons = {
      Sunny: "./data/asset/img/weather/sunny_128.png",
      Cloudy: "./data/asset/img/weather/cloudy_128.png",
      Showers: "./data/asset/img/weather/showers_128.png"
    };
    // 绘制图表
    myChart.setOption({
      backgroundColor: "#47607E",

      title: {
        text: "Customized Pie",
        left: "center",
        top: 20,
        textStyle: {
          color: "#ccc"
        }
      },

      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 274, name: "联盟广告" },
            { value: 235, name: "视频广告" },
            { value: 400, name: "搜索引擎" }
          ].sort(function(a, b) {
            return a.value - b.value;
          }),
          roseType: "radius",
          label: {
            normal: {
              textStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: "rgba(255, 255, 255, 0.3)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: "#c23531",
              shadowBlur: 200,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },

          animationType: "scale",
          animationEasing: "elasticOut",
          animationDelay: function(idx) {
            return Math.random() * 200;
          }
        }
      ]
    });
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
#UPSGroup {
  margin-top: 40px;
}

#UPS {
  /* background-color: #47607e; */
  background-color: #47607e;

  border-radius: 15px;
  margin-bottom: 30px;
  overflow: hidden;
}
</style>

