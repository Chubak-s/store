<script>
  export default {
    name: 'v-header',
    components: {},
    props: {},
    data(){
      return {

      }
    },
    computed:{},
    methods: {},
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
        <img src="public/eva_phone-outline.svg" alt="icon-phone">
        8(929)306-41-68 | Работаем 7 дней в неделю | 9:00 - 18:00
      </div>
      <div class='registration'>
        <img src="public/ic_sharp-log-in.svg" alt="log-in">
        <p class="log-in">Войти/Регистрация</p>
      </div>
    </div>
    <div class='bar'>
      <div class="logo">
        PORTEN
      </div>
      <div class="menu-bar">
        <p class="block-bar">каталог</p>
        <p class="block-bar">понравилось</p>
        <p class="block-bar">личный кабинет</p>
        <button type="button" class="cart-btn">
          <img src="public/bx_bx-cart.svg" alt="cart">
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