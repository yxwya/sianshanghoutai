<template>
  <el-card class="box-card">
    <!--面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <el-row class="searchRow">
      <el-col>
        <el-input clearable placeholder="请输入内容" v-model="query" class="inputSearch">
          <el-button @click="searchUser()" slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button @click="showAddUserDia()" type="success">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 表格 增加前面数字type="index"-->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="#" width="60">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="phone" label="电话">
      </el-table-column>
      <el-table-column prop="addtime" label="创建时间">
      </el-table-column>
      <el-table-column prop="atate" label="用户状态">
        <!-- 状态开关 -->
        <template slot-scope="scope">
          <el-switch v-model="scope.row.value" active-color="#13ce66" inactive-color="#ff4949">
          </el-switch>
        </template>
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
    <!-- 分页 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pagenum"
      :page-sizes="[2, 4, 6, 8]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
    <!-- 1\添加用户的对话框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisibleAdd">
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
        <el-button @click="dialogFormVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑用户对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisibleEdit">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
          <el-input clearable v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" label-width="100px">
          <el-input clearable v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px">
          <el-input clearable v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click="editUserDia()">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分配角色对话框 -->
    <el-dialog title="分配角色" :visible.sync="dialogFormVisibleRole">
      <el-form :model="form">
        <el-form-item label="用户名" label-width="100px">
            {{"当前用户名"}}
        </el-form-item>
        <el-form-item label="角色" label-width="100px">
          <el-select v-model="form.region" placeholder="请选择角色">
            <el-option label="主管" value="shanghai"></el-option>
            <el-option label="测试角色" value="beijing"></el-option>
            <el-option label="测试角色2" value="beijing"></el-option>
            <el-option label="超级管理员" value="beijing"></el-option>

          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </el-card>
</template>
<script>
  export default {
    data() {
      return {
        //   添加用户
        form: {
          username: 'haha',
          password: 'dfsfa',
          email: 'dafsd',
          mobile: 'fsf'
        },
        query: '',
        value: false,
        pagenum: 1,
        pagesize: 8,
        total: 32,
        // curUserName:'',
        dialogFormVisibleAdd: false,
        dialogFormVisibleEdit: false,
        dialogFormVisibleRole: false,
        // 表格数据
        tableData: [{
            name: 'yxw',
            email: 'yxw159hh@163.com',
            phone: '10086',
            addtime: '2019-4-20',
            atate: '',
            operation: '',
          },
          {
            name: 'hh',
            email: '',
            phone: '',
            addtime: '2019-4-20',
            atate: '',
            operation: '',
          },
          {
            name: 'adhh',
            email: '',
            phone: '',
            addtime: '2019-4-20',
            atate: '',
            operation: '',
          },
          {
            name: 'gsd',
            email: '',
            phone: '',
            addtime: '2019-4-20',
            atate: '',
            operation: '',
          },



        ]
      }

    },
    methods: {
      // 分页的方法
      handleSizeChange(val) {
        this.pagesize = val
        this.pagenum = 1
        this.tableData
      },
      handleCurrentChange() {
        this.pagenum = val

      },
      // s搜索用户
      searchUser() {
        this.tableData
      },
      //   添加用户
      showAddUserDia() {
        this.dialogFormVisibleAdd = true
      },
      //   添加用户，发送请求
      addUser() {

      },
      //   删除用户框
      deleteBox() {
        this.$confirm('是否删除用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //   编辑用户
      editUser(user) {
        // this.form=user
        this.dialogFormVisibleEdit = true
      },
      // 编辑请求发送
      editUserDia() {

      },
      // 分配角色对话框
      setuserRole() {
        // this.curUserName=tableData.name
        this.dialogFormVisibleRole = true
      }
    }
  }
  // 请求不到数据，报错
  // created() {
  //   this.getUserList()
  // },
  // methods: {
  //   async getUserList() {
  //     const res = await
  //     this.$http.get('users?query=${this.query}&pagenum=${this.pagenum}&pagesize=${this.pagesize}'

  //     )
  //     console.log(res)
  //   }
  // }

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
