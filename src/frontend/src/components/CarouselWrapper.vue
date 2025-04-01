<template>
    <div class="carousel-wrapper">
      <button class="nav-button left" @click="scroll('left')" v-if="showLeft">
        &#10094;
      </button>
  
      <div class="carousel-track" ref="scrollContainer">
        <slot></slot>
      </div>
  
      <button class="nav-button right" @click="scroll('right')" v-if="showRight">
        &#10095;
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watchEffect } from 'vue'
  
  const scrollContainer = ref<HTMLElement | null>(null)
  const showLeft = ref(false)
  const showRight = ref(true)
  
  const updateButtons = () => {
    const el = scrollContainer.value
    if (!el) return
    showLeft.value = el.scrollLeft > 0
    showRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth
  }
  
  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainer.value
    if (!el) return
    const scrollAmount = 400
    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }
  
  onMounted(() => {
    if (!scrollContainer.value) return
    scrollContainer.value.addEventListener('scroll', updateButtons)
    window.addEventListener('resize', updateButtons)
    updateButtons()
  })
  
  watchEffect(updateButtons)
  </script>
  
  <style scoped>
  .carousel-wrapper {
    position: relative;
    padding: 0 2rem;
  }
  
  .carousel-track {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 1rem 0;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }
  
  .carousel-track::-webkit-scrollbar {
    display: none;
  }
  
  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    z-index: 10;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .nav-button:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  
  .left {
    left: 0;
  }
  
  .right {
    right: 0;
  }
  </style>
  