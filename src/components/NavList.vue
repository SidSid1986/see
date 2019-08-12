<template>
  <div class="NavList">
    <el-cascader
      placeholder="菜单"
      expand-trigger="hover"
      :options="options"
      v-model="selectedOptions2"
      @change="handleChange"
      :clearable="true"
      
    ></el-cascader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "xinxiwangluo",
          label: "信息网络",
          children: [
            {
              value: "shejiyuanze",
              label: "网络",
              
            },
            {
              value: "jiaohuanji",
              label: "交换机",
            },
            {
              value: "fanghuoqiang",
              label: "防火墙",
            },
            {
              value: "baojing",
              label: "报警",
            }
          ]
        },
        {
          value: "fuwulei",
          label: "服务类",
          children: [
            {
              value: "xuniyun",
              label: "虚拟云服务器",
            },
            {
              value: "zhengwuyun",
              label: "政务云服务器",
              
            },
            {
              value: "xuniji",
              label: "虚拟机",
            },
            {
              value: "baojing",
              label: "报警",
            },
          ]
        },
        {
          value: "huandongjiankong",
          label: "环动监控",
          children: [
            {
              value: "wendu",
              label: "温度"
            },
            {
              value: "shidu",
              label: "湿度"
            },
            {
              value: "shuijin",
              label: "水浸"
            },
            {
              value: "baojing",
              label: "报警"
            }
          ]
        },
        {
          value: "shipin",
          label: "视频",
          children: [
            {
              value: "jiema",
              label: "解码"
            },
            {
              value: "baojing",
              label: "报警"
            },
          ]
        },
        {
          value: "xitong",
          label: "系统",
          children: [
            {
              value: "chakan",
              label: "查看"
            },
            {
              value: "shanchu",
              label: "删除"
            },
            {
              value: "tianjia",
              label: "添加"
            },
            {
              value: "xiugai",
              label: "修改"
            }
          ]
        },
        {
          value: "rizhi",
          label: "日志",
          children: [
            {
              value: "wangluo",
              label: "网络"
            },
            {
              value: "fuwu",
              label: "服务"
            },
            {
              value: "huandong",
              label: "环动"
            },
            {
              value: "shipin",
              label: "视频"
            },

          ]
        },
        {
          value: "denglu",
          label: "登录",
        },

      ],
      selectedOptions: [],
      selectedOptions2: []
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>

<style>
.NavList {
  padding: 5px 10px;
}

/deep/.el-input__inner {
  background-color: #47607E;
  border: 1px solid #47607E;
}

.el-cascader .el-input .el-input__inner:focus, .el-cascader .el-input.is-focus .el-input__inner {
  border-color:  #00bdb1;
}

/deep/.el-cascader:not(.is-disabled):hover .el-input__inner {
  border-color:#FFFFFF;
}

.el-cascader-menu__wrap.el-scrollbar__wrap {
    height:267px;
}


</style>
