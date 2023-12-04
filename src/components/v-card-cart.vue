<script>
export default {
  name: 'v-card-cart',
  components: {},
  props: {
    item:{
      type: Object,
      required: true,
    },
    cart:{
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      counter: 0,
    }
  },
  computed: {},
  methods: {
    add(){
      this.counter++;
      this.$store.state.cart.push(this.item);
    },
    remove(){
      if (this.counter>0){
        this.counter--;
        for (let i=0; i<this.cart.length; i++){
          if (this.cart[i]==this.item){
            this.$store.state.cart.splice(i, 1);
          }
        }
      }
    },
    deleteAll(){
      while (this.counter!==0){
        for (let i=0; i<this.cart.length; i++){
          if (this.cart[i].name===this.item.name){
            this.$store.state.cart.splice(i, 1);
          }
        }
        this.counter--;
      }
    },
    like(){
      this.$store.state.liked.push(this.item);
    }
  },
  watch: {},
  mounted() {
    for (let i=0; i<this.cart.length; i++){
      if (this.cart[i]==this.item){
        this.counter++;
      }
    }
  },
}
</script>

<template>
  <div class="v-card">
    <img :src=this.item.img alt="model" >
    <div class="left-section">
      <div class="info">
        <div class="name">{{this.item.name}}</div>
        <div class="price">{{this.item.price}} руб.</div>
      </div>
      <div class="bottom-section">
        <div class="count-btn">
          <div class="btn" @click="remove">-</div>
          <div class="btn">{{counter}}</div>
          <div class="btn" @click="add">+</div>
        </div>
        <div class="manage-btn">
          <div class="delete"><i class="material-icons" @click="deleteAll">delete</i></div>
          <div class="liked"><i class="material-icons like" @click="like">favorite</i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-card{
  display: flex;
  color: #FFF;
  font-family: 'PT Sans', sans-serif;
  cursor: pointer;
  height: 250px;
  width: 50vw;
}
.v-card:hover{
  background: #1F1F1F;
}
.left-section{
  width: 100%;
  margin-left: 20px;
}
.info{
  color: #FFF;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
.price{
  text-align: right;
}
.bottom-section{
  display: flex;
  margin-top: 150px;
}
.count-btn{
  display: flex;
  font-size: 24px;
  border: 1px solid #fff;
  width: 150px;
  justify-content: space-between;
}
.btn{
  width: 50px;
  text-align: center;
  border: 1px solid #fff;
}
.manage-btn{
  display: flex;
  width: 370px;
  justify-content: end;
  column-gap: 20px;
}
.delete:active, .liked:active{
  color: #969696;
}
</style>