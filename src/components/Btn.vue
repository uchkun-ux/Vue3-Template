<template>
    <router-link :to="route" class="btn" :class="btn">{{ link }}</router-link>
</template>
<script>
    export default {
        name:"Btn",
        props:{
            route:String,
            link:String,
            btn:String,
        },
    };
</script>

<style lang="scss">
.btn{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1e9007bd;
    border-radius: 8px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    // line-height: 60px;
}
</style>