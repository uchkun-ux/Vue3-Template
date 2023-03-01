<template>
  <div class="home">
    <div class="container">
      <div class="row"> 
        <div class="home__left">
          <h1 class="home__title">Explore and Travel</h1>
          <p1 class="home__text">Holiday finder</p1>
          <select class="select__day">
          <option v-for="(key,i) in list" :key="i">{{ key }}</option>
          </select>
          <select class="select">
          <option v-for="(key,i) in list" :key="i">{{ key }}</option>
          </select>
          <select class="select">
          <option v-for="(key,i) in list" :key="i">{{ key }}</option>
          </select>
          <select class="select">
          <option v-for="(key,i) in list" :key="i">{{ key }}</option>
          </select>
          <Btn route="/" link="Explore" btn="home__btn"/>
        </div>
        <div class="home__right">
          <img class="home__img" src="@/assets/images/thousand1.png" alt="travel">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Btn from '@/components/Btn.vue';
export default {
  components:{Btn},
  data(){
    return{
      list:["City","International","Locale","Native"]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.home{
  margin-top: 80px;
  &__title {
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 80px;
    color: #202336;
  }
  &__text {
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: #202336;
    margin: 50px 0;
  }
  .select,
  .select__day {
    border: 0.8px solid #afb0b9;
    box-sizing: border-box;
    border-radius: 6px;
    width: 220px;
    height: 55px;
    font-size: 15px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #4a4c53;
    mix-blend-mode: normal;
    padding: 10px;
    margin-bottom: 50px;
  }
  &__btn {
    width: 180px;
    height: 50px;
    // margin-top: 20px;
  }
  &__img {
    width: 100%;
    // height: 50px;
    // margin-top: 20px;
  }
  .home__left {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  }
  &__left,
  &__right{
    @include col(6);
    @include col-lg(8);
  }
  @media (max-width:992px){
    .row {
      justify-content: center;
      gap: 30px;
    }
  }
}

</style>

