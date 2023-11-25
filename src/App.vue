<script>
import vMainWrapper from './components/v-main-wrapper.vue'
import VHeader from "./components/v-header.vue";
import vFooter from './components/v-footer.vue'
export default {
  name: 'app',
  components: {
    VHeader,
    vMainWrapper,
    vFooter,
  }
}
</script>

<template>
  <div id="app">
    <v-header></v-header>
    <v-main-wrapper></v-main-wrapper>
    <v-footer></v-footer>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
