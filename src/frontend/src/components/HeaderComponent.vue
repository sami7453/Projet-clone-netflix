<template>
    <header>
        <RouterLink to="/" class="logo">
            <img src="../assets/media/logo-light.PNG" alt="Logo" />
        </RouterLink>
        <nav>
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/movie-details">Séries</RouterLink>
            <RouterLink to="/movie-details">Films</RouterLink>
            <ButtonComponent :data="buttonLogout" @click="handleLogout" />
            <ButtonComponent :data="buttonProfile" @click="handleProfile" />
        </nav>
    </header>
</template>

<script setup lang="ts">
    import ButtonComponent from "../components/ButtonComponent.vue";
    import type ButtonInterface from "../interfaces/ButtonInterface";

    const buttonLogout: ButtonInterface = {
        id: "logout-btn",
        type: "button",
        class: "",
        textContent: "Déconnexion"
    };

    const buttonProfile: ButtonInterface = {
        id: "profile-btn",
        type: "button",
        class: "",
        textContent: "Profil"
    };

    const handleProfile = () => {
        // TODO: Vérifier si l'utilisateur est connecté
        window.location.href = `/#/user`;
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("inscription");
        window.location.href = "/";
    };
</script>

<style scoped lang="css">
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

    .hidden {
        display: none !important;
    }

    .logo {
        padding: 10px;
    }

    nav {
        display: flex;
        justify-content: space-around;
    }

    nav a {
        color: black;
        text-decoration: none;
        padding: 0 40px;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    }
</style>