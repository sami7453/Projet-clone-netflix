<template>
    <section>
        <FormComponent :data="formData" @submit="onSubmit" />
        <small>Not registered yet? <RouterLink to="/register">Register now</RouterLink></small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import { useRouter } from "vue-router";
    import type FormInterface from "../interfaces/FormInterface";
    import FormComponent from "../components/FormComponent.vue";

    const router = useRouter();

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

    const onSubmit = async (event: Event) => {
        event.preventDefault();

        const formValues: { [key: string]: string } = {};

        formData.fields.forEach(field => {
            const fieldElement = document.getElementById(field.id) as HTMLInputElement;
            if (fieldElement) {
                formValues[field.id] = fieldElement.value;
            }
        });

        const { email, password } = formValues;

        if (!email || !password) {
            alert("Email and password are required!");
            return;
        }

        const loginData = { email, password };

        try {
            const response = await fetch("http://localhost:3001/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Login successful!");
                // Store the token in localStorage (or sessionStorage) for future requests
                localStorage.setItem("authToken", data.token);
                // Redirect to a protected page, like the dashboard
                router.push("/");
            } else {
                alert(`Error: ${data.error || data.message}`);
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("An error occurred. Please try again.");
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
