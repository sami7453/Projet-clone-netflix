<template>
    <section class="poster">
        <img src="../assets/vue.svg" alt="Movie poster">
    </section>
    <section class="infos">
        <h1>{{ title }}</h1>
        <div class="episode-list">
            <Vignette v-for="(season, index) in seasons" :key="index" :vignette="season" />
        </div>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import Vignette from "../components/VignetteComponent.vue";
    import type VignetteInterface from "../interfaces/VignetteInterface";

    const title = ref("Breaking Bad");
    const seasons = ref<VignetteInterface[]>([]);

    onMounted(async () => {
        try {
            const response = await fetch("");
            const data = await response.json();

            seasons.value = data.seasons.map((season: any) => ({
                title: season.name,
                poster: ``,
                description: season.overview || "Description non disponible"
            }));
        } catch (error) {
            console.log(error);
        }
    });
</script>

<style scoped lang="css">
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
    }

    .infos h1 {
        font-size: 2em;
        text-align: center;
    }

    .episode-list {
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
