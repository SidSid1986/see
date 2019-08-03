<template>
  <div id="TempGroup">
    <!--创建一个echarts的容器-->
    <div id="Temp" style=" height:200px;"></div>
  </div>
</template>

<script>
var echarts = require("echarts");
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("Temp"));
    // 绘制图表
    myChart.setOption({
      // title: { text: "机房温度" },
      tooltip: {},

      //图例
      legend: {
        x: "left", // 图例的位置
        textStyle: {
          color: "#00eeff" // 图例文字的颜色
        },
        padding: 10,
        selectedMode: true //关闭和打开图
      },

      //调整柱状图边距之类
      grid: {
        left: "2%",
        right: "2%",
        top: "20%",
        bottom: "2%",
        containLabel: true,
        width: "92%",
        height: 110,
        show: true,
        //阴影
        // shadowColor: "white",
        // shadowBlur: 10,  
        // shadowOffsetX:3,
          
       
      },

      xAxis: {
        data: ["机房南", "机房北", "RDA", "风廓线", "气溶胶", "测报"],
        axisLabel: {
          show: true,
          textStyle: {
            color: "#ffffff",
            fontSize: "10"
          },
          //显示全部刻度
          interval: 0
        },

        //刻度线显示不显示和长度
        axisTick: {
          show: false,
          length: 5
        },

        axisLine: {
          lineStyle: {
            color: "#fff",
            width: 0.5 //这里是坐标轴的宽度,可以去掉
          }
        }
        //刻度宽度
        // max:5,
      },
      yAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: "#ffffff",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "#fff"
            // width: 3 //这里是坐标轴的宽度,可以去掉
          }
        }
      },

      series: [
        {
          name: "温度",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
          itemStyle: {
            // 点的颜色。
            color: "#00BDB1"
          },
          // 高亮样式。
          emphasis: {
            itemStyle: {
              // 高亮时点的颜色。
              color: "#04A8CB"
            }
          },
          //柱宽度
          barWidth: 20
        }
      ]
    });
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
#TempGroup {
  margin-top: 40px;
  padding: 20px 10px 0 10px;
}

#Temp {
  background-color: #47607e;
  border-radius: 15px;

}
</style>

