<template>
    <header>
        <RouterLink to="/">
            <img
                :src="isCollapsed ? currentSmallLogo : currentFullLogo"
                alt="logo"
                class="logo-img"
                :class="{ flipping: isFlipping }"
                @animationend="onFlipEnd"
            />
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
    import { ref, computed, onMounted } from 'vue'

    const isCollapsed = ref(true)
    const isFlipping = ref(false)
    const isDark = ref(false)

    const fullLogoLight = new URL('../assets/media/logo-light.png', import.meta.url).href
    const smallLogoLight = new URL('../assets/media/small-logo-light.png', import.meta.url).href
    const fullLogoDark = new URL('../assets/media/logo-dark.png', import.meta.url).href
    const smallLogoDark = new URL('../assets/media/small-logo-dark.png', import.meta.url).href

    const currentFullLogo = computed(() => isDark.value ? fullLogoDark : fullLogoLight)
    const currentSmallLogo = computed(() => isDark.value ? smallLogoDark : smallLogoLight)

    const triggerFlip = () => {
        isFlipping.value = true
        setTimeout(() => {
            isCollapsed.value = !isCollapsed.value
        }, 150)
    }

    const onFlipEnd = () => {
    isFlipping.value = false
    }

    onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark')
    const observer = new MutationObserver(() => {
        isDark.value = document.documentElement.classList.contains('dark')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    })
</script>

<style scoped lang="css">
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1870px;
    margin: 0 auto;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem;
    z-index: 1000;
    transition: background 0.3s;
}

.navbar.collapsed {
    justify-content: flex-start;
    position: absolute;
    top: 1.65%;
    left: 2.9%;
}

.logo-container {
    margin-right: auto;
    cursor: pointer;
    perspective: 800px;
}

.logo-img {
    height: 30px;
    transition: opacity 0.3s ease;
}

.logo-img.flipping {
    animation: flipLogo 0.6s ease forwards;
}

@keyframes flipLogo {
    0% {
        transform: rotateY(0deg);
        opacity: 1;
    }
    50% {
        transform: rotateY(180deg);
        opacity: 0;
    }
    100% {
        transform: rotateY(360deg);
        opacity: 1;
    }
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    cursor: pointer;
    opacity: 1;
    padding-right: 2rem;
    transition: opacity 1s ease;
}

.nav-links img {
    height: 30px;
    transition: filter 0.3s ease;
    filter: var(--nav-icon-filter);
}


:deep(.dark) .nav-links img {
    filter: invert(1);
}

:deep(:not(.dark)) .nav-links img {
    filter: none;
}

.navbar.collapsed .nav-links {
    opacity: 0;
    transition: opacity 0.3s ease;
}
</style>
