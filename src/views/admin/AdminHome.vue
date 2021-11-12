<template>
    <el-container>
      <el-aside width="220px">
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <NavMenu />
        </el-header>
        <el-main style="background-color: #fcfcfc"></el-main>
      </el-container>
    </el-container>
</template>

<script>
  import NavMenu from "../../components/admin/NavMenu";
  import SideBar from "../../components/admin/SideBar";

  export default {
    name: "UserHome",
    components: { NavMenu, SideBar }
  }
</script>

<style scoped>
  * {
    padding: 0px;
    margin: 0px
  }
  .el-container {
    height: 650px;
  }
</style>