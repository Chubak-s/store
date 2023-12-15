<script>
import VCard from "@/components/v-card.vue";
import VPopup from "@/components/v-popup.vue";

export default {
  name: 'v-login-page',
  components: {
    VCard,
    VPopup,
  },
  props: {},
  data() {
    return {
      container: 'login',
    }
  },
  computed: {},
  methods: {
    moveToRegistration(){
      this.container='registration';
    },
    moveToLogin(){
      this.container='login';
    }
  },
  watch: {},
  mounted() {
  },
}
</script>

<template>
  <div class="v-login-page">
    <div class="containerLogin" v-if="container==='login'">
      <div class="title">Добро пожаловать в Porten</div>
      <div class="helpTip">В первый раз здесь? <span style="text-decoration: underline; cursor: pointer" @click="moveToRegistration">Зарегистрируйтесь</span></div>
      <input type="email" name="email" class="email" placeholder="Введите вашу почту">
      <div class="restorePassword">Я не помню пароль</div>
      <div class="login-btn">Войти</div>
      <div class="alternative-login"></div>
    </div>
    <div class="containerRegistration" v-if="container==='registration'">
      <div class="title">Добро пожаловать в Porten</div>
      <div class="helpTip">У вас уже есть аккаунт? <span style="text-decoration: underline; cursor: pointer" @click="moveToLogin">Войдите</span></div>
      <input type="text" name="email" class="email" placeholder="Введите свое имя">
      <input type="email" name="email" class="email" placeholder="Введите вашу почту">
      <input type="tel" name="email" class="email" placeholder="Телефон">
      <input type="password" name="email" class="email" placeholder="Придумайте пароль">
      <input type="password" name="email" class="email" placeholder="Повторите пароль">
      <div class="login-btn">Зарегистрироваться</div>
      <div class="alternative-login"></div>
    </div>
  </div>
</template>

<style scoped>
.v-login-page{
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
.containerLogin{
  margin-top: 10%;
  height: 300px;
  width: 500px;
  background: #fff;
  padding: 30px;
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
}
.containerRegistration{
  margin-top: 10%;
  height: 460px;
  width: 500px;
  background: #fff;
  padding: 30px;
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
}
.title{
  font-size: 24px;
  font-weight: 550;
  margin-bottom: 10px;
}
.helpTip{
  margin-bottom: 25px;
}
.email{
  border: none;
  border-bottom: 1px solid #0f0f0f;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.email:focus{
  outline: none;
}
.restorePassword{
  text-decoration: underline;
  color: #191B1C;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 20px;
}
.login-btn{
  color: #FFFFFF;
  background: #000;
  width: 100%;
  padding: 20px;
  text-align: center;
}
.login-btn:hover{
  cursor: pointer;
  background: #969696;
}
</style>