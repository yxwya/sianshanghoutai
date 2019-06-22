<template>
    <el-card class="box-card">
        <!--面包屑 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>商品管理</el-breadcrumb-item>
          <el-breadcrumb-item>商品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 搜索 -->
        <el-row class="searchRow">
          <el-col>
            <el-input clearable placeholder="请输入内容" v-model="query" class="inputSearch">
              <el-button @click="searchUser()" slot="append" icon="el-icon-search"></el-button>
            </el-input>
            <el-button @click="showAddUserDia()" type="success">添加商品</el-button>
          </el-col>
        </el-row>
        <!-- 表格 增加前面数字type="index"-->
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" label="#" width="60">
        </el-table-column>
        <el-table-column prop="name" label="商品名称" width="280">
        </el-table-column>
        <el-table-column prop="email" label="商品价格">
        </el-table-column>
        <el-table-column prop="phone" label="商品重量">
        </el-table-column>
        <el-table-column prop="addtime" label="创建时间">
        </el-table-column>

        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <el-button @click="editUser(scope,row)" size="mini" plain type="primary" icon="el-icon-edit" circle>
            </el-button>
            <el-button @click="setuserRole()" size="mini" plain type="success" icon="el-icon-check" circle></el-button>
            <el-button @click="deleteBox()" size="mini" plain type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  .box-card {
    height: 100%;
  }

  .inputSearch {
    width: 300px;
  }

  .searchRow {
    margin-top: 20px;
  }
  </style>
  