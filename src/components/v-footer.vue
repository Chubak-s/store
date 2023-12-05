<script>
export default {
  name: 'v-footer',
  components: {},
  props: {},
  data(){
    return {

    }
  },
  computed:{},
  methods: {
  },
  watch: {},
  mounted(){},
}
</script>

<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
  <div class="v-footer">
    <div class="footer-first">
      <div class="description">
        <div class="title">о магазине</div>
        <p>В магазине Porten вы найдете только высококачественные и роскошные изделия. Каждый аксессуар изготовлен с использованием лучших материалов, таких как натуральная кожа, металл и высокотехнологичные ткани. Комбинация качественного исполнения и изысканного дизайна делает каждый аксессуар уникальным и привлекательным.</p>
      </div>
      <div class="categories">
        <div class="title">категории</div>
        <div class="categories-names">
          <div class="categories-name" >часы</div>
          <div class="categories-name" >ремни</div>
          <div class="categories-name" >рюкзаки</div>
          <div class="categories-name" >браслеты</div>
          <div class="categories-name" >очки</div>
        </div>
      </div>
      <div class="mailing">
        <div class="title">рассылка</div>
        <p>Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей и получать актуальную информацию.</p>
        <div class="mail-enter-sector">
          <input type="email" name="email" class="email" placeholder="Ваша почта">
          <input type="submit" value="подписаться" class="mail-enter">
        </div>
      </div>
    </div>
    <div class="footer-second">
      <p>© 2023 Все права защищены</p>
      <div id="info">Porten.info</div>
    </div>
  </div>
</template>

<style scoped>
.v-footer{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'PT Sans', sans-serif;
  color: #FFFFFF;
}
.footer-first{
  background-image: url('/src/assets/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  padding: 60px 100px;
  column-gap: 50px;
}
.title{
  font-family: 'Playfair Display', sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.description{
  width: 50%;
}
.categories{
  width: 50%;
}
.categories-names{
  display: flex;
  gap: 20px;
  width: 100%;
  flex-wrap: wrap;
}
.categories-name{
  background: #0F0F0F;
  color: #D0D0D0;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  display: inline-flex;
  padding: 10px 20px;
  align-items: center;
}
.mail-enter-sector{
  margin-top: 20px;
}
.email{
  width: 210px;
  height: 42px;
  padding: 10px;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.40);
  border: none;
  color: #FFFFFF;
}
.email::placeholder{
  color: #FFFFFF66;
}
.email:focus{
  outline: none;
  box-shadow: none;
}
.mail-enter{
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.7px;
  display: inline-flex;
  padding: 10px 20px;
  align-items: center;
  background: #0F0F0F;
  color: #FFFFFF;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
}
.footer-second{
  background: #0F0F0F;
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
  color: #D0D0D0;
  font-family: 'PT Sans', sans-serif;
  font-size: 12px;
}
</style>