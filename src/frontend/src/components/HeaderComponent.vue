<template>
    <header>
        <RouterLink to="/" class="logo">
            <img src="../assets/media/logo-light.PNG" alt="Logo" />
        </RouterLink>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/movies">Movies</RouterLink>
            <RouterLink to="/series">Series</RouterLink>
            <ButtonComponent :data="buttonLogoutData" @click="handleLogout" />
            <ButtonComponent :data="buttonProfileData" @click="handleProfile" />
        </nav>
    </header>
</template>

<script setup lang="ts">
    import ButtonComponent from "../components/ButtonComponent.vue";
    import type ButtonInterface from "../interfaces/ButtonInterface";

    const buttonLogoutData: ButtonInterface = {
        id: "logout-btn",
        type: "button",
        class: "",
        textContent: "Logout"
    };

    const buttonProfileData: ButtonInterface = {
        id: "profile-btn",
        type: "button",
        class: "",
        textContent: "Profile"
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
        background-color: var(--bg-color);
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
</style>
