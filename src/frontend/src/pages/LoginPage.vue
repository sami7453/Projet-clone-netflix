<template>
    <section>
        <FormComponent :data="formData" @submit="onSubmit" />
        <small>Not registered yet? <RouterLink to="/register">Register now</RouterLink></small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import type FormInterface from "../interfaces/FormInterface";
    import FormComponent from "../components/FormComponent.vue";

    const formData = reactive<FormInterface>({
        title: "Login",
        fields: [
            { id: "email", type: "email", required: true, placeholder: "Enter your email", labelTextContent: "Email" },
            { id: "password", type: "password", required: true, placeholder: "Enter your password", labelTextContent: "Password" }
        ],
        buttons: [
            { id: "submit-button", type: "submit", textContent: "Submit" },
            { id: "reset-button", type: "reset", textContent: "Reset" }
        ]
    });

    const onSubmit = async () => {
    };
</script>
  
<style scoped lang="css">
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 35%;
        max-height: fit-content;
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
