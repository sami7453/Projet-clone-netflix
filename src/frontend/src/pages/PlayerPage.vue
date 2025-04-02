<template>
    <section>
        <video></video>
    </section>
    <section class="ratings">
        <p v-for="item in ratings" :key="item">{{ item }}</p>
    </section>
    <section class="actors">
        <p v-for="item in actors" :key="item">{{ item }}</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();
    const ratings = ref<string[]>([]);
    const actors = ref<string[]>([]);

    const fetchRatings = async () => {
        try {
            const videoId = route.params.id;
            if (!videoId) { return };

            const response = await fetch(`http://localhost:3001/ratings/movies/${videoId}`);
            ratings.value = await response.json();
        } catch (error) {
            console.error("Error fetching ratings:", error);
        }
    };

    const fetchActors = async () => {
        try {
            const videoId = route.params.id;
            if (!videoId) { return };

            const response = await fetch(`http://localhost:3001/actors/movies/${videoId}`);
            actors.value = await response.json();
        } catch (error) {
            console.error("Error fetching actors:", error);
        }
    }

    onMounted(() => {
        fetchRatings();
        fetchActors();
    });
</script>

<style scoped lang="css">
    
</style>
