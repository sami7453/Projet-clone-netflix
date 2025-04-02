<template>
    <section>
      <FormComponent :data="formData" @submit.prevent="onSubmit" />
      <small>
        Already registered? <RouterLink to="/login">Login now</RouterLink>
      </small>
    </section>
  </template>
  
  <script setup lang="ts">
  import { reactive } from "vue";
  import FormComponent from "../components/FormComponent.vue";
  import type FormInterface from "../interfaces/FormInterface";
  
  const formData = reactive<FormInterface>({
    title: "Register",
    fields: [
      { id: "firstname", type: "text", required: true, placeholder: "John", labelTextContent: "First name" },
      { id: "lastname", type: "text", required: true, placeholder: "Doe", labelTextContent: "Last name" },
      { id: "email", type: "email", required: true, placeholder: "john.doe@gmail.com", labelTextContent: "Email" },
      { id: "password", type: "password", required: true, placeholder: "Not 1234", labelTextContent: "Password" }
    ],
    buttons: [
      { id: "submit-button", type: "submit", textContent: "Submit", class: "is-primary" },
      { id: "reset-button", type: "reset", textContent: "Reset", class: "is-danger" }
    ]
  });
  
  const onSubmit = async (event: Event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll('input');
    const formValues: Record<string, string> = {};
    for (const input of inputs) {
      if (input.id) {
        formValues[input.id] = input.value;
      }
    }
    console.log("Register form values:", formValues);
  
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formValues.firstname,
          last_name: formValues.lastname,
          email: formValues.email,
          password: formValues.password
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      console.log("Registration successful:", data);
      // Par exemple, rediriger vers la page de connexion
      // router.push('/login');
    } catch (error: any) {
      console.error("Registration error:", error.message);
    }
  };
  </script>
  
  <style scoped lang="css">
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 35%;
    margin: 3rem auto;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  section small {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: #555;
  }
  section small a {
    color: #f6121d;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;
  }
  section small a:hover {
    border-bottom: 1px solid #f6121d;
  }
  </style>
  