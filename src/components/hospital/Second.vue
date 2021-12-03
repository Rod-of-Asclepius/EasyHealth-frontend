<template>
  <div class="home">
    <el-container>
      <el-header></el-header>
      <el-container>
        <HospitalAside></HospitalAside>
        <el-aside style="color: #f4f9ff;height: 440px;width:187px;margin-left: 307px">
          <a>选择科室</a>
          <div v-for="(value,name) in detail" :key="value">
            <div :class="{'bg_color':current_name==name}" @click="cg_current_name(name)">
              <a style="color: #333333" @click="selectId(name)">{{ name }}</a>
            </div>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div class="sub-item-wrapper" v-for="(value,name) in detail" :key="(value,name)"
                 :class="{'bg_color2':current_name==name}">
              <div class="dark-anchor" :id="name" style="height: 100px;margin-top: -100px"></div>
              <div class="sub-title"  >{{ name }}</div>
              <div class="sub-item-wrapper" >
                <div class="sub-item-wrapper" v-for="tmp in value" :key="tmp">
                  <div class="sub-item">
                    <a style="color: #333333" :href="'#/Hospital/'+tmp">{{ tmp }}</a>
                  </div>
                </div>
              </div>
            </div>

          </el-main>
        </el-container>
        <el-aside style="background-color: white"></el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import 'ant-design-vue/dist/antd.css'
import HospitalAside from "@/components/hospital/HospitalAside";

export default {
  components: {HospitalAside},
  data() {
    return {
      active: "style=\"background-color: #f4f9ff;\"",
      activeName: 'second',
      detail:
          {
            普通外科: ['结直肠外科门诊', '甲状腺外科门诊', '胃肠肿瘤外科门诊'],
            口腔科: ['口腔内科', '口腔外科', '口腔正畸', '口腔种植', '儿童口腔',
              '口腔内科', '口腔外科', '口腔正畸', '口腔种植', '儿童口腔',
              '口腔内科', '口腔外科', '口腔正畸', '口腔种植', '儿童口腔',
              '口腔内科', '口腔外科', '口腔正畸', '口腔种植', '儿童口腔',
              '口腔内科', '口腔外科', '口腔正畸', '口腔种植', '儿童口腔'],
            内科: ['全科医学科', '肿瘤内科', '内分泌科', '血液病科', '心血管内科',
              '全科医学科', '肿瘤内科', '内分泌科', '血液病科', '心血管内科',
              '全科医学科', '肿瘤内科', '内分泌科', '血液病科', '心血管内科',
              '全科医学科', '肿瘤内科', '内分泌科', '血液病科', '心血管内科',
              '全科医学科', '肿瘤内科', '内分泌科', '血液病科', '心血管内科'
            ],
            外科: ['组织再生和创面修复', '脊髓脊柱外科', '骨科',
              '组织再生和创面修复', '脊髓脊柱外科', '骨科',
              '组织再生和创面修复', '脊髓脊柱外科', '骨科',
              '组织再生和创面修复', '脊髓脊柱外科', '骨科'],
            儿科: ['儿童心脏外科', '儿童神经外科', '儿童泌尿外科'],
            其他: ['戒烟门诊', '综合内科', '医务室', '免疫学', '病理科', '激光科',
              '戒烟门诊', '综合内科', '医务室', '免疫学', '病理科', '激光科',
              '戒烟门诊', '综合内科', '医务室', '免疫学', '病理科', '激光科',
              '戒烟门诊', '综合内科', '医务室', '免疫学', '病理科', '激光科',
              '戒烟门诊', '综合内科', '医务室', '免疫学', '病理科', '激光科'],

          },
      current_name: -1,
    }
  },
  methods: {
    onChange(link) {
      console.log('Anchor:OnChange', link);
    },
    cg_current_name(name) {
      this.current_name = name;
    },
    selectId(name){
      document.getElementById(name).scrollIntoView();
    }
  }
};
</script>
<style scoped>
.bg_color2 {
  background-color: #fafafa;
}

.bg_color {
  background-color: #ffffff;
  font-weight: bold;
}

.el-header, .el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  margin-left: 80px;
  background-color: #f4f9ff;
  text-align: center;
  line-height: 40px;
  overflow: hidden;
  margin-top: 70px;
  position: fixed;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 19px;
  width: 400px;
  display: block;
  margin-left: 500px;
  padding-top: 100px;
}

.sub-item {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 230px;
  margin-top: 10px;
  text-align: left;
  padding-right: 30px;
}

.sub-item-wrapper {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.sub-title {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 700;
  color: #333;
}



</style>