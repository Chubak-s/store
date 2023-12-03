<script>
export default {
  name: 'v-card-cart',
  components: {},
  props: {
    name: {
      type: String,
      required: true
    },
    img:{
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
  },
}
</script>

<template>
  <div class="v-card">
    <img :src=img alt="model" >
    <div class="info">
      <div class="name">{{name}}</div>
      <div class="price">{{price}} руб.</div>
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
  padding: 5px;
}
.info{
  width: 100%;
  margin-left: 20px;
  color: #FFF;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
}
.price{
  text-align: right;
}
</style>