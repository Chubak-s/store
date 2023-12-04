<script>
import VCardCart from "@/components/v-card-cart.vue";
export default {
  name: 'v-cart',
  components: {VCardCart},
  data(){
    return{
      cart: [],
      count: 0,
      sum: 0,
      deliveryCost: 500,
      counter: {},
      uniqueCart: [],
    }
  },
  methods:{
  },
  computed:{
    summa: function (){
      this.sum = 0;
      for (let item in this.cart) {
        this.sum += this.cart[item].price;
      }
      return this.sum;
    }
  },
  mounted() {
    this.cart = this.$store.state.cart;
    console.log(this.cart);
    this.uniqueCart = this.cart.filter(function(element, index, self) {
      return index === self.indexOf(element);
    });
    this.count = this.cart.length;
    for (let i = 0; i < this.cart.length; i++) {
      if (this.counter[this.cart[i]]) {
        this.counter[this.cart[i]]++;
      } else {
        this.counter[this.cart[i]] = 1;
      }
    }
  },
}
</script>

<template>
  <div class="v-cart">
    <div class="main-bar">
      <router-link to="/" style="text-decoration: none; color: #FFFFFF"><div class="path hover">Главное/Корзина</div></router-link>
      <div class="sort-bar">
        <div class="sort-new hover">по новизне</div>
        <div class="sort-price hover">по цене</div>
        <div class="sort-popular hover">по популярности</div>
      </div>
    </div>
    <div class="main-section">
      <div class="items">
        <div class="title">Корзина</div>
        <div v-for="item in uniqueCart" :key="item.id" class="cart-section">
          <VCardCart :item="item" :cart="cart"></VCardCart>
        </div>
      </div>
      <div class="order">
        <div class="sum-title">Сумма заказа</div>
        <div class="order-info">
          <div class="left-section-order">
            <div v-if="count%10<5 && count%10!==0" class="order-text">{{this.count}} товара на сумму</div>
            <div v-else class="order-text">{{this.count}} товаров на сумму</div>
            <div class="order-text">Стоимость доставки</div>
            <div class="total">Итого: </div>
          </div>
          <div class="right-section-order">
            <div class="sum">{{this.summa}} руб.</div>
            <div class="sum">{{this.deliveryCost}} руб.</div>
            <div class="total-sum">{{this.sum+this.deliveryCost}} руб.</div>
          </div>
        </div>
        <div class="makeOrder" @click="">Перейти к оформлению заказа</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-cart{
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
  margin-left: 10vw;
  margin-right: 10vw;
  justify-content: space-between;
  padding-bottom: 50px;
}
.title{
  color: #FFFFFF;
  font-size: 48px;
  font-family: "PT Sans", sans-serif;
}
.cart-section{
  margin: 50px 0 50px 0;
}
.order{
  font-family: "PT Sans", sans-serif;
  width: 350px;
  background: #191B1C;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 7px rgba(255, 255, 255, 0.2);
  height: 400px;
  color: #FFFFFF;
}
.sum-title{
  font-size: 24px;
}
.order-info{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.right-section-order{
  text-align: right;
}
.left-section-order{
}
.order-text{
  font-size: 18px;
  padding-top: 20px;
}
.sum{
  color: #FFFFFF;
  font-size: 18px;
  padding-top: 20px;
}
.total{
  font-size: 28px;
  padding-top: 40px;
}
.total-sum{
  color: #FFFFFF;
  font-size: 28px;
  padding-top: 40px;
}
.makeOrder{
  margin-top: 40px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-family: "PT Sans",sans-serif;
  font-weight: 500;
  display: inline-flex;
  padding: 20px;
  align-items: center;
  background: #000000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 3px rgba(255, 255, 255, 0.2);
}
.makeOrder:active{
  background: #191B1C;
}
</style>