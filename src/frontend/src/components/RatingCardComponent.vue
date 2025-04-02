<template>
    <article>
        <p>{{ data.title }}</p>
    </article>
</template>

<script setup lang="ts">
    import type RatingInterface from "../interfaces/RatingInterface";

    interface RatingComponentProperties {
        data: RatingInterface
    }

    defineProps<RatingComponentProperties>();
</script>

<style scoped lang="css">
</style>
