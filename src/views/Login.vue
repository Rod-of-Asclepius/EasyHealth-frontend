<template>
  <div :style="{
     backgroundImage:imgUrl ,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     backgroundPosition:'center center',
     position:'fixed',
     width: '100%',
     height: '100%',
     objectFit: 'cover'
  }">
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="角色" prop="role">
        <el-radio-group v-model="form.role">
          <el-radio label="1">患者</el-radio>
          <el-radio label="2">医生</el-radio>
        </el-radio-group>
      </el-form-item>
      <div class="btn-group">
        <el-button type="primary" @click="onSubmit('loginForm')">登录</el-button>
        <el-button @click="goRegister">注册</el-button>
      </div>
    </el-form>

    <el-dialog
        title="温馨提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose" append-to-body>
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  // import axios from 'axios'
  import {checkLogin} from '../network/login'
  export  default {
    name:"Login",
    data(){
      return {
        imgUrl:'url(' + require('../assets/img/bg.jpg') + ')',
        form:{
          username: '',
          password: '',
          role: '1'
        },
        //表单验证，需要再el-form-item 元素中增加prop属性
        rules:{
          username: [
            {required:true,message:'账号不能为空',trigger:'blur'}
          ],
          password: [
            {required: true,message: '密码不能为空',trigger:'blur'}
          ],
          role: [
            {required: true,message: '请选择角色',trigger:'blur'}
          ]
        },
        //对话框显示和隐藏
        dialogVisible:false
      }
    },
    methods:{
      onSubmit(formName) {
        //为表单绑定验证功能
        console.log(checkLogin(this.form));
        this.$refs[formName].validate((valid) =>{
          if (valid){
            //账号密码核对
            checkLogin(this.form).then(res => {
              console.log(res.data)
              //弹出侧边通知窗
              this.$notify({
                title: '登录成功',
                message: '欢迎回来~',
                type: 'success'
              });
              //使用 vue-router路由到指定页面，该方式称之为编程式导航
              this.$router.push("/user/index");
            })
            .catch(err => {
              console.log(err)
              this.$notify({
                title: '登录失败',
                message: '请核对账号密码~',
                type: 'error'
              });
            })
          } else {
            this.dialogVisible = true;
            return false;
          }
        });
      },
      goRegister() {
        this.$router.push("/register");
      }
    }
  }
</script>

<style scoped>
  .login-box{
    background-color: white;
    opacity: 0.85 ;
    border: 1px solid #DCDFE6;
    width: 350px;
    margin:120px 660px;
    padding:25px 35px 25px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow:0 0 25px #909399;
  }

  .login-title{
    text-align:center;
    margin:0 auto 30px auto;
    color:#303133;
  }

  .btn-group {
    text-align:center;
    margin:0 auto 5px auto;
    align-items:center;
  }
</style>