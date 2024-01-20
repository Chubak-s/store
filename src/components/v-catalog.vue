<script>
import VCard from "@/components/v-card.vue";
import VPopup from "@/components/v-popup.vue";
import VCart from "@/components/v-cart.vue";
import VLoginPage from "@/components/v-login-page.vue";
export default {
  name: 'v-catalog',
  components: {
    VCard,
    VPopup,
    VCart,
    VLoginPage,
  },
  props: {},
  data() {
    return {
      catalog: [
        {name: 'Phillip Plein black', img: "/src/assets/bracelets/phillip-plein.png", price: 34800, category: 'bracelets', information: 'Состав Гипоаллергенная нержавеющая сталь - 100%; Сезон мульти; Цвет черный; Застежка на замке; Страна производства Китай'},
        {name: 'Phillip Plein grey', img: '/src/assets/bracelets/pp-white.png', price: 34800, category: 'bracelets', information: 'Состав Гипоаллергенная нержавеющая сталь - 100%; Сезон мульти; Цвет серый; Застежка на замке; Страна производства Китай'},
        {name: 'Phillip Plein Golden', img: '/src/assets/bracelets/pp-golden.png', price: 34800, category: 'bracelets', information: 'Состав Материал 1: Нержавеющая сталь - 100%; Материал 2: Кристаллы - 100%; Ширина 1.2 см; Длина 22 см; Сезон мульти; Цвет золотой; Застежка на замке; Страна производства Китай'},
        {name: 'Harmont Blaine', img: '/src/assets/harmont-blaine.png', price: 9000, category: 'belts', information: 'Состав  Натуральная кожа - 100%; Ширина  3 см; Сезон  мульти; Цвет  сний; Узор  однотонный; Цвет фурнитуры  серебряный; Страна производства  Италия'},
        {name: 'Hugo', img: '/src/assets/hugo.png', price: 8000, category: 'belts', information: 'Состав  Натуральная кожа - 100%; Ширина  3 см; Сезон  мульти; Цвет  черный; Узор  однотонный; Цвет фурнитуры  серебряный; Страна производства  Италия'},
        {name: 'Etro', img: "/src/assets/etro.png", price: 34000, category: 'belts', information: 'Состав  ПВХ - 100%; Ширина  3.5 см; Сезон  мульти; Цвет  коричневый; Узор  однотонный; Цвет фурнитуры  серебряный; Страна производства  Италия'},
        {name: 'Piquadro', img: '/src/assets/bugs/piquadro.png', price: 36000, category: 'bugs', information: 'Рюкзак выполнен из плотной ткани на основе полиэстера. Особенности: одно отделение на молнии, внутри один карман на молнии, один карман без застежки, карманы для канцелярии, отсек для ноутбука 14 дюймов, два внешних кармана, два боковых кармана без застежки, уплотненная спинка, регулируемые плечевые ремни.'},
        {name: 'Igor York', img: '/src/assets/bugs/igor-york.png', price: 28000, category: 'bugs', information: 'Рюкзак из натуральной кожи с клапаном. На спинке карман на молнии, внутри карман на молнии и карман на кнопке. Ремни регулируются. Данный товар является частью проекта Lamoda planet - специального раздела нашего каталога, где мы собрали экологичные, этичные, инклюзивные и благотворительные товары. Товар произведен в стране присутствия Lamoda, что позволяет поддерживать развитие локальных фабрик, мастеров и швей. Покупая этот товар, вы также вносите свой вклад в сокращение углеродного следа.'},
        {name: 'Guess', img: '/src/assets/bugs/guess.png', price: 14000, category: 'bugs', information: 'Рюкзак выполнен из искусственной кожи. Детали: застежка на молнии, внутри 1 карман на молнии, 1 открытый карман для гаджета, 1 внешний карман на молнии, кармана на молнии, 2 скрытых кармана на молнии в спинке рюкзака, текстильные плечевые ремни, крепление для ручки чемодана.'},
        {name: 'Armani blue', img: '/src/assets/glasses/armani.png', price: 14000, category: 'glasses'},
        {name: 'Burberry fashion', img: '/src/assets/glasses/burberry.png', price: 56000, category: 'glasses'},
        {name: 'Ray-ben classic', img: '/src/assets/glasses/ray-ben.png', price: 18000, category: 'glasses'},
        {name: 'wainer', img: '/src/assets/watches/wainer.png', price: 230000, category: 'watches'},
        {name: 'casio', img: '/store/src/assets/watches/casio.png', price: 220000, category: 'watches'},
        {name: 'U.S. Polo', img: '/src/assets/watches/US POLO.png', price: 225000, category: 'watches'},
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
      isVisibleModal: false,
      isVisibleLogin: false,
      actualItem: {},
      cart: [],
    }
  },
  computed: {
    isVisibleLogin: function() {
      return this.$store.state.isVisibleLogin;
    }
  },
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
      }
    },
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
  watch: {
  },
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
      <div class="path hover"><router-link to="/store" style="text-decoration: none; color: #FFF">Главное/ Каталог</router-link></div>
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
          <li class="list" @click="ChooseCategory(this.catalog)">все</li>
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
          <VCard :name="item.name" :img="item.img" :price="item.price" @click="openModal(item)"></VCard>
        </div>
        <div class="popup-wrapper" v-if="isVisibleModal">
          <VPopup :item="this.actualItem"></VPopup>
          <i class="material-icons close" @click="closeModal()"></i>
        </div>
        <div class="login" v-if="isVisibleLogin">
          <VLoginPage></VLoginPage>
          <i class="material-icons close closeLogin" @click="closeLogin()"></i>
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
.close{
  position: fixed;
  top: 5vh;
  right: 22vw;
  color: #fff;
  cursor: pointer;
}
.closeLogin{
  position: fixed;
  top: 20vh;
  right: 30vw;
  color: #fff;
  cursor: pointer;
}
.popup-wrapper{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.login{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>