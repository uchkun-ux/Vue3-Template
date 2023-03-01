<template>
  <Nav/>
  <router-view />
  <Footer/>

</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {Nav,Footer},
};

</script> 

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
