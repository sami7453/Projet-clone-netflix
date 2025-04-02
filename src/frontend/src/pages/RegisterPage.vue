<template>
    <section>
        <FormComponent :data="formData" @submit="onSubmit" />
        <small>Already registered? <RouterLink to="/login">Login now</RouterLink></small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import FormComponent from "../components/FormComponent.vue";
    import type FormInterface from "../interfaces/FormInterface";

    const formData = reactive<FormInterface>({
        title: "Register",
        fields: [
            { id: "firstname",  type: "text", required: true, placeholder: "John",  labelTextContent: "First name" },
            { id: "lastname", type: "text", required: true, placeholder: "Doe", labelTextContent: "Last name" },
            { id: "email", type: "email", required: true, placeholder: "john.doe@gmail.com", labelTextContent: "Email" },
            { id: "password", type: "password", required: true, placeholder: "Not 1234", labelTextContent: "Password" }
        ],
        buttons: [
            { id: "submit-button", type: "submit", textContent: "Submit", class: "is-primary" },
            { id: "reset-button", type: "reset", textContent: "Reset", class: "is-danger" }
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
