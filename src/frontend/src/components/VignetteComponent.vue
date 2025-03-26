<template>
    <div class="vignette">
        <h2>{{ vignette.titre }}</h2>
        <button @click="voirEpisodes">Voir</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { Ivignette } from '@/interfaces/vignette';

export default defineComponent({
    name: 'vignette',
    props: {
        vignette: {
            type: Object as PropType<Vignette>,
            required: true
        }
    },
    methods: {
        voirEpisodes() {
            alert(`Affichage des épisodes de ${this.vignette.titre}`);
        }
    }
});
</script>

<style scoped>
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