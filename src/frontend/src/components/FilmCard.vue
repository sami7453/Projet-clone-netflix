<template>
    <div class="film-card">
      <img :src="film.image" :alt="film.title" />
      <div class="film-info">
        <h3>{{ film.title }}</h3>
        <p>{{ film.releaseYear }} • {{ film.genre }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Film } from '../interfaces/Film'
  
  defineProps<{
    film: Film
  }>()
  </script>
  
  <style scoped>
  .film-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    width: 180px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .film-card:hover {
    transform: scale(1.05);
  }
  .film-card img {
    width: 100%;
    height: auto;
  }
  .film-info {
    padding: 0.5rem;
    color: white;
  }
  </style>
  