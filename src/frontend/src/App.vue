<template>
    <Header />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup lang="ts">
    import Header from "./components/HeaderComponent.vue";
    import Footer from "./components/FooterComponent.vue";
</script>

<style setup lang="css">
    body {
        padding: 0;
        margin: 0;
        background-image: url(../src/assets/images/image-mesh-gradient.png);
        background-size: cover;
        background-attachment: fixed;
        /* background: linear-gradient(-45deg, #ff007f, #ff6a00, #00d2ff, #8a2be2); */
        /* background-size: 200% 200%; */
        /* animation: gradient 10s ease infinite; */
        font-family: 'Georgia', sans-serif;
    }
</style>
