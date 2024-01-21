<script>
import VCard from "@/components/v-card.vue";
import VPopup from "@/components/v-popup.vue";
import VLoginPage from "@/components/v-login-page.vue";
export default {
  name: 'v-liked',
  components: {
    VLoginPage,
    VCard,
    VPopup,
  },
  props: {},
  data() {
    return {
      liked: [],
      isVisibleModal: false,
      actualItem: {},
      isVisibleLogin: false,
    }
  },
  computed: {
    isVisibleLogin: function() {
      return this.$store.state.isVisibleLogin;
    }
  },
  methods: {
    openModal(item){
      this.isVisibleModal = true;
      this.actualItem = item;
    },
    closeModal(){
      this.isVisibleModal = false;
    },
    closeLogin(){
      this.isVisibleLogin = false;
      this.$store.state.isVisibleLogin = this.isVisibleLogin;
    }
  },
  watch: {},
  mounted() {
    this.liked = this.$store.state.liked;
  },
}
</script>

<template>
  <div class="v-liked">
    <div class="main-bar">
      <div class="path hover"><router-link to="/store" style="text-decoration: none; color: #FFF">Главное/ Избранное</router-link></div>
    </div>
    <div class="main-section">
      <div v-if="this.liked.length===0">
        <div class="title">В избранном нет товаров</div>
      </div>
      <div class="main-catalog">
        <div v-for="item in liked" :key="item.id">
          <VCard :name="item.name" :img="item.img" :price="item.price" @click="openModal(item)"></VCard>
        </div>
        <div class="popup-wrapper" v-if="isVisibleModal">
          <VPopup :item="this.actualItem"></VPopup>
          <i class="material-icons close" @click="closeModal()"></i>
        </div>
      </div>
    </div>
    <div class="login" v-if="isVisibleLogin">
      <VLoginPage></VLoginPage>
      <i class="material-icons close closeLogin" @click="closeLogin()"></i>
    </div>
  </div>
</template>

<style scoped>
.v-liked{
  margin: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", sans-serif;
  background-color: #0F0F0F;
  padding-right: 10vw;
  padding-left: 10vw;
  padding-bottom: 40px;
}
.main-bar{
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  color: #FFFFFF;
  font-size: 16px;
}
.main-section{
  display: flex;
  height: 50vh;
}

.main-catalog{
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding-bottom: 30px;
  width: 70vw;
  gap: 20px;
}
.hover{
  cursor: pointer;
}
.close{
  position: fixed;
  top: 5vh;
  right: 22vw;
  color: #fff;
  cursor: pointer;
}
.popup-wrapper{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.title{
  color: #FFFFFF;
  font-size: 48px;
  font-family: "PT Sans", sans-serif;
  width: 100vw;
  padding-left: 20vw;
}
.login{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
.closeLogin{
  position: fixed;
  top: 20vh;
  right: 30vw;
  color: #fff;
  cursor: pointer;
}
</style>