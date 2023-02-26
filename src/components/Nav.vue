<template>
    <nav class="nav">
        <div class="container nav__item">
            <router-link to="/">
                <img src="@/assets/images/logo.png" alt="logo">
            </router-link>
            <ul class="nav__list">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/dest">Destinations</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/partners">Partner</router-link></li>
                <li><Btn route="/login" link="Login" btn="login" /></li>
                <li><Btn route="/reg" link="Register" btn="login"/></li>
                
            </ul>

        </div>
    </nav>
</template>
<script>
import Btn from '@/components/Btn.vue';
    export default {
        components: { Btn },
        };
    
</script>
<style lang="scss">
.nav{
    margin-top: 40px;
    &__item{
        display: flex;
        justify-content: space-between;
    }
    &__list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap:30px;
    }
}
.login{
    width: 140px;
    height: 45px;
}
</style>