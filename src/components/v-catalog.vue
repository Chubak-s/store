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
        {name: 'Phillip Plein black', img: "https://github.com/Chubak-s/store/blob/main/src/assets/bracelets/phillip-plein.png?raw=true", price: 34800, category: 'bracelets', information: 'Состав Гипоаллергенная нержавеющая сталь - 100%; Сезон мульти; Цвет черный; Застежка на замке; Страна производства Китай'},
        {name: 'Phillip Plein grey', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/bracelets/pp-white.png?raw=true', price: 34800, category: 'bracelets', information: 'Состав Гипоаллергенная нержавеющая сталь - 100%; Сезон мульти; Цвет серый; Застежка на замке; Страна производства Китай'},
        {name: 'Phillip Plein Golden', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/bracelets/pp-golden.png?raw=true', price: 34800, category: 'bracelets', information: 'Состав Материал 1: Нержавеющая сталь - 100%; Материал 2: Кристаллы - 100%; Ширина 1.2 см; Длина 22 см; Сезон мульти; Цвет золотой; Застежка на замке; Страна производства Китай'},
        {name: 'Harmont Blaine', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/belts/harmont-blaine.png?raw=true', price: 9000, category: 'belts', information: 'Состав  Натуральная кожа - 100%; Ширина  3 см; Сезон  мульти; Цвет  сний; Узор  однотонный; Цвет фурнитуры  серебряный; Страна производства  Италия'},
        {name: 'Hugo', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/belts/hugo.png?raw=true', price: 8000, category: 'belts', information: 'Состав  Натуральная кожа - 100%; Ширина  3 см; Сезон  мульти; Цвет  черный; Узор  однотонный; Цвет фурнитуры  серебряный; Страна производства  Италия'},
        {name: 'Etro', img: "https://github.com/Chubak-s/store/blob/main/src/assets/belts/etro.png?raw=true", price: 34000, category: 'belts', information: 'Состав  ПВХ - 100%; Ширина  3.5 см; Сезон  мульти; Цвет  коричневый; Узор  однотонный; Цвет фурнитуры  серебряный; Страна производства  Италия'},
        {name: 'Piquadro', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/bugs/piquadro.png?raw=true', price: 36000, category: 'bugs', information: 'Рюкзак выполнен из плотной ткани на основе полиэстера. Особенности: одно отделение на молнии, внутри один карман на молнии, один карман без застежки, карманы для канцелярии, отсек для ноутбука 14 дюймов, два внешних кармана, два боковых кармана без застежки, уплотненная спинка, регулируемые плечевые ремни.'},
        {name: 'Igor York', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/bugs/igor-york.png?raw=true', price: 28000, category: 'bugs', information: 'Рюкзак из натуральной кожи с клапаном. На спинке карман на молнии, внутри карман на молнии и карман на кнопке. Ремни регулируются. Данный товар является частью проекта Lamoda planet - специального раздела нашего каталога, где мы собрали экологичные, этичные, инклюзивные и благотворительные товары. Товар произведен в стране присутствия Lamoda, что позволяет поддерживать развитие локальных фабрик, мастеров и швей. Покупая этот товар, вы также вносите свой вклад в сокращение углеродного следа.'},
        {name: 'Guess', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/bugs/guess.png?raw=true', price: 14000, category: 'bugs', information: 'Рюкзак выполнен из искусственной кожи. Детали: застежка на молнии, внутри 1 карман на молнии, 1 открытый карман для гаджета, 1 внешний карман на молнии, кармана на молнии, 2 скрытых кармана на молнии в спинке рюкзака, текстильные плечевые ремни, крепление для ручки чемодана.'},
        {name: 'Armani blue', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/glasses/armani.png?raw=true', price: 14000, category: 'glasses'},
        {name: 'Burberry fashion', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/glasses/burberry.png?raw=true', price: 56000, category: 'glasses'},
        {name: 'Ray-ben classic', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/glasses/ray-ben.png?raw=true', price: 18000, category: 'glasses'},
        {name: 'wainer', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/watches/wainer.png?raw=true', price: 230000, category: 'watches'},
        {name: 'casio', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/watches/casio.png?raw=true', price: 220000, category: 'watches'},
        {name: 'U.S. Polo', img: 'https://github.com/Chubak-s/store/blob/main/src/assets/watches/US%20POLO.png?raw=true', price: 225000, category: 'watches'},
      ],
      belts: [],
      bracelets: [],
      bugs: [],
      glasses: [],
      watches: [],
      showCategories: false,
      PriceSetting: false,
      actualCatalog: null,
      isVisibleModal: false,
      isVisibleLogin: false,
      actualItem: {},
      cart: [],
      fromPrice: 0,
      toPrice: 10000000,
    }
  },
  computed: {
    isVisibleLogin: function() {
      return this.$store.state.isVisibleLogin;
    }
  },
  methods: {
    sortPriceUp(){
      this.actualCatalog.sort((a, b) => a.price - b.price);
    },sortPriceDown(){
      this.actualCatalog.sort((a, b) => b.price - a.price);
    },
    defaultCatalog(){
      this.actualCatalog.sort((a,b) => {
        const aNAME = a.name.toUpperCase();
        const bNAME = b.name.toUpperCase();
        if (aNAME>bNAME){
          return 1;
        } else if (aNAME<bNAME){
          return -1;
        }
        return 0;
      })
    },
    ChooseCategory(category){
      this.actualCatalog = category;
    },
    toggleSubItems(itemShow) {
      switch (itemShow){
        case 'categories':
          this.showCategories = !this.showCategories;
          break;
        case 'price':
          this.PriceSetting = !this.PriceSetting;
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
    },
    setPrice(){
      this.fromPriceInput = document.querySelector('.price-block[name=fromPrice]');
      this.toPriceInput = document.querySelector('.price-block[name=toPrice]');
      let newCatalog = [];
      this.actualCatalog.forEach(element => {
        if (element.price >= this.fromPriceInput.value && element.price <= this.toPriceInput.value) {
          newCatalog.push(element);
        }
      });
      this.actualCatalog = newCatalog;
      console.log(this.fromPriceInput);
      console.log(this.toPriceInput)
    },
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
        <div class="sort-price-down hover" @click="sortPriceDown">по убыванию цен</div>
        <div class="sort-price-up hover" @click="sortPriceUp">по возрастанию цен</div>
        <div class="sort-popular hover" @click="defaultCatalog">по популярности</div>
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
        <div class="categories-title" @click="toggleSubItems('price')">Цена</div>
        <div class="categories-items" :class="{'show': this.PriceSetting}">
          <div class="prices">
            от<input type="number" name="fromPrice" step="0.01" min="0" required class="price-block">
            до<input type="number" name="toPrice" step="0.01" min="0" required class="price-block">
          </div>
          <button type="submit" class="save" @click="setPrice">Сохранить</button>
        </div>
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
  width: 80%;
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
.prices{
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 14px;
  color: #FFFFFF;
  padding: 10px;
  background: transparent;
  border: 1px solid #FFFFFF;
  cursor: pointer;
}
.price-block{
  width: 30%;
}
.save{
  margin-top: 15px;
  font-size: 16px;
  color: #FFFFFF;
  padding: 5px;
  background: transparent;
  border: 1px solid #FFFFFF;
  cursor: pointer;
}
</style>