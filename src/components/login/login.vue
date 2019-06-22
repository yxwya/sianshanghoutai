<template>
  <div class="login-wrap">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formdata">
      <h2>用户登录</h2>
      <el-form-item label="用户名:">
        <el-input v-model="formdata.usename"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="formdata.password" show-password></el-input>
      </el-form-item>
      <el-button @click.prevent="handleLogin()" class="login-btn" type="primary">登录</el-button>
    </el-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        formdata: {
          usename: '',
          password: ''
        }
      }
    },
    methods: {
      // 登录请求
      handleLogin() {
        this.$router.push({
          name: 'home'
        })
        this.$message.success('登录成功！')
        // this.$http.post('login',this.formdata).then(res => {
        //   console.log(res)
        //   const {
        //     tada,
        //     mata: {
        //       msg,
        //       status
        //     }
        //   } = res.data

        //   if (status === 200) {
        //     this.$router.push({
        //       name: 'home'
        //     })
        //     提示语
        //     this.$message.success(msg)
        //   }
        // })
      }

    }
  }

</script>
<style scoped>
  .login-wrap {
    height: 100%;
    background-color: #324152;
    /* 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-wrap .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
  }

  .login-wrap .login-btn {
    width: 100%;
  }

</style>
