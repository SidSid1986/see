<template>
  <div class="LoginPage">
    <el-row type="flex" class="row-bg flexBorder">
      <el-col :span="12">
        <div class="grid-content logoHeight"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content loginBorder">
          <el-form ref="loginForm" :model="form" :rules="rules" class="login-box">
            <div class="login-title">欢迎登录</div>
            <el-form-item class="accountGroup" prop="username">
              <div class="loginName">账号</div>
              <el-input type="text" placeholder="请输入账号" v-model="form.username" />
            </el-form-item>
            <el-form-item prop="password">
              <div class="loginPassword">密码</div>
              <el-input type="password" placeholder="请输入密码" v-model="form.password" />
            </el-form-item>
            <el-form-item>
              <el-button class="loginButton" type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <!-- <el-col :span="2">
        <div class="grid-content"></div>
      </el-col>-->
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {}
};
</script>

<style scoped>
.loginBorder {
  /* border: 1px solid red; */
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25%;
  background-color: #47607E;
  border-radius: 10px;
}

.logoHeight {
  height: 200px;
  border: 1px solid blue;
}

.flexBorder {
  /* border: 2px solid pink; */
  height: 100vh;
  padding: 80px 80px;
}

.accountGroup {
  margin-bottom: 5px;
}

.login-title {
  text-align: center;
  color:#FFFFFF;
  font-weight: bold;
  font-size: 24px;
}

.loginName {
  color:#FFFFFF;
  font-weight: bold;
}

.loginPassword {
  color:#FFFFFF;
  font-weight: bold;
}

.loginButton {
  width:100%;
  background-color: #00BDB1;
  border:1px solid #00BDB1;
  font-weight: bold;
}

.loginButton:hover {
  background-color: #257D91;
  border:1px solid #257D91;
}

.loginButton:focus {
  background-color: #257D91;
  border:1px solid #257D91;
}
</style>
