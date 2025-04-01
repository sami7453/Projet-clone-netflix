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
        padding: 10px 20px;
        background-color: #f6121d66;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #f6121d99;
    }
</style>
