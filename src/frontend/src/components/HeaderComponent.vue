<template>
    <header class="apparition">
        <router-link to="/" class="logo">
            <img src="../assets/images/1.png" alt="Logo" />
        </router-link>
        <nav>
            <router-link to="/home">Accueil</router-link>
            <router-link to="/detailFilm">Séries</router-link>
            <router-link to="/detailFilm">Films</router-link>
            <ButtonComponent :data="buttonLogout" @click="handleLogout" />
            <ButtonComponent :data="buttonProfile" @click="handleProfile" />
        </nav>
    </header>
</template>

<script setup lang="ts">
import ButtonComponent from '../components/ButtonComponent.vue';
import type ButtonInterface from '../interfaces/ButtonInterface';

const buttonLogout: ButtonInterface = {
    id: 'logout-btn',
    type: 'button',
    class: '',
    textContent: 'Déconnexion'
};
const buttonProfile: ButtonInterface = {
    id: 'profile-btn',
    type: 'button',
    class: '',
    textContent: 'Profil'
};
const handleProfile = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        window.location.href = `/profile/${userId}`;
    } else {
        console.error('User ID not found in local storage.');
    }
};

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('inscription');
    window.location.href = '/';
};

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
    align-items: center;
}

nav a {
    color: black;
    text-decoration: none;
    padding: 0 40px;
}

nav a:hover {
    text-decoration: underline;
}

button {
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 5px;
}

header nav {
    box-shadow: none;
}
    
</style>
