<template>
    <section>
        <h2>Movies</h2>
        <CarouselComponent v-if="movies.length > 0">
            <VideoCardComponent v-for="item in movies" :key="item.id" :item="item" />
        </CarouselComponent>
        <p v-else>No movies available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import VideoCardComponent from "../components/VideoCardComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type VideoCardInterface from "../interfaces/VideoCardInterface";

    const movies = ref<VideoCardInterface[]>([]);

    const fetchMovies = async () => {
        try {
            const response = await fetch("http://localhost:3000/movies");
            movies.value = await response.json();
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    onMounted(fetchMovies);
</script>

<style scoped lang="css">
    section {
        padding: 3rem;
    }
</style>
