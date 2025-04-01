<template>
    <div class="profile-page">
      <section class="user-info">
        <h2>Profil Utilisateur</h2>
        <p><strong>Pseudo :</strong> {{ user.pseudo }}</p>
        <p><strong>Email :</strong> {{ user.email }}</p>
        <button @click="editing = true">Modifier mes infos</button>
  
        <form v-if="editing" @submit.prevent="saveEdits">
          <input v-model="editPseudo" placeholder="Nouveau pseudo" />
          <input v-model="editEmail" placeholder="Nouvel email" />
          <button type="submit">Sauvegarder</button>
        </form>
      </section>
  
      <section class="favorites">
        <h2>Mes favoris</h2>
        <CarouselWrapper>
          <Card v-for="item in favorites" :key="item.id" :item="item" />
        </CarouselWrapper>
      </section>
  
      <section class="preferences">
        <h2>Préférences</h2>
        <div class="toggle-wrapper" @click="isDark = !isDark; toggleTheme()">
          <span class="toggle-label">Dark mode</span>
          <div :class="['toggle-button', { active: isDark }]"></div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Card from '../components/Card.vue'
  import CarouselWrapper from '../components/CarouselWrapper.vue'
  
  const user = ref({
    pseudo: 'User123',
    email: 'user@example.com',
  })
  
  const favorites = ref([
    { id: 1, title: 'Film 1', image: '/assets/hero-banner.jpg' },
    { id: 2, title: 'Film 2', image: '/assets/hero-banner.jpg' },
    { id: 3, title: 'Film 3', image: '/assets/hero-banner.jpg' },
    { id: 4, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 5, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 6, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 7, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 8, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 9, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 10, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 11, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 12, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 13, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 14, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 15, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 16, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 17, title: 'State Wars', image: '/assets/hero-banner.jpg' },
    { id: 18, title: 'State Wars', image: '/assets/hero-banner.jpg' },
  ])
  
  const editing = ref(false)
  const editPseudo = ref(user.value.pseudo)
  const editEmail = ref(user.value.email)
  
  const saveEdits = () => {
    user.value.pseudo = editPseudo.value
    user.value.email = editEmail.value
    editing.value = false
  }
  
  const isDark = ref(false)
  
  onMounted(() => {
    isDark.value = localStorage.getItem('theme') === 'dark'
    applyTheme()
  })
  
  function toggleTheme() {
    const theme = isDark.value ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    applyTheme()
  }
  
  function applyTheme() {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
  </script>
  
  <style scoped>
  .profile-page {
    padding: 6rem 4rem 2rem;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  .user-info {
    margin-bottom: 3rem;
  }
  
  .user-info button {
    margin-top: 1rem;
    background: #e50914;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  
  .user-info form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .user-info input {
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    background: var(--bg-color);
    color: var(--text-color);
    border: 1px solid #666;
  }
  
  .favorites h2 {
    margin-bottom: 1rem;
  }
  
  .preferences {
    margin-top: 2rem;
    padding: 1rem 0;
    border-top: 1px solid #444;
  }
  
  .preferences h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  .toggle-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
  }
  
  .toggle-label {
    font-weight: 500;
  }
  
  .toggle-button {
    width: 50px;
    height: 24px;
    background: #666;
    border-radius: 50px;
    position: relative;
    transition: background 0.3s;
  }
  
  .toggle-button::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 18px;
    height: 18px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }
  
  .toggle-button.active {
    background: #e50914;
  }
  
  .toggle-button.active::after {
    transform: translateX(26px);
  }
  </style>