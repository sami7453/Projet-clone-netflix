<template>
    <section>
        <FormComponent :data="formData" @submit.prevent="onSubmit" />
        <small>
            Not registered yet? <RouterLink to="/register">Register now</RouterLink>
        </small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import { useRouter } from "vue-router";
    import FormComponent from "../components/FormComponent.vue";
    import type FormInterface from "../interfaces/FormInterface";

    const router = useRouter();

    const formData = reactive<FormInterface>({
        title: "Login",
        fields: [
            { id: "email", type: "email", required: true, placeholder: "Enter your email", labelTextContent: "Email" },
            { id: "password", type: "pa4ssword", required: true, placeholder: "Enter your password", labelTextContent: "Password" }
        ],
        buttons: [
            { id: "submit-button", type: "submit", textContent: "Submit" },
            { id: "reset-button", type: "reset", textContent: "Reset" }
        ]
    });

    const onSubmit = async (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const inputs = form.querySelectorAll("input");
        const formValues: Record<string, string> = {};

        inputs.forEach((input) => {
            if (input.id) {
                formValues[input.id] = input.value;
            }
        });
    
        try {
            const response = await fetch("http://localhost:3000/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formValues.email,
                    password: formValues.password
                })
            });

            const data = await response.json();
            if (!response.ok) {
             throw new Error(data.message || "Login failed");
            }
            
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            router.push("/");
        } catch (error: any) {
            console.error("Login error:", error.message);
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
