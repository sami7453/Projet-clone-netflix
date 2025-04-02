<template>
    <button :id="data.id" :type="data.type ? data.type : 'button'" :class="data.class ? data.class : ''">
        {{ data.textContent }}
    </button>
</template>

<script setup lang="ts">
    import type ButtonInterface from "../interfaces/ButtonInterface";

    interface ButtonComponentProperties {
        data: ButtonInterface
    }

    defineProps<ButtonComponentProperties>();
</script>

<style scoped lang="css">
    button {
        background: #e50914;
        color: white;
        padding: 0.75rem 1.5rem;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s;
    }

    button:hover {
        background: #f6121d;
    }
</style>
