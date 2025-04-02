<template>
    <header>
        <RouterLink to="/" class="logo">
            <img src="../assets/media/logo-light.PNG" alt="Logo" />
        </RouterLink>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/movies">Movies</RouterLink>
            <RouterLink to="/series">Series</RouterLink>
            <ButtonComponent :data="buttonProfileData" @click="handleProfile" />
            <ButtonComponent :data="buttonLogoutData" @click="handleLogout" />
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { useRouter } from "vue-router";
    import ButtonComponent from "../components/ButtonComponent.vue";
    import type ButtonInterface from "../interfaces/ButtonInterface";

    const router = useRouter();

    const buttonProfileData: ButtonInterface = {
        id: "profile-btn",
        type: "button",
        class: "",
        textContent: "Profile"
    };
    
    const buttonLogoutData: ButtonInterface = {
        id: "logout-btn",
        type: "button",
        class: "",
        textContent: "Logout"
    };

    const handleProfile = () => {
        // TODO: Vérifier si l'utilisateur est connecté
        router.push("/profile");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("inscription");
        router.push("/");
    };
</script>

<style scoped lang="css">
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        background-color: var(--bg-color);
        width: 95%;
        margin: auto;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 10px;
    }

    nav a {
        color: black;
        text-decoration: none;
        padding: 0 30px;
    }

    nav a:hover {
        text-decoration: underline;
    }

    .logo {
        padding: 10px;
    }

    .hidden {
        display: none !important;
    }

    .logo {
        padding: 10px;
    }
</style>
