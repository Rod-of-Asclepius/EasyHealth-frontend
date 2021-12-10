<template>
  <el-aside style="width:187px;position: fixed;">
    <div class="left-nav nav" style="background-color: white">
      <div class="nav-item "><span class="v-link clickable dark">预约挂号 </span>
      </div>
      <div class="nav-item "><span class="v-link clickable dark">医院详情 </span>
      </div>
      <div class="nav-item "><span class="v-link clickable dark">预约须知 </span>
      </div>
      <div class="nav-item "><span class="v-link clickable dark">停诊信息 </span>
      </div>
      <div class="nav-item selected"><span class="v-link selected dark"><!---->
        <!----> 查询/取消 </span></div>
    </div>
  </el-aside>
</template>

<script>
export default {
  name: "HospitalAside"
}
</script>

<style scoped>
.el-aside {
  margin-left: 80px;
  background-color: #f4f9ff;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  margin-top: 70px;
  position: fixed;
}

.nav-item {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 200px;
  height: 70px;
  position: relative;
  padding-left: 20px;
}
.left-nav nav {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: sticky;
  top: 14px;
  float: left;

}
</style>