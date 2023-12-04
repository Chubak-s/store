<script>
import VCard from "@/components/v-card.vue";
import VPopup from "@/popup/v-popup.vue";
export default {
  name: 'v-liked',
  components: {
    VCard,
    VPopup,
  },
  props: {},
  data() {
    return {
      liked: [],
      isVisibleModal: false,
      actualItem: {},
    }
  },
  computed: {},
  methods: {
    openModal(item){
      this.isVisibleModal = true;
      this.actualItem = item;
    },
    closeModal(){
      this.isVisibleModal = false;
    },
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
      <div class="path hover"><router-link to="/" style="text-decoration: none; color: #FFF">Главное/ Избранное</router-link></div>
      <div class="sort-bar">
        <div class="sort-new hover">по новизне</div>
        <div class="sort-price hover">по цене</div>
        <div class="sort-popular hover">по популярности</div>
      </div>
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
}
.main-bar{
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  color: #FFFFFF;
  font-size: 16px;
}
.sort-bar{
  display: flex;
  column-gap: 30px;
}
.main-section{
  display: flex;
}

.main-catalog{
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding-bottom: 10px;
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
  margin-bottom: 50px;
}
</style>