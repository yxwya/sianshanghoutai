<template>
  <el-card>
    <!-- 面包屑 -->
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb> -->

    <my-bread level1="权限管理" level2="权限列表"></my-bread>
    <!-- 表格 -->
    <el-table
    height="400px"
    :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" prop="route" label="#" width="80">
      </el-table-column>
      <el-table-column prop="name" label="权限名称" width="180">
      </el-table-column>
      <el-table-column prop="route" label="路径" width="180">
      </el-table-column>
      <el-table-column prop="Hierarchy" label="层级">
      </el-table-column>
    </el-table>

  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
            route: 'goods',
            name: '商品管理',
            Hierarchy: '一级'
          }, {
            route: 'orders',
            name: '订单管理',
            Hierarchy: '二级'
          }, {
            route: 'rights',
            name: '权限管理',
            Hierarchy: '一级'
          }, {
            route: 'goods',
            name: '商品列表',
            Hierarchy: '一级'
          },
          {
            route: 'goods',
            name: '商品管理',
            Hierarchy: '一级'
          }, {
            route: 'orders',
            name: '订单管理',
            Hierarchy: '二级'
          }, {
            route: 'rights',
            name: '权限管理',
            Hierarchy: '一级'
          }, {
            route: 'goods',
            name: '商品列表',
            Hierarchy: '一级'
          },
          {
            route: 'rights',
            name: '权限管理',
            Hierarchy: '一级'
          }, {
            route: 'goods',
            name: '商品列表',
            Hierarchy: '一级'
          },
          {
            route: 'goods',
            name: '商品管理',
            Hierarchy: '一级'
          }, {
            route: 'orders',
            name: '订单管理',
            Hierarchy: '二级'
          }, {
            route: 'rights',
            name: '权限管理',
            Hierarchy: '一级'
          }, {
            route: 'goods',
            name: '商品列表',
            Hierarchy: '一级'
          },
        ]
      }
    }
  }

</script>
<style scoped>

</style>
