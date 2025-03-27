<template>
    <Header />
        <router-view />
    <Footer />
</template>

<script setup lang="ts">
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<style lang="css">
body {
    padding: 0;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('./assets/images/image-mesh-gradient.png');
    background-size: cover;
    background-attachment: fixed;
}
</style>
