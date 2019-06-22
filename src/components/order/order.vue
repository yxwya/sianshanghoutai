<template>
  <el-card class="box-card">
    <!--面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table height="400px" :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" prop="route" label="#" width="80">
      </el-table-column>
      <el-table-column prop="name" label="订单编号" width="180">
      </el-table-column>
      <el-table-column prop="route" label="订单价格" width="180">
      </el-table-column>

      <el-table-column prop="Hierarchy" label="是否付款" width="180">
      </el-table-column>
      <el-table-column prop="Hierarchy" label="是否发货" width="180">
      </el-table-column>
      <el-table-column prop="Hierarchy" label="下单时间" width="180">
      </el-table-column>
      <el-table-column prop="route" label="操作">
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
