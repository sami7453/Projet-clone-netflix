<template>
    <section class="hero">
        <div class="hero-content">
            <h1>Severance</h1>
            <p>Hit series</p>
            <ButtonComponent :data="watchNowButtonData" />
        </div>
    </section>

    <section v-for="category in categories" :key="category.name" class="carousel-section">
        <h2>{{ category.name }}</h2>
        <CarouselComponent v-if="category.items.length > 0">
            <VideoCardComponent v-for="item in category.items" :key="item.id" :data="item" />
        </CarouselComponent>
        <p v-else>No movies or series available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import ButtonComponent from "../components/ButtonComponent.vue";
    import VideoCardComponent from "../components/VideoComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type ButtonInterface from "../interfaces/ButtonInterface";

    const watchNowButtonData: ButtonInterface = {
        id: "watch-now-button",
        textContent: "Watch now",
        class: "watch-now",
        type: "button"
    }

    const categories = ref([
        { name: "Trending", items: [] },
        { name: "For you", items: [] }
    ]);

    const fetchMovies = async () => {
        try {
            const [trendingResponse, recommendedResponse] = await Promise.all([
                fetch("http://localhost:3000/movies/trending"),
                fetch("http://localhost:3000/movies/recommended")
            ]);

            const trendingMovies = await trendingResponse.json();
            const recommendedMovies = await recommendedResponse.json();

            categories.value[0].items = trendingMovies;
            categories.value[1].items = recommendedMovies;
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    onMounted(fetchMovies);
</script>

<style scoped lang="css">
    .hero {
        width: 100%;
        height: 90vh;
        background: url("../assets/hero-banner.jpg") no-repeat center center/cover;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 4rem;
        position: relative;
        box-sizing: border-box;
        color: white;
    }

    .hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent 60%);
        z-index: 0;
    }

    .hero-content {
        z-index: 1;
        max-width: 700px;
    }

    .hero-content h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .hero-content p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    .carousel-section {
        padding: 2rem 4rem;
    }

    .carousel-section h2 {
        color: var(--text-color);
        margin-bottom: 1rem;
    }
</style>
