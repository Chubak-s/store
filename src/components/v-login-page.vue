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
    }
  },
  computed: {},
  methods: {
  },
  watch: {},
  mounted() {
  },
}
</script>

<template>
  <div class="v-login-page">
    <div class="title">Добро пожаловать в Porten</div>
    <div class="helpTip">В первый раз здесь? <span style="text-decoration: underline">Зарегистрируйтесь</span></div>
    <input type="email" name="email" placeholder="Введите вашу почту">
    <div class="restorePassword"></div>
    <div class="login-btn">Войти</div>
    <div class="alternative-login"></div>
  </div>
</template>

<style scoped>
.v-login-page{
  height: 100vh;
  background: #969696;
}
</style>