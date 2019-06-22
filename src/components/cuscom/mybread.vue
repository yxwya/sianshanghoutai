<template>
  <!-- 面包屑 -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{level1}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{level2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
  export default {
    // name: 'my-bread',
    data() {

      return {
        // level1: '',
        // level2: ''
      }
    },
    // 也能用插值表达式表示，与data一样
    props: ['level1', 'level2']
  }

</script>
<style scoped>

</style>
