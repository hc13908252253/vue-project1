<template>
  <el-aside with="200px">
      <!-- 左侧导航 -->
           <el-menu
            default-active="1"
            class="el-menu-vertical-demo" router>
            <!-- 无子级 -->
            <el-menu-item index="/sub-index">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 无子级 -->
            <el-menu-item index="/datagl">
              <i class="el-icon-s-home"></i><span slot="title">数据管理</span>
            </el-menu-item>
              <!-- 有子级 -->
             <el-submenu index="/imfogl">
              <template slot="title"><i class="el-icon-s-order"></i>信息管理</template>
              <el-menu-item index="/list"> <i class="el-icon-s-home"></i>列表管理</el-menu-item>
            </el-submenu>
              <!-- 有子级 -->
             <el-submenu index="/usergl">
              <template slot="title"><i class="el-icon-s-order"></i>用户管理</template>
              <el-menu-item index="/status"> <i class="el-icon-s-home"></i>用户统计</el-menu-item>
              <el-menu-item index="/role"> <i class="el-icon-s-home"></i>角色统计</el-menu-item>
            </el-submenu>
          </el-menu>
  </el-aside>
</template>
<script>
export default{
  data(){
    return{
      
    }
  },
  methods:{

  }
}
</script>