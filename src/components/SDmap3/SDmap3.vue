<template>
  <div class="Lines3GroupBorder">
    <div class="Lines3Group">
      <div id="SDmap3" style="height:410px;"></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts");
// import "echarts/map/js/china";
import "echarts/map/js/province/shandong";

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("SDmap3"));

    var geoCoordMap = {
      '济南': [117.121225, 36.66466],
      '潍坊': [119.1, 36.62],
      '青岛': [120.3, 36.62],
       '气象局': [120.9, 37.32],
      // '烟台': [120.9, 37.32],
      '淄博': [118.047649, 36.814939],
      '枣庄': [120.889736, 36.976305],
      '东营': [118.66471, 37.434564],
      '济宁': [116.587245, 35.415393],
      '泰安': [117.129063, 36.194968],
      '威海': [122.116394, 37.509691],
      '日照': [119.461208, 35.428588],
      '临沂': [118.326443, 35.065282],
      '德州': [116.307428, 37.453968],
      '聊城': [115.980367, 36.456013],
      '滨州': [118.016974, 37.383542],
      '菏泽': [115.469381, 35.246531]

    };
    var SDData = [
      [
        {
          name: '菏泽',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '滨州',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '聊城',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '德州',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '临沂',
          value: 100
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '日照',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '济南',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '潍坊',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '青岛',
          value: 100
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '淄博',
          value: 100
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '枣庄',
          value:60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '东营',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '济宁',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '泰安',
          value: 60
        },
        {
          name: '气象局'
        }
      ],
      [
        {
          name: '威海',
          value: 60
        },
        {
          name: '气象局'
        }
      ]
    ];
    var convertData = function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push([
            {
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
          ]);
        }
      }
      return res;
    };


    var series = [];
    [["气象局", SDData]].forEach(function(item, i) {
      series.push(
        {
          type: "lines",
          
          zlevel: 2,
          effect: {
            show: true,
            period: 4,
            trailLength: 0.02,
            symbol: "arrow",
            symbolSize: 5
          },
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },

          data: convertData(item[1])
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: "stroke",
            scale: 4
          },
          label: {
            normal: {
              show: true,
              position: "right",
              offset: [5, 0],
              formatter: "{b}"
            },
            emphasis: {
              show: true
            }
          },
          symbol: "circle",
          symbolSize: function(val) {
            return 4 + val[2] / 10;
          },
          itemStyle: {
            normal: {
              show: false,
              color: "#f00"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
          })
        },
        //被攻击点
        {
          type: "scatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: "stroke",
            scale: 4
          },
          label: {
            normal: {
              show: true,
              position: "right",
              //			                offset:[5, 0],
              fontSize:18,
              color: "#00ffff",
              formatter: "{b}",
              textStyle: {
                color: "#00ffff"
              }
            },
            emphasis: {
              show: true
            }
          },
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            normal: {
              show: true,
              color: "#9966cc"
            }
          },
          data: [
            {
              name: item[0],
              value: geoCoordMap[item[0]].concat([100])
            }
          ]
        }
      );
    });

    let option =  {
    //   tooltip: {
        
    // },
    backgroundColor: '#404a59',

//线，原点颜色
    visualMap: {
        min: 60,
        max: 100,
        show: false,
        calculable: true,
        color: ['red', '#00FB00'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: '山东',
        label: {
            emphasis: {
                show: false,
            }
        },
        zoom: 1.3,
        roam: true,
        layoutCenter: ['50%', '53%'],
        layoutSize: "108%",
        itemStyle: {
            normal: {
                color: 'rgba(51, 69, 89, .5)',
                borderColor: 'rgba(100,149,237,1)'
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)'
            }
        }
    },

    series: series
};
    myChart.setOption(option);
  },

  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.Lines3Group {
  /* background-color: red; */
  margin-top: 50px;
  border-radius: 15px;
  overflow: hidden;
}

.Lines3GroupBorder {
  padding: 10px 0px;
}
</style>
