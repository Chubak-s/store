<script>
  export default {
    name: 'v-main-wrapper',
    components: {

    },
    props: {},
    data(){
      return {
        title: 'Main wrapper'
      }
    },
    computed:{

    },
    methods: {

    },
    watch: {

    },
    mounted() {
    }
  }
</script>

<template>
  <div class="v-main-wrapper">
    <div class="Jumbotron">
      <div class="logo_jumbotron">
        <div class="content">
          <p class="logo">PORTEN</p>
          <hr>
          Москва
        </div>
      </div>
      <div class="description">
        Магазин PORTEN уже давно существует на рынке Москвы и завоевал репутацию надежного поставщика брендовых аксессуаров. Каждый товар в магазине тщательно отобран и соответствует высоким стандартам качества. Профессиональные сотрудники магазина всегда готовы помочь вам выбрать идеальный аксессуар и предоставить консультацию по уходу за ним.
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-main-wrapper{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PT Sans', sans-serif;
}
.Jumbotron{
  height: 600px;
  width: 100%;
  background: linear-gradient(0deg, rgba(15, 15, 15, 0.50) 0%, rgba(15, 15, 15, 0.50) 100%), url('public/landing_img.jpg'), lightgray 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.logo_jumbotron{
  border: 2px solid #fff;
  color: #FFF;
  text-align: center;
  font-size: 22px;
  margin: 50px auto 20px auto;
}
.content{
  padding: 80px 20px;
}
.logo{
  font-size: 64px;
  font-weight: 700;
}
.description{
  width: 500px;
  color: #FFF;
  text-align: center;
  font-family: 'PT Sans', sans-serif;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  margin: 0 auto;
}
</style>