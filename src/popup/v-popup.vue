<script>
  export default {
    name: 'v-popup',
    props:{
      item: {
        type: Object,
        required: true
      },
    },
    data(){
      return {}
    },
    computed:{},
    methods:{
      addToCart(){
        this.$store.state.cart.push(this.item);
      },
      addToLiked(){
        this.$store.state.liked.push(this.item);
      }
    }
  }
</script>

<template>
  <div class="v-popup">
    <div class="v-popup_img">
      <img :src="this.item.img" alt="img">
    </div>
    <div class="v-popup_content">
      <div class="name">{{this.item.name}}</div>
      <div class="category">{{this.item.category}}</div>
      <div class="price">{{this.item.price}} ₽</div>
      <div class="buttons">
        <div class="addToCart-btn" @click="addToCart">Добавить в корзину</div>
        <div class="like-btn" @click="addToLiked"><i class="material-icons like">favorite</i></div>
      </div>
      <div class="info">
        <span style="font-size: 28px; font-weight: bold">О товаре</span><br>
        {{this.item.information}}
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-popup{
  display: flex;
  color: #222;
  font-size: 18px;
  position: fixed;
  background: #FFF;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
  width: 50vw;
  font-family: 'PT Sans', sans-serif;
}
.v-popup_img{
  height: 100%;
}
img{
  height: 100%;
}
.v-popup_content{
  padding-left: 20px;
}
.name{
  margin-top: 40px;
  font-size: 36px;
  font-weight: bold;
}
.category{
  margin-top: 15px;
  font-size: 20px;
  color: #969696;
}
.price{
  margin-top: 10px;
  font-size: 28px;
}
.buttons{
  display: flex;
  column-gap: 10px;
  margin-top: 20px;
}
.addToCart-btn{
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.7px;
  display: inline-flex;
  padding: 10px 10px;
  align-items: center;
  background: #0F0F0F;
  color: #FFFFFF;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
}
.addToCart-btn:active{
  background: #969696;
}
.like-btn{
  color: #EF3A27;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.like-btn:active{
  background: #969696;
}
.like{
  padding: 2px 7px;
}
.info{
  margin-top: 30px;
  font-size: 14px;
  padding-right: 30px;
}
</style>