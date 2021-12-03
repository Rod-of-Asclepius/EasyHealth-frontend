<template>
<div class="navigation"  style="position:fixed ;width: 1600px ;height: 80px;z-index: 9999;background:#ffffff;box-shadow: #666 0px 0px 10px">
  <el-row :gutter="20">
    <el-col :span="2"><div class="grid-content bg-white"></div></el-col>
    <el-col :span="10">
      <div class="grid-content bg-white" style="text-align: center">
        <img class="imgstyle" src="../assets/img/main/icon.png" >
        <a class="textstyle" @click="jump">浙江省预约挂号平台</a>


      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple" style="margin-left: 100px">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" >
            <el-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="点击输入医院名称"
                :remote-method="remoteMethod"
                :loading="loading">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-menu-item>
          <el-menu-item index="2" ><el-button type="text" icon="el-icon-search" size="small" @click="toHospitalDetail">搜索</el-button></el-menu-item>
          <el-menu-item index="3" >帮助中心</el-menu-item>
          <el-menu-item index="4"><a @click="tologin" target="_blank">登录/注册</a></el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "Navigation",
  data(){
    return{

    }
  },
  methods:{
    jump(){
      this.$router.push('/main')
    },
    toHospitalDetail(){
      this.$router.push('/Hospital')
    },
    tologin(){
      this.$router.push('/login')
    },
  }
}
</script>

<style scoped>
.navigation{

}
</style>