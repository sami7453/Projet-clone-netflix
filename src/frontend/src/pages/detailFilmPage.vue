<template>
    <main>
        <section class="affiche">
            <img src="../src/assets/vue.svg" alt="affiche de la serie">
        </section>
        <section class="infos">
            <h1>{{ titre }}</h1>
            <div class="conteneur_liste">
                <Vignette 
                    v-for="(saison, index) in saisons" 
                    :key="index" 
                    :vignette="saison" 
                    :buttonText="saison.buttonText" 
                />
            </div>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Vignette from '../components/VignetteComponent.vue';

export default defineComponent({
    name: 'Infos',
    components: { Vignette },
    data() {
        return {
            titre: 'Titre de la serie',
            saisons: [
                { titre: 'saison 1', buttonText: 'Voir les épisodes' },
                { titre: 'saison 2', buttonText: 'Voir les épisodes' },
                { titre: 'saison 3', buttonText: 'Voir les épisodes' },
                { titre: 'saison 4', buttonText: 'Voir les épisodes' }
            ] as Array<{ titre: string; buttonText: string }>
        };
    }
});
</script>

<style scoped>
body {
    padding: 0;
    margin: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url('/styles/image-mesh-gradient.png');
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
}

/* Header */
header {
    display: flex;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    height: 50px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #ffffff26
}

/* Contenu principal */
main {
    display: flex;
    justify-content: space-around;
}

/* Section affiche */
.affiche {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.affiche img {
    max-width: 80%;
    max-height: 80%;
    margin: 10%;
    object-fit: contain;
    /* Pour éviter la déformation de l'image */
}

/* Section infos */
.infos {
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-behavior: smooth;
    overflow-y: auto;
    height: 100vh;
}

.infos h1 {
    font-size: 2em;
    text-align: center;
}

/* Liste des vignettes */
.conteneur_liste {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.viniette {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin: 10px 0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #ffffff26
}

button {
    padding: 10px 20px;
    background-color: #ffffff26;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>