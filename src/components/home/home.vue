<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            Y X W
          </div>
        </el-col>
        <el-col :span="16" class="middle">
          <h3>后台管理系统</h3>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a class="loginout" href="#" @click.prevent="handlesignout()">返回登录</a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <!-- 只打开一个的属性:unique-opened="true" 开启路由-->
        <el-menu 
        :unique-opened="true" 
        :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
              <i class="el-icon-document"></i>
              <span>用户列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 2 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="role">
              <i class="el-icon-document"></i>
              <span>角色列表</span>
            </el-menu-item>
            <el-menu-item index="rights">
              <i class="el-icon-document"></i>
              <span>权限列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 3 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="list">
              <i class="el-icon-document"></i>
              <span>商品列表</span>
            </el-menu-item>
            <el-menu-item index="parameters">
              <i class="el-icon-document"></i>
              <span>分类参数</span>
            </el-menu-item>
            <el-menu-item index="commodities">
              <i class="el-icon-document"></i>
              <span>商品分类</span>
            </el-menu-item>
          </el-submenu>
          <!-- 4 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="order">
              <i class="el-icon-document"></i>
              <span>订单列表</span>
            </el-menu-item>
          </el-submenu>
          <!-- 5 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="report">
              <i class="el-icon-document"></i>
              <span>数据报表</span>
            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>
      <el-main class="main">
 
          <!-- 容器 -->
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>
<script>
  export default {
    methods: {
      handlesignout() {
        this.$message.success('退出成功')
        this.$router.push({
          name: 'login'
        })
      }
    }
  }

</script>
<style scoped>
  .container {
    height: 100%;
  }

  .header {
    background-color: #b3c0d1;
  }

  .aside {
    background-color: #d3dce6;
  }

  .main {
    background-color: #e9eef3;
  }

  .grid-content {
    text-align: center;
    line-height: 60px;
  }

  .middle {
    text-align: center;
  }

  .loginout {
    text-decoration: none;
    text-align: center;

  }

</style>
