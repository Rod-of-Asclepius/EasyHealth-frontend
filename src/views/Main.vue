<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2"><div class="grid-content bg-white"></div></el-col>
      <el-col :span="10">
        <div class="grid-content bg-white" style="text-align: center">
          <img class="imgstyle" src="../assets/img/main/icon.png">
          <a class="textstyle" >浙江省预约挂号平台</a>
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
            <el-menu-item index="2" >帮助中心</el-menu-item>
            <el-menu-item index="3"><a @click="tologin" target="_blank">登录/注册</a></el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>

    <el-container>
      <el-aside width="200px"> </el-aside>
      <el-container>
        <el-main>
          <div id="banner">
            <el-carousel :height="bannerHeight+'px'">
              <el-carousel-item v-for="item in img_list" :key="item">
                <img :src="item" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-main>
      </el-container>
      <el-aside width="200px"></el-aside>
    </el-container>
    <div class="choices" style="margin-left: 200px">
      <div class="area">
        <span class="title1">等级：</span>
        <span class="content1" v-for="level in lv" :key="level">
          {{level}}
        </span>
      </div>

      <div class="address">
        <span class="title2">地区：</span>
        <span class="content2" v-for="address in as" :key="address">
          {{address}}
        </span>
      </div>
    </div>
  </div>



</template>

<script>
import Banner from "../components/Carousel";
export default {
  name: "Main",
  components: Banner,
  data() {
    return {
      img_list:[require("../assets/img/main/img.png"),require("../assets/img/main/img1.png"),require("../assets/img/main/img2.png")],
      bannerHeight:300,
      screenWidth:0,

      activeIndex: '1',
      activeIndex2: '1',

      options: [],
      value: [],
      list: [],
      loading: false,
      states: ['浙江大学医学院附属第二医院','杭州市人民医院','杭州市第四人民医院'],

      lv:['全部','三级医院','二级医院','一级医院'],
      as:['全部','拱墅区','余杭区','滨江区']
    }
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: `${item}`, label: `${item}` };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    tologin(){
      this.$router.push('/login')
    },
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    setSize:function (){
      this.bannerHeight = (400/1920) * this.screenWidth;
    },
    mounted() {
      this.screenWidth = window.innerWidth;
      this.setSize();
    }
  }
}
</script>

<style scoped>
.content2 {
  margin-left: 26px;
  color: #666;
}
.content1 {
  margin-left: 26px;
  color: #666;
}
.address{
  margin-top: 10px;
}
.area{
  margin-top: 50px;
}
.title2{
  color: #999;
}
.title1{
  color: #999;
}
.el-carousel__item h3{
  color:#475699;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0px;
}
.el-carousel__item:nth-child(2n+1){
  background-color: #d3dce6;
}

.textstyle{
  font-family: Helvetica Neue;
  font-size: 26px;
  line-height: 80px;
  float: left
}
.imgstyle{
  float: left;
  margin-left: 150px
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 0px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-white {
  background: white;
}

.grid-content {
  border-radius: 4px;
  min-height: 40px;
}
</style>