<template>
    <router-link :to="route">{{ link }}</router-link>
</template>
<script>
    export default {
        name:"Btn",
        props:{
            route:String,
            link:String,
        },
    };
</script>
