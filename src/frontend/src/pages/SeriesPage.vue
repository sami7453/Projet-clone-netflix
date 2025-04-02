<template>
    <section>
        <h2>Series</h2>
        <CarouselComponent v-if="series.length > 0">
            <VideoComponent v-for="serie in series" :key="serie.id" :data="serie" />
        </CarouselComponent>
        <p v-else>No series available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import VideoComponent from "../components/VideoComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type VideoInterface from "../interfaces/VideoInterface";

    const series = ref<VideoInterface[]>([]);

    const fetchSeries = async () => {
        try {
            const response = await fetch("http://localhost:3000/series");
            if (!response.ok) { throw new Error("Failed to fetch series"); }
            series.value = await response.json();
        } catch (error) {
            console.error("Error fetching series:", error);
        }
    };

    onMounted(fetchSeries);
</script>

<style scoped lang="css">
    section {
        padding: 3rem;
    }
</style>
