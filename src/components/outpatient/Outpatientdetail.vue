<template>
  <div>
    <navigation></navigation>
    <el-container>
      <el-aside>
        <hospital-aside></hospital-aside>
      </el-aside>
      <el-main style="height: 1000px;width: 1000px">
        <div class="hospital-source-list">
          <div class="header-wrapper">
            <span class="v-link clickable">北京朝阳医院西区(石景山) </span>
            <div class="split"></div>
            <div>内科</div>
          </div>
        </div>
        <div class="title mt20">心内科</div>
        <div class="title-wrapper"> 2021年12月</div>
        <div class="calendar-list-wrapper">
          <div class="calendar-item gray selected " v-for="(value,name) in dateList" :key="(value,name)">

            <div class="date-wrapper">
              <span data-v-aac3f6b8="">{{ value }}</span>
              <span class="week">{{ name }}</span>
            </div>
            <div class="status-wrapper"> 无号</div>
          </div>
        </div>
        <div class="tips mt60 tips"> 当天已无号，请查看其它日期号源</div>
        <div  class="">
          <div  class="list-title">
            <div  class="block"></div>
            上午号源
          </div>
          <div>
            <div class="list-item">
              <div class="item-wrapper">
                <div class="title-wrapper">
                  <div class="title"> 医师</div><!---->
                  <div  class="name"></div>
                </div>
                <div class="special-wrapper">xxx</div>
              </div>
              <div  class="right-wrapper">
                <div  class="fee"> ￥<span  style="font-family: 'Malgun Gothic';">{{price_0}}</span>
                </div>
                <div  class="button-wrapper disabled">
                  <div  class="v-button disable">约满</div>
                </div>
              </div>
            </div>
          </div><!----></div>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import HospitalAside from "@/components/hospital/HospitalAside";

export default {
  name: "OutpatientDetail",
  components: {HospitalAside, Navigation},
  data() {
    return {
      price_0:50,
      dateList:
          {
            '12月04': '周六',
            '12月05': '周日',
            '12月06': '周一',
            '12月07': '周二',
            '12月08': '周三',
            '12月09': '周四',
            '12月10': '周五',
          }
    }
  }
}
</script>

<style scoped>
.calendar-item {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 124px;
  height: 80px;
  cursor: pointer;
  user-select: none;
  color: #999;
  margin-left: 22px;
}

.date-wrapper {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 14px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: #fff;
  background-color: #ccc;
}

.status-wrapper {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  color: #999;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px 0;
  border: 1px solid #e8f2ff;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-color: #ccc;
}

.hospital-source-list {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding-top: 220px;
  padding-left: 0px;
  box-sizing: border-box;
}

.header-wrapper {
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
}

.v-link {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #666;
  transition: all .2s ease;
  user-select: none;
  letter-spacing: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
}

.split {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  padding: 0;
  box-sizing: border-box;
  border-left: 1px solid #eee;
  width: 1px;
  height: 16px;
  margin: 0 10px;
}

.title {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 1px;
  font-weight: 700;
  color: #333;
  font-size: 16px;
  margin-top: 20px;
}

.title-wrapper {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 124px;
  height: 80px;
  cursor: pointer;
  user-select: none;
  color: #999;
}

.calendar-list-wrapper {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #666;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
}

.tips {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Heiti SC, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 30px;
  text-align: center;
  color: #333;
  letter-spacing: 1px;
}
</style>