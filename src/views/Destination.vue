<template>
    <div class="dest">
        <div class="container">
            <h2 class="dest__title"> {{$t('title') }} </h2>
            <div class="row">
                <div class="dest__col" v-for="(item, i) in list" :key="i">
                    <img src="../assets/images/image1.png" alt="card" class="dest__img" />
                    <div class="dest__info">{{ item }}<span>Indonesia</span></div>

                </div>
            </div>
        </div>
    </div>
</template> 
<script>
export default{
    data() {
    return{list:["Sea","Mountains","Lakes","Rain"],};
    }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.dest{
    margin-top: 80px;
    &__col{
        position: relative;
        @include col(3);
    
    }
    &__title {
        margin-bottom: 50px;
        font-size: 36px;
        line-height: 50px;
        color: #000000;
    }
    &__img {
        border-radius: 6px;
        // position: relative;
    }
    &__info{
        width: 120px;
        height: 55px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 15px;
        border-top-right-radius: 6px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-weight: 600;
        font-size: 17px;
        line-height: 25px;
        color: #042521;
        span{
            font-weight: 400;
        }


    }
}
</style>