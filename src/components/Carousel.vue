<template>
  <div id="banner">
    <el-carousel :height="bannerHeight+'px'">
      <el-carousel-item v-for="item in img_list" :key="item">
        <img :src="item" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name:'Banner',
  data(){
    return{
      img_list:["../assets/img/main/icon.png","../assets/img/main/icon.png","../assets/img/main/icon.png"],
      bannerHeight:1000,
      screenWidth:0
    }
  },
  methods:{
    setSize:function (){
      this.bannerHeight = (400/1920) * this.screenWidth;
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    this.setSize();
  }
};
</script>
<style scoped>
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
img{
  width: 100%;
  height: inherit;
}
</style>