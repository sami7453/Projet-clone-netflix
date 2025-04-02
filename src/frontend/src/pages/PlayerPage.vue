<template>
    <section>
        <video controls></video>
    </section>

    <section class="ratings">
        <h2>Ratings</h2>
        <ul v-if="ratings.length > 0">
            <li v-for="item in ratings" :key="item.id">
                {{ item.rating }}/5: {{ item.description }}
            </li>
        </ul>
        <p v-else>No ratings available at the moment.</p>
    </section>

    <section class="actors">
        <h2>Actors</h2>
        <ul v-if="actors.length > 0">
            <li v-for="item in actors" :key="item.id">
                {{ item.first_name }} {{ item.last_name }}
            </li>
        </ul>
        <p v-else>No actors available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import { useRoute } from "vue-router";

    const route = useRoute();
    const ratings = ref<Array<{ rating: string, description: string, id: number }>>([]);
    const actors = ref<Array<{ first_name: string, last_name: string, id: number }>>([]);

    const fetchRatings = async () => {
        try {
            const videoId = route.params.id;
            if (!videoId) { return };

            const response = await fetch(`http://localhost:3000/ratings/movies/${videoId}`);
            ratings.value = await response.json();
        } catch (error) {
            console.error("Error fetching ratings:", error);
        }
    };

    const fetchActors = async () => {
        try {
            const videoId = route.params.id;
            if (!videoId) { return };

            const response = await fetch(`http://localhost:3000/actors/movies/${videoId}`);
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
    section {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    video {
        width: 100%;
        border-radius: 8px;
        outline: none;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #333;
        text-align: left;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 10px;
        background: white;
        margin-bottom: 8px;
        border-radius: 6px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        font-size: 1rem;
        color: #555;
    }

    .ratings li,
    .actors li {
        border-left: 5px solid #e50914;
    }
</style>
