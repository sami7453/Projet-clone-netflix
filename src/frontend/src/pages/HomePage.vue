<template>
    <section class="homepage">
        <section class="hero">
            <div class="hero-content">
                <h1>Severance</h1>
                <p>Hit series</p>
                <button>Watch now</button>
            </div>
        </section>

        <section v-for="category in categories" :key="category.name" class="carousel-section">
            <h2>{{ category.name }}</h2>
            <CarouselWrapper>
                <Card v-for="item in category.items" :key="item.id" :item="item" />
            </CarouselWrapper>
        </section>
    </section>
</template>

<script setup lang="ts">
    import Card from '../components/Card.vue'
    import CarouselWrapper from '../components/CarouselWrapper.vue'

    // import { ref, onMounted } from 'vue'

    // const categories = ref([])

    // onMounted(async () => {
    //   const res = await fetch('http://localhost:3000/api/categories')
    //   categories.value = await res.json()
    // })

    // Sinon avec Express:
    // app.get('/api/categories', async (req, res) => {
    //   const categories = await db.query('SELECT * FROM categories_with_items');
    //   res.json(categories.rows);
    // });

    const categories = [
        {
            name: 'Tendances actuelles',
            items: Array.from({ length: 18 }, (_, i) => ({
                id: i + 1,
                title: `Film ${i + 1}`,
                image: '/assets/hero-banner.jpg',
            })),
        },
        {
            name: 'Recommandé pour vous',
            items: [
                { id: 19, title: 'Le Seigneur des Imports', image: '/assets/hero-banner.jpg' },
                { id: 20, title: 'Stranger Bugs', image: '/assets/hero-banner.jpg' },
                { id: 21, title: 'You vs Vue', image: '/assets/hero-banner.jpg' },
            ],
        },
    ]
</script>

<style scoped lang="css">
    .homepage {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    .hero {
        width: 100%;
        height: 100vh;
        background: url('../assets/hero-banner.jpg') no-repeat center center/cover;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        padding: 4rem;
        position: relative;
        box-sizing: border-box;
        color: white;
    }

    .hero::before {
        content: '';
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

    .hero-content button {
        background: #e50914;
        color: white;
        padding: 0.75rem 1.5rem;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s;
    }

    .hero-content button:hover {
        background: #f6121d;
    }

    .carousel-section {
        padding: 2rem 4rem;
    }

    .carousel-section h2 {
        color: var(--text-color);
        margin-bottom: 1rem;
    }
</style>
