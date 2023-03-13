<template>
  <div id="app">
    <Nav/>
    <router-view />
    
    <!-- Custom language switcher -->
    <LanguageSwitcher />
  </div>
</template>

<script>
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import Nav from '@/components/Nav.vue';

export default {
  components: {
    LanguageSwitcher,
    Nav
  }
}

</script>

<style lang="scss">
@import './assets/scss/main.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
