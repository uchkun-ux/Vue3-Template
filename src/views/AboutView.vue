<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 class="dest__title"> {{$t("about") }} </h2>
    {{ $t("message") }}
  </div>
</template>

<style lang="scss">
@import '../assets/scss/main.scss';
// .home{
//   margin-top: 80px;
//   &__title {
//     font-style: normal;
//     font-weight: 700;
//     font-size: 35px;
//     line-height: 80px;
//     color: #202336;
//   }
//   &__text {
//     font-weight: 600;
//     font-size: 22px;
//     line-height: 27px;
//     color: #202336;
//     margin: 50px 0;
//   }
//   .select {
//     border: 0.8px solid #afb0b9;
//     box-sizing: border-box;
//     border-radius: 6px;
//     width: 220px;
//     height: 55px;
//     font-size: 15px;
//     line-height: 32px;
//     display: flex;
//     align-items: center;
//     color: #4a4c53;
//     mix-blend-mode: normal;
//     padding: 10px;
//     margin-bottom: 50px;
//   }
//   &__btn {
//     width: 180px;
//     height: 50px;
//     // margin-top: 20px;
//   }
//   &__img {
//     width: 100%;
//     // height: 50px;
//     // margin-top: 20px;
//   }
//   .home__left {
//   display: flex;
//   flex-direction: column;
//   }
//   &__left,
//   &__right{
//     @include col(6);
//     @include col-lg(8);
//   }
//   @media (max-width:992px){
//     .row {
//       justify-content: center;
//       gap: 30px;
//     }
//   }
// }

</style>
