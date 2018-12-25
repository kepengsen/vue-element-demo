<template>
  <div class="page">
    <div class="login-box">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-position="left"
        label-width="0px"
        class="demo-ruleForm login-container"
        status-icon
      >
        <h3 class="title">系统登录</h3>
        <el-form-item prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            auto-complete="off"
            placeholder="账号"
            id="loginEmail"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            auto-complete="off"
            placeholder="密码"
            id="loginPassword"
          ></el-input>
          <label id="showPasswordToggle">
            <el-checkbox v-model="checked" id="showPasswordCheck">显示密码</el-checkbox>
          </label>
          <router-link to="/" style="float: right; color: #bbbbbb">忘记密码？</router-link>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            type="primary"
            style="width:100%;"
            @click.native.prevent="handleSubmit"
            :loading="logining"
          >登录</el-button>
        </el-form-item>
        <el-form-item style="width:100%;">
          <router-link to="/register">
            <el-button style="width:100%;">注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="star"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
  </div>
</template>

<script>
import Cookie from 'js-cookie';
export default {
  name: 'Applogin',
  data() {
    return {
      logining: false,
      fromUrl: '/',
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      checked: false
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return false;
        this.axios.post('/login', { username: this.ruleForm.account, password: this.ruleForm.password })
          .then(response => {
            Cookie.set('userName', response.user.userName);
            Cookie.set('token', response.user.token);
            this.$router.push('home');
          });
        return true;
      });
    }
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 15px;
  color: #fff;
}
.page {
  background-color: #2a3a40;
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow: hidden;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(216, 220, 229, 0.3);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: "Source Sans Pro", sans-serif;
}
.lizi {
  height: 100%;
}
</style>
