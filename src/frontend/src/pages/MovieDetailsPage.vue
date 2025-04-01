<template>
    <section class="poster">
        <img src="../assets/vue.svg" alt="Movie poster">
    </section>
    <section class="infos">
        <h1>{{ title }}</h1>
        <div class="conteneur_liste">
            <Vignette v-for="(season, index) in seasons" :key="index" :vignette="season" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import Vignette from "../components/VignetteComponent.vue";
    import type VignetteInterface from "../interfaces/VignetteInterface";

    const title = "Breaking Bad";
    const seasons: VignetteInterface[] = [
        {
            title: "Saison 1",
            poster: "../assets/vue.svg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc tincidunt tincidunt"
        },
        {
            title: "Saison 2",
            poster: "../assets/vue.svg", // Example image, adjust as necessary
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            title: "Saison 3",
            poster: "../assets/vue.svg", // Example image, adjust as necessary
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];
</script>

<style lang="css">
    .poster {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .poster img {
        max-width: 80%;
        max-height: 80%;
        margin: 10%;
        object-fit: contain;
    }

    .infos {
        width: 50%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        scroll-behavior: smooth;
        overflow-y: auto;
        height: 100vh;
    }

    .infos h1 {
        font-size: 2em;
        text-align: center;
    }

    .conteneur_liste {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    button {
        padding: 10px 20px;
        background-color: #ffffff26;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>
