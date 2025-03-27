<template>
    <div class="vignette">
        <h2>{{ vignette.titre }}</h2>
        <ButtonComponent :data="buttonData" @click="voirEpisodes" />
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Vignette as VignetteType } from '../interfaces/VignetteInterface';
import ButtonComponent from '../components/ButtonComponent.vue';
import type ButtonInterface from '../interfaces/ButtonInterface';

export default defineComponent({
    name: 'vignette',
    components: { ButtonComponent },
    props: {
        vignette: {
            type: Object as PropType<VignetteType>,
            required: true
        },
        buttonText: {
            type: String,
            required: true
        }
    },
    computed: {
        buttonData(): ButtonInterface {
            return {
                id: 'voir-btn-' + this.vignette.titre.replace(/\s+/g, '-').toLowerCase(),
                type: 'button',
                class: '',
                textContent: this.buttonText
            };
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
