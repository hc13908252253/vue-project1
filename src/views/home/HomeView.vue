<template>
  <div class="Home">
  <el-container>
        <!-- 左侧导航 -->
    <NavMenu />
        <!-- 右侧主体 -->
    <el-container>
        <!-- 头部 -->
            <el-header>Header</el-header>
        <!-- 主体<router-view/>内容 -->
        <el-main>
          <router-view />
        </el-main>
    </el-container>
  </el-container>
  </div>
</template>
<script>
import NavMenu from './navMenu.vue';
export default{
    data() {
        return {};
    },
    methods: {

    },
    components: {
         NavMenu 
    }
}
</script>
<style >
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
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
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>