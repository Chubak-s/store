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
        {name: 'Phillip Plein black', img: 'public/bracelets/phillip-plein.png', price: 34800, category: 'bracelets'},
        {name: 'Phillip Plein grey', img: 'public/bracelets/pp-white.png', price: 34800, category: 'bracelets'},
        {name: 'Phillip Plein Golden', img: 'public/bracelets/pp-golden.png', price: 34800, category: 'bracelets'},
        {name: 'Harmont Blaine', img: 'public/belts/harmont-blaine.png', price: 9000, category: 'belts'},
        {name: 'Hugo', img: 'public/belts/hugo.png', price: 8000, category: 'belts'},
        {name: 'Etro', img: 'public/belts/etro.png', price: 34000, category: 'belts'},
        {name: 'Piquadro', img: 'public/bugs/piquadro.png', price: 36000, category: 'bugs'},
        {name: 'Igor York', img: 'public/bugs/igor-york.png', price: 28000, category: 'bugs'},
        {name: 'Guess', img: 'public/bugs/guess.png', price: 14000, category: 'bugs'},
        {name: 'Armani blue', img: 'public/glasses/armani.png', price: 14000, category: 'glasses'},
        {name: 'Burberry fashion', img: 'public/glasses/burberry.png', price: 56000, category: 'glasses'},
        {name: 'Ray-ben classic', img: 'public/glasses/ray-ben.png', price: 18000, category: 'glasses'},
        {name: 'DG blue', img: 'public/watches/model1.png', price: 230000, category: 'watches'},
        {name: 'DG red', img: 'public/watches/model2.png', price: 220000, category: 'watches'},
        {name: 'DG white', img: 'public/watches/model3.png', price: 225000, category: 'watches'},
      ],
      belts: [],
      bracelets: [],
      bugs: [],
      glasses: [],
      watches: [],
      showCategories: false,
      beltsShow: false,
      braceletsShow: false,
      bugsShow: false,
      glassesShow: false,
      watchesShow: false,
      actualCatalog: null,
    }
  },
  computed: {},
  methods: {
    sortPrice(){
      this.catalog.sort((a, b) => a.price - b.price);
    },
    ChooseCategory(category){
      this.actualCatalog = category;
    },
    toggleSubItems(itemShow) {
      switch (itemShow){
        case 'categories':
          this.showCategories = !this.showCategories;
          break;
        // case 'belts':
        //   this.beltsShow = !this.beltsShow;
        //   break;
        // case 'bracelets':
        //   this.braceletsShow = !this.braceletsShow;
        //   break;
        // case 'bugs':
        //   this.bugsShow =! this.bugsShow;
        //   break;
        // case 'glasses':
        //   this.glassesShow =! this.glassesShow;
        //   break;
        // case 'watches':
        //   this.watchesShow =! this.glassesShow;
        //   break;
      }
    },
  },
  watch: {},
  mounted() {
    this.actualCatalog = this.catalog;
    this.catalog.forEach(element => {
      switch (element.category){
        case 'belts':
          this.belts.push(element);
          break;
        case 'bracelets':
          this.bracelets.push(element);
          break;
        case 'bugs':
          this.bugs.push(element);
          break;
        case 'glasses':
          this.glasses.push(element);
          break;
        case 'watches':
          this.watches.push(element);
          break;
      }
    })
  },
}
</script>

<template>
  <div class="v-catalog">
    <div class="main-bar">
      <div class="path hover"><router-link to="/" style="text-decoration: none; color: #FFF">Главное/ Каталог</router-link></div>
      <div class="sort-bar">
        <div class="sort-new hover">по новизне</div>
        <div class="sort-price hover" @click="sortPrice">по цене</div>
        <div class="sort-popular hover">по популярности</div>
      </div>
    </div>
    <div class="main-section">
      <div class="categories">
        <div class="categories-title" @click="toggleSubItems('categories')">Категории</div>
        <ul class="categories-items" :class="{ 'show': this.showCategories }">
          <li class="list" @click="ChooseCategory(this.watches)">часы</li>
          <li class="list" @click="ChooseCategory(this.belts)">ремни</li>
          <li class="list" @click="ChooseCategory(this.bugs)">рюкзаки</li>
          <li class="list" @click="ChooseCategory(this.bracelets)">браслеты</li>
          <li class="list" @click="ChooseCategory(this.glasses)">очки</li>
        </ul>
        <hr class="line">
        <div class="categories-title" @click="toggleSubItems('categories')">Фильтр</div>
        <ul class="categories-items" :class="{ 'show': this.showCategories }">
          <li class="list" @click="ChooseCategory(this.watches)">часы</li>
          <li class="list" @click="ChooseCategory(this.belts)">ремни</li>
          <li class="list" @click="ChooseCategory(this.bugs)">рюкзаки</li>
          <li class="list" @click="ChooseCategory(this.bracelets)">браслеты</li>
          <li class="list" @click="ChooseCategory(this.glasses)">очки</li>
        </ul>
      </div>
      <div class="main-catalog">
        <div v-for="item in actualCatalog" :key="item.id">
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
  margin-bottom: 20px;
  cursor: pointer;
}
.categories-items {
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
   transition: max-height 0.3s ease;
   max-height: 0;
   overflow: hidden;
 }

.categories-items.show {
  max-height: 400px; /* замените на желаемую максимальную высоту списка */
}
.line{
  margin: 0 auto;
  width: 60%;
  margin-bottom: 45px;
}
.main-catalog{
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  padding-bottom: 10px;
  margin-left: 100px;
  width: 70vw;
  gap: 20px;
}
.hover{
  cursor: pointer;
}
.list{
  padding: 10px;
  cursor: pointer;
}
.list:hover{
  color: #D0D0D0;
}
</style>