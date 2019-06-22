<template>
  <el-card class="box-card">
    <!--面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <el-row class="searchRow">
      <el-col>

        <el-button @click="showAddUserDia()" type="success">添加分类</el-button>
      </el-col>
    </el-row>

    <el-table height="400px" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" prop="route" label="#" width="80">
      </el-table-column>
      <el-table-column prop="name" label="分类名称" width="180">
      </el-table-column>
      <el-table-column prop="route" label="级别" width="180">
      </el-table-column>
   
      <el-table-column prop="Hierarchy" label="是否有效"width="180">
      </el-table-column>
      <el-table-column prop="route" label="操作" >
        </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    name: 'App'
  }

</script>

<style>
  #app {
    /* 不要忘了 */
    height: 100%;
  }

</style>
