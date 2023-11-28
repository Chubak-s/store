<script>
export default {
  name: 'v-card',
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
    <img :src=img alt="model" class="card-photo">
    <div class="info">
      <p>{{name}}</p>
      <p>{{price}} руб.</p>
    </div>
  </div>
</template>

<style scoped>
.v-card{
  display: flex;
  flex-direction: column;
  color: #FFF;
  font-family: 'Playfair Display', sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  width: 210px;
  height: 400px;
}
.v-card:hover{
  background: #1F1F1F;
  padding: 0 5px 5px 5px;
}
.info{
  margin-top: 15px;
  color: #FFF;
  font-family: 'Playfair Display', sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: column;
}
.card-photo{
  padding: 30px 0 30px 0;
  background: #191B1C;
}
</style>