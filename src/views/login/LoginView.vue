<template>
  <div class="login">
    <h1>学习前端</h1>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
      <!-- 姓名 -->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码" prop="psd">
        <el-input type='password' v-model="ruleForm.psd"></el-input>
      </el-form-item>
      <!-- 提交按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        ruleForm:{//初始化
          name:'',
          psd:''
        }
      };
    },
  rules:{//校验
    name:[//校验名字
      {require:true,message:'请输入姓名',trigger:'blur'},
      {min:3,max:5,message:'长度在3到5个字母',trigger:'blur'}
    ],
    psd:[//校验密码
      {require:true,message:'请输入密码',trigger:'blur'},
      {min:3,max:5,message:'长度在6到18个字符',trigger:'blur'}
    ]
  },
  methods:{
    submitForm(){
      this.$router.push("/home");//页面跳转
    }
  }
  }
</script>
