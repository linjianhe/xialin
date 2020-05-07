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
            <el-button type="primary" style="width:100%;" class="login-btn" @click="login">登 录
            </el-button>
        </el-form-item>
        <div class="form-bottom">
          <span class="form-register">立即注册</span>
          <span class="form-forgetPass">忘记密码</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          ruleForm: {
            account: 'linjianhel',
            password: '123456'
          },
          rules: {

          }
        }
      },
      methods: {
        login() {
          let data = {
            name: this.ruleForm.account,
            pass: this.ruleForm.password
          }
          this.$store.dispatch('login/Login', data).then((res) => {
            console.log(res)
            this.$store.commit('user/SET_USERINFO', sessionStorage.getItem('userInfo'))
            if (res.code === 200) {
              // 跳到目标页
              if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect)
              } else {
                this.$router.push('/home')
              }
            } else {
              // 用户被冻结强制跳到信息中转站页
              console.log('sdasdasd')
            }
        }).catch(err => {
            this.$message({
                type: 'error',
                message: err
            })
        })
        }
      }
  }
</script>

<style lang="less">
.container{
  width: 100%;
  height: 100%;
  min-width: 450px;
  position: relative;
  background: url("../../assets/img/login_bg.jpg") no-repeat fixed;
  background-size: 100% 100%;
  box-sizing:border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login{
  width: 350px;
  padding: 10px 50px 30px;
  position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  z-index: 11;
  border:1px solid #aaa;
  border-radius: 6px;
  box-shadow:  0 0 8px 6px rgba(0,0,0,.5);
  &:hover {
    // background: inherit;
    // transition: 0.2s ease;
    // transition-delay: 0.3s;
  }
}
.demo-ruleForm{
  .title {
    color: #ffffff;
  }
  .el-input__inner {
    background: none;
    color: #fff;
  }
  .login-btn {
    background-color: #fff;
    border: none;
    color: #537E0D;
    font-size: 16px;
    border: 1px solid #fff;
    &:hover {
      border: 1px solid #409EFF;
    }
  }
  .form-bottom {
    color: #fff;
    display: flex;
    font-size: 12px;
    .form-register {
      margin-right: auto;
      &:hover {
        cursor: pointer;
      }
    }
    .form-forgetPass {
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.container:after{
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: inherit;
  filter: blur(3px);
  z-index: 1;
}
</style>
