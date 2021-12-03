<template>
  <div>
    <navigation></navigation>
    <el-container style="padding-top: 80px">
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
      <HospitalDetail @click.native="toHospital"></HospitalDetail>
      <HospitalDetail ></HospitalDetail>
      <HospitalDetail ></HospitalDetail>
      <HospitalDetail ></HospitalDetail>

    </div>
  </div>



</template>

<script>
// import Banner from "../components/Carousel";
import HospitalDetail from "../components/hospital/HospitalDetail";
import Navigation from "@/components/Navigation";
export default {
  name: "Main",
  components: {HospitalDetail,Navigation},
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
    toHospital(){
      this.$router.push('/login')
    }
    ,
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    setSize:function (){
      this.bannerHeight = (400/1920) * this.screenWidth;
    },
    mounted() {
      this.screenWidth = window.innerWidth;
      this.setSize();
    },
    toHospitalDetail(){
      this.$router.push('/hospital')
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
  line-height: 0px;
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