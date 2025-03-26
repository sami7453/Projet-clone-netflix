<template>
    <Header />
    <main>
        <router-view />
    </main>
    <footer />
</template>

<script setup lang="ts">
import Header from "./components/HeaderComponent.vue";
</script>

<style lang="css">
body {
    padding: 0;
    margin: 0;
}
</style>
