<script setup lang="ts" >
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue';

let loginForm = reactive({
  username: "",
  password: ""
})
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷项目</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" show-password v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-input-item>
            <el-button class="login_btn" type="primary">GO!</el-button>
          </el-input-item>
        </el-form>
      
      </el-col>

    </el-row>
    
  </div>
</template>

<style lang="scss" scoped>
.login_container{
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg');
  background-size: cover;
  .login_form{
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png');
    background-size: cover;
    padding: 40px;
    padding-top: 10px;
    h1{
      color: white;
      font-size: 40px;
    }
    h2{
      color: white;
      font-size: 20px;
      margin: 20px 0px;
    }
    .login_btn{
      width: 100%;
    }
  }
}
</style>