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
    <div class="new_collection-sector">
      <div class="collection-container">
        <div class="title">Сезон 2023/24</div>
        <hr class="line">
        <div class="cards" id="new_collection">
          <div class="card">
            <img src="public/watches/model2.png" alt="model" class="card-photo">
            <div class="info">
              <p>DOLCE GABBANA 7</p>
              <p>480 000 руб.</p>
            </div>
          </div>
          <div class="card">
            <img src="src/assets/watches/model1.png" alt="model" class="card-photo">
            <div class="info">
              <p>DOLCE GABBANA 7</p>
              <p>365 000 руб.</p>
            </div>
          </div>
          <div class="card">
            <img src="src/assets/watches/model3.png" alt="model" class="card-photo">
            <div class="info">
              <p>DOLCE GABBANA 7</p>
              <p>520 000 руб.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="collection-container-photo">
        <p class="title">Новая коллекция</p>
        <hr class="line">
        <button type="button" class="catalog-btn"><router-link to="/catalog" style="text-decoration: none; color: #fff">Каталог</router-link></button>
      </div>
    </div>
    <div class="new_collection-sector">
      <div class="collection-container-photo-1">
      </div>
      <div class="collection-container">
        <div class="title">коллекция 2023</div>
        <hr class="line">
        <div class="description">Коллекция мужских аксессуаров Dolce & Gabbana на 2023 год представляет собой смелое сочетание классических и современных элементов, созданных с использованием высококачественных материалов и мастерством итальянских ремесленников.

          Одним из основных трендов коллекции является использование ярких и насыщенных цветов. Вы найдете аксессуары в ярких оттенках, таких как красный, оранжевый, желтый и синий. Это добавляет яркости и стиля вашему образу.

          Коллекция также включает в себя разнообразные аксессуары для мужчин, такие как сумки, кошельки, ремни, очки, шарфы и часы. Они выполнены из премиальных материалов, таких как кожа, замша и металл, что обеспечивает высокое качество и долговечность каждого изделия.</div>
        <button type="button" class="collection-btn"><a href="#new_collection" style="text-decoration: none; color: #fff">Посмотреть коллекцию</a></button>
      </div>
    </div>
    <div class="brands">
      <div class="title">brands</div>
      <hr class="line">
      <div class="brands-logo">
        <div class="card">
          <img src="src/assets/hermes-logo.jpg" alt="logo" class="brand-logo">
        </div>
        <div class="card">
          <img src="src/assets/henderson.jpg" alt="logo" class="brand-logo">
        </div>
        <div class="card">
          <img src="src/assets/$_57.jpg" alt="logo" class="brand-logo">
        </div>
        <div class="card">
          <img src="src/assets/georgio-armani-logo.png" alt="logo" class="brand-logo">
        </div>
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
  background: linear-gradient(0deg, rgba(15, 15, 15, 0.50) 0%, rgba(15, 15, 15, 0.50) 100%), url('src/assets/landing_img.jpg'), lightgray 50%;
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
.new_collection-sector{
  display: flex;
  background: #000;
  height: 650px;
  color: #FFFFFF;
}
.collection-container{
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
}
.collection-container-photo{
  width: 40%;
  background-image: url('src/assets/new_collection.png');
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title{
  margin-top: 80px;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Playfair Display', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
.catalog-btn{
  margin: 0 auto;
  display: inline-flex;
  padding: 12px 28px;
  align-items: center;
  gap: 10px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #FFFFFF;
  cursor: pointer;
}
.catalog-btn:hover, .collection-btn:hover{
  background-color: #1F1F1F;
  padding: 14px 30px;
}
.collection-btn{
  padding: 12px 28px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  color: #FFFFFF;
  font-family: 'PT Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background: transparent;
  border: 1px solid #FFFFFF;
  cursor: pointer;
}
.line{
  margin: 0 auto;
  width: 200px;
  margin-bottom: 40px;
  margin-top: 30px;
}
.cards{
  padding: 20px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card{
  display: flex;
  flex-direction: column;
  color: #FFF;
  font-family: 'Playfair Display', sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 5px;
  width: 210px;
}
.card:hover{
  background: #1F1F1F;
  padding: 5px;
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
.collection-container-photo-1{
  width: 40%;
  background-image: url('public/new_collection1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.brands{
  height: 360px;
  display: flex;
  flex-direction: column;
  background: #0F0F0F;
}
.brands-logo{
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.brand-logo{
  width: 200px;
  height: 100px;
}
</style>
