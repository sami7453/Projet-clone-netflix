<template>
    <section>
        <h2>Series</h2>
        <CarouselComponent v-if="series.length > 0">
            <VideoCardComponent v-for="item in series" :key="item.id" :item="item" />
        </CarouselComponent>
        <p v-else>No series available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import VideoCardComponent from "../components/VideoCardComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type VideoCardInterface from "../interfaces/VideoCardInterface";

    const series = ref<VideoCardInterface[]>([]);

    const fetchSeries = async () => {
        try {
            const response = await fetch("http://localhost:3001/series");
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
