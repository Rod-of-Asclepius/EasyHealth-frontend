<template>
  <div class="hospitaldetail" v-bind:class="{active:active}" @mouseenter="enter()" @mouseleave="leave()">
  <el-container>
    <el-header style="height: 0px"></el-header>
    <el-container>
      <el-container>
        <el-main ><a style="font-size: 14px;color: #333">浙江大学医学院附属第二医院</a></el-main>
        <el-footer>
          <img src="../../assets/img/main/level.png">
          <a style="font-size: 12px;font-family: Helvetica;color: #999">三级甲等</a>
        </el-footer>
      </el-container>
      <el-aside width="80px">
        <img src="../../assets/img/main/Z2.png">
      </el-aside>
    </el-container>
  </el-container>
  </div>
</template>

<script>
export default {
  name: "HospitalDetail",
  data(){
    return{
      active: false
    }
  },
  methods:{
    enter(){
      this.active = true
    },
    leave(){
      this.active = false
    }
  }
}
</script>

<style scoped>
.active{
  font-weight: bold;
}
.hospitaldetail{
  height: 98px;
  width: 440px;
  display: inline-block;
  cursor: pointer
}
.el-footer{
  height: 0px;
}
</style>