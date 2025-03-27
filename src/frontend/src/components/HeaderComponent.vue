<template>
    <header class="apparition">
        <router-link to="/" class="logo">
            <img src="../assets/images/1.png" alt="Logo" />
        </router-link>
        <nav>
            <router-link to="/home">Accueil</router-link>
            <router-link to="/detailFilm">Séries</router-link>
            <router-link to="/detailFilm">Films</router-link>
            <router-link to="/login">Connexion</router-link>
            <router-link to="/register">Inscription</router-link>
        </nav>
    </header>
</template>

<script setup lang="ts">
</script>

<style scoped lang="css">
    /* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #ffffff26
}

.logo {
    padding: 10px;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-around;
}

nav a {
    color: black;
    text-decoration: none;
    padding: 0 40px;
}
    
</style>
