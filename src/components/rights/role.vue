<template>
  <el-card>
    <!-- 面包屑 -->
    <my-bread level1="权限管理" level2="角色列表"></my-bread>
    <!-- 添加角色 -->
    <el-row>
      <el-col class="addroletn">
        <el-button @click="distribution()" type="primary" plain>添加角色</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand" width="60">
        <!-- 展开的东西 -->
        <template slot-scope="scope">
          <el-row v-for="(item,i) in tableData" :key="i">
            <el-col :span="4">
              <el-tag @close="deleRight()" closable type="success">{{item.name}}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <el-col :span="20">
              <el-row v-for="(item2,i) in tableData" :key="i">
                <el-col :span="4">
                  <el-tag @close="deleRight()" closable type="danger">{{item2.operation}}</el-tag>
                  <i class="el-icon-arrow-right "></i>
                </el-col>
                <el-col :span="20">
                  <el-tag @close="deleRight()" closable type="warning" v-for="(item2,i) in tableData" :key="i">{{item2.operation}}</el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column type="index" label="#" width="60">
      </el-table-column>
      <el-table-column prop="name" label="角色名称" width="180">
      </el-table-column>
      <el-table-column prop="describe" label="角色描述" width="180">
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
    <!-- <el-dialog title="分配角色" :visible.sync="dialogFormVisibledistribution">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
          <el-input clearable v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="100px">
          <el-input clearable v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input clearable v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input clearable v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibledistribution = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog> -->
  </el-card>
  <!-- 分配角色框 -->
  
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisibledistribution: false,
        tableData: [{
            name: '主管',
            describe: '技术负责人',

            operation: 'gasg',
          },
          //   {
          //     name: '测试角色',
          //     describe: '测试角色概述',

          //     operation: '',
          //   },
          {
            name: '测试角色2',
            describe: '测试角色概述2',

            operation: 'dsf',
          },
          //   {
          //     name: '超级管理员',
          //     describe: '超级管理员',

          //     operation: '',
          //   },



        ]
      }
    },
    methods:{
      distribution(){
        this.dialogFormVisibledistribution = true
      },
      deleRight(){
          this.$http.delete(tableData.name)
      }
    }
  }

</script>

<style scoped>
  .addroletn {
    margin-top: 20px;
  }
  i{
      font-style: normal
  }

</style>
