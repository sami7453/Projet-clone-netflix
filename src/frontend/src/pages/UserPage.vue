<template>
    <section class="profile-page">
      <section class="user-info">
        <h2>Hello, {{ user.username }}</h2>
        <p>
          <strong>Email:</strong> {{ user.email }}
        </p>
        <ButtonComponent :data="updateButtonData" @click="startEditing" />
  
        <FormComponent
          v-if="editing"
          :data="editFormData"
          @field-change="handleFieldChange"
          @submit="saveEdits"
        />
      </section>
  
      <section class="favorites">
        <h2>Bookmarks</h2>
        <CarouselWrapper>
          <Card v-for="item in favorites" :key="item.id" :item="item" />
        </CarouselWrapper>
      </section>
  
      <section class="preferences">
        <h2>Preferences</h2>
        <div class="toggle-wrapper" @click="toggleTheme">
          <span class="toggle-label">Dark mode</span>
          <div :class="['toggle-button', { active: isDark }]"></div>
        </div>
      </section>
    </section>
  </template>
    
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import ButtonComponent from '../components/ButtonComponent.vue'
  import FormComponent from '../components/FormComponent.vue'
  import Card from '../components/Card.vue'
  import CarouselWrapper from '../components/CarouselWrapper.vue'
  import type FormInterface from '../interfaces/FormInterface'
  import type ButtonInterface from '../interfaces/ButtonInterface'
  import type FieldInterface from '../interfaces/FieldInterface'
  
  const user = ref({
    username: 'User123',
    email: 'user@example.com',
  })
  
  const favorites = ref([
    { id: 1, title: 'Film 1', image: '/assets/hero-banner.jpg' },
    { id: 2, title: 'Film 2', image: '/assets/hero-banner.jpg' },
    { id: 3, title: 'Film 3', image: '/assets/hero-banner.jpg' },
    { id: 4, title: 'Film 4', image: '/assets/hero-banner.jpg' },
    { id: 5, title: 'Film 5', image: '/assets/hero-banner.jpg' },
    { id: 6, title: 'Film 6', image: '/assets/hero-banner.jpg' },
    { id: 7, title: 'Film 7', image: '/assets/hero-banner.jpg' },
    { id: 8, title: 'Film 8', image: '/assets/hero-banner.jpg' },
    { id: 9, title: 'Film 9', image: '/assets/hero-banner.jpg' },
    { id: 10, title: 'Film 10', image: '/assets/hero-banner.jpg' },
  ])
  
  const editing = ref(false)
  const editPseudo = ref(user.value.username)
  const editEmail = ref(user.value.email)
  
  const updateButtonData: ButtonInterface = {
    id: 'updateBtn',
    textContent: 'Update my information',
    class: 'update-btn',
    type: 'button'
  }
  
  const editFormData: FormInterface = {
    title: 'Update Information',
    fields: [
      {
        id: 'editPseudo',
        placeholder: 'Nouveau pseudo',
        labelTextContent: 'Pseudo'
      } as FieldInterface,
      {
        id: 'editEmail',
        placeholder: 'Nouvel email',
        labelTextContent: 'Email'
      } as FieldInterface,
    ],
    buttons: [
      {
        id: 'saveBtn',
        textContent: 'Sauvegarder',
        type: 'submit'
      } as ButtonInterface
    ]
  }
  
  const startEditing = () => {
    editing.value = true
  }
  
  const handleFieldChange = (payload: { id: string, value: string }) => {
    if (payload.id === 'editPseudo') {
      editPseudo.value = payload.value
    } else if (payload.id === 'editEmail') {
      editEmail.value = payload.value
    }
  }
  
  const saveEdits = () => {
    user.value.username = editPseudo.value
    user.value.email = editEmail.value
    editing.value = false
  }
  
  const isDark = ref(false)
  onMounted(() => {
    isDark.value = localStorage.getItem('theme') === 'dark'
    applyTheme()
  })
  function toggleTheme() {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    applyTheme()
  }
  function applyTheme() {
    document.documentElement.classList.toggle('dark', isDark.value)
  }
  </script>
    
  <style scoped lang="css">
  .profile-page {
    padding: 6rem 4rem 2rem;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  .user-info {
    margin-bottom: 3rem;
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
