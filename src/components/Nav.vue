<template>
    <nav class="nav">
        <div class="container nav__item">
            <router-link to="/">
                <img src="@/assets/images/logo.png" alt="logo">
            </router-link>
            <ul class="nav__list">
                <li><router-link to="/">{{ $t("nav_home") }}</router-link></li>
                <li><router-link to="/dest">{{ $t("nav_dest") }}</router-link></li>
                <li><router-link to="/about">{{ $t("nav_about") }}</router-link></li>
                <li><router-link to="/partners">{{ $t("nav_part") }}</router-link></li>
                <li><router-link to="/login"><Btn route="/login" link="Login" btn="login" /></router-link></li>
                <li><router-link to="/register"><Btn route="/register" link="Register" btn="login" /></router-link></li>
                
            
                
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
.lang{
    width: 140px;
    height: 45px;
}
</style>