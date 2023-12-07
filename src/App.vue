<script>
import vMainWrapper from './components/v-main-wrapper.vue'
import vHeader from "./components/v-header.vue";
import vFooter from './components/v-footer.vue';
import vCatalog from './components/v-catalog.vue';
import VLoginPage from "./components/v-login-page.vue";
export default {
  name: 'app',
  components: {
    vHeader,
    vMainWrapper,
    vFooter,
    vCatalog,
    VLoginPage,
  }
}
</script>

<template>
  <div id="app">
    <header>
      <v-header></v-header>
    </header>
    <router-view></router-view>
    <footer>
      <v-footer></v-footer>
    </footer>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
