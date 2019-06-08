<template>
  <div class="login">
    <el-form ref="form" :model="form" class="loginSon" :rules="rules">
      <el-form-item label="账号:" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      const data = {
        uname: this.form.username,
        upwd: this.form.password
      };
      this.$refs.form.validate(valid => {
        if (valid) {
          this.axios({
            url: "http://localhost:8899/admin/account/login",
            method: "POST",
            data,
            withCredentials: true
          }).then(res => {
            if (res.data.status == 1) {
              this.$message.error("用户名或密码错误");
            }
            if (res.data.status == 0) {
              this.$router.push("/");
            }
          });
        }
      });
    }
  }
};
</script>
<style>
.login {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.loginSon {
  width: 500px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -40px;
  margin-left: -250px;
  margin-top: -100px;
}
</style>
