<script>
  import VCard from "@/components/v-card.vue";
  export default {
    name: 'v-catalog',
    components: {
      VCard,
    },
    props: {},
    data() {
      return {
        catalog: [
          {name: 'Armani', img: 'public/model2.png', price: 570000},
          {name: 'D&G', img: 'public/model3.png', price: 500000},
          {name: 'D&G', img: 'public/model2.png', price: 570000},
          {name: 'D&G', img: 'public/model3.png', price: 170000},
          {name: 'Hermes', img: 'public/model1.png', price: 400},
          {name: 'D&G', img: 'public/model2.png', price: 100},
        ]
      }
    },
    computed: {},
    methods: {
      sortPrice(){
        this.catalog.sort((a, b) => a.price - b.price);
      }
    },
    watch: {},
    mounted() {
    },
  }
</script>

<template>
  <div class="v-catalog">
    <div class="main-bar">
      <div class="path hover">Главное/ Каталог</div>
      <div class="sort-bar">
        <div class="sort-new hover">по новизне</div>
        <div class="sort-price hover" @click="sortPrice">по цене</div>
        <div class="sort-popular hover">по популярности</div>
      </div>
    </div>
    <div class="main-section">
      <div class="categories">
        <div class="categories-title">Категории</div>
        <hr class="line">
      </div>
      <div class="main-catalog">
        <div v-for="item in catalog" :key="item.id">
          <VCard :name="item.name" :img="item.img" :price="item.price" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-catalog{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Playfair Display", sans-serif;
  background-color: #0F0F0F;
}
.main-bar{
  height: 20vh;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  padding-right: 10vw;
  padding-left: 10vw;
  color: #FFFFFF;
  font-size: 16px;
}
.sort-bar{
  display: flex;
  column-gap: 30px;
}
.main-section{
  display: flex;
  height: 150vh;
}
.categories{
  width: 20vw;
  background: #191B1C;
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 18px;
  padding-top: 50px;
}
.categories-title{
  text-align: center;
  margin-bottom: 50px;
}
.line{
  margin: 0 auto;
  width: 60%;
}
.main-catalog{
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding-bottom: 10px;
  margin-left: 100px;
  width: 70vw;
}
.hover{
  cursor: pointer;
}
</style>