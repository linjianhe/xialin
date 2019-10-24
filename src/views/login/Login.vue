<template>
  <div class="container">
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
            class="demo-ruleForm" >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号" ></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>

        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;">登录
            </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  
</template>

<script>
  export default {
      data(){
        return{
          ruleForm:{
            account:'',
            password:''
          },
          rules:{

          }
        }
      },
      methods:{
      }
  }
</script>

<style>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background: url("../../assets/img/bg.jpg") center/cover fixed;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}
.login{
  width: 350px;
  margin: 200px auto;
  padding: 50px;
  z-index: 10;
  border:1px solid #ccc;
  transition: 0.2s ease;
  border-radius: 4px;
  transition-delay: 0.3s;
}
.demo-ruleForm{
  position: relative;
  width: 350px;
  padding: 25px 25px 30px 25px;
  box-sizing: border-box;
  overflow: hidden;
}
.login::before{
  content: "";
  position: absolute;
  top: -10px;
  left: -10px;
  background: url("../../assets/img/bg.jpg") center/cover fixed;
  /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
  filter: blur(5px) */
} 
</style>