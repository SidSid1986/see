<template>
  <div class="Nav">
    <el-row class="row-bg HomeNav">
      <el-col :span="6">
        <NavList />
      </el-col>
      <el-col :span="12">
        <div class="HomeNavTitle">气象监控和网络中心</div>
      </el-col>
      <el-col :span="2" >
        <img @click="gotoAlarm" class="HomeNavLogo" src="../assets/alarm.png" alt="">
      </el-col>
      <!-- <Alarm class="Alarm"/> -->
     
      <el-col :span="3">
        <div class="HomeNavTime">{{time}}</div>
      </el-col>

      <el-col :span="2">
        <div class="HomeNavLogin" @click="gotoLogin">
          <span>登录</span>
        </div>
      </el-col>
    </el-row>
     
  </div>
</template>

<script>
import NavList from "@/components/NavList";
import Alarm from '@/components/Alarm/Alarm'

export default {
  data() {
    return {
      time: ""
    };
  },

  mounted() {
    // this.time =  this.moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

    setInterval(() => {
      this.time = this.moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },

  components: {
    NavList,
    Alarm
  },
  computed: {
    newDate() {
      return 1;
    }
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },

    gotoAlarm(){
      this.$router.push({name:"Alarm"})
    }
  }
};
</script>

<style scoped>
.Nav {
  position: fixed;
  width: 100%;
  z-index: 9999999;
}

.HomeNav {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 50px;
  background-color: #606c78;
  box-shadow: 0px 0px 2px 3px #4d5d6c;
}

.HomeNavTitle {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
}

.HomeNavTime {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
}

.HomeNavLogin {
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #ffffff;
  font-weight: bold;
}

.HomeNavLogin span {
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #00bdb1;
}

.HomeNavLogo {
  text-align: center;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  animation: bling 1.5s linear infinite;
  
}

@keyframes bling {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes bling {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.Alarm {
  position: absolute;
  width: 350px;
  height:200px;
  top:0px;
  right:220px;
  
}
</style>
