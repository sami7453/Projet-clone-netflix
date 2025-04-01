<template>
    <div class="vignette">
        <h2>{{ vignette.title }}</h2>
    </div>
</template>

<script setup lang="ts">
    import VignetteInterface from '../interfaces/VignetteInterface';

    interface VignetteComponentProperties {
        vignette: VignetteInterface
    }

    defineProps<VignetteComponentProperties>();
</script>

<style scoped lang="css">
    .vignette {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        max-width: 600px;
        margin: 10px 0;
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #ffffff26;
    }
</style>
