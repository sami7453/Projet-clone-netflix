<template>
    <section>
        <h2>Movies</h2>
        <CarouselComponent v-if="movies.length > 0">
            <VideoComponent v-for="movie in movies" :key="movie.id" :data="movie" />
        </CarouselComponent>
        <p v-else>No movies available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import VideoComponent from "../components/VideoComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type VideoInterface from "../interfaces/VideoInterface";

    const movies = ref<VideoInterface[]>([]);

    const fetchMovies = async () => {
        try {
            const response = await fetch("http://localhost:3000/movies");
            if (!response.ok) { throw new Error("Failed to fetch movies"); }
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
 