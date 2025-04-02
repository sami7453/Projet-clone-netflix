<template>
    <!-- Ajout de v-bind="$attrs" permet de transmettre les attributs natifs (ex: @submit) -->
    <form v-bind="$attrs">
      <section>
        <h3>{{ data.title }}</h3>
      </section>
      <section>
        <FieldComponent
          v-for="(field, index) in data.fields"
          :key="index"
          :data="field"
        />
      </section>
      <section>
        <ButtonComponent
          v-for="(button, index) in data.buttons"
          :key="index"
          :data="button"
        />
      </section>
    </form>
  </template>
  
  <script setup lang="ts">
  import type FormInterface from "../interfaces/FormInterface";
  import FieldComponent from "./FieldComponent.vue";
  import ButtonComponent from "./ButtonComponent.vue";
  
  interface FormComponentProperties {
    data: FormInterface;
  }
  
  defineProps<FormComponentProperties>();
  </script>
  
  <style scoped lang="css">
  form {
    display: flex;
    background-color: rgba(255, 255, 255, 0.4);
    justify-content: center;
    flex-direction: column;
  }
  
  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  </style>
  
