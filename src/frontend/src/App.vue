<template>
    <HeaderComponent />
    <main>
        <RouterView />
    </main>
    <FooterComponent />
</template>

<script setup lang="ts">
    import HeaderComponent from "./components/HeaderComponent.vue";
    import FooterComponent from "./components/FooterComponent.vue";
</script>

<style lang="css">
</style>
