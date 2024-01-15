<script>

export default {
  name: 'v-header',
  components: {
  },
  props: {},
  data(){
    return {
    }
  },
  computed:{},
  methods: {
    openLogin(){
      this.$store.state.isVisibleLogin=true;
    }
  },
  watch: {},
  mounted() {
  }
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet">
  <div class="v-header">
    <div class="header-first">
      <div class='information'>
        <img src='/src/assets/eva_phone-outline.svg' alt="icon-phone">
        8(929)306-41-68 | Работаем 7 дней в неделю | 9:00 - 18:00
      </div>
      <div class='registration'>
        <img src="/src/assets/ic_sharp-log-in.svg" alt="log-in">
        <p class="log-in" @click="openLogin">Войти/Регистрация</p>
      </div>
    </div>
    <div class='bar'>
      <div class="logo">
        <router-link to="/store" style="text-decoration: none; color: #fff">PORTEN</router-link>
      </div>
      <div class="menu-bar">
        <router-link to="/catalog" style="text-decoration: none; color: #969696"><p class="block-bar">каталог</p></router-link>
        <router-link to="/liked" style="text-decoration: none; color: #969696"><p class="block-bar">понравилось</p></router-link>
        <p class="block-bar">личный кабинет</p>
        <button type="button" class="cart-btn">
          <router-link to="/cart"><img src="/src/assets/bx_bx-cart.svg" alt="cart"></router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-header{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PT Sans', sans-serif;
}
.header-first{
  color: #969696;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: #000;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.information{
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.registration{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.bar{
  color: #fff;
  background: #0F0F0F;
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-items: center;
}
.logo{
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
}
.menu-bar{
  display: flex;
  color: #969696;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  align-items: center;
}
.menu-bar > button{
  padding: 0 10px;
  background: transparent;
  border: none;
  cursor: pointer;
}
.block-bar{
  padding: 0 10px;
}
.block-bar:hover{
  cursor: pointer;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background: #1F1F1F;
}
</style>