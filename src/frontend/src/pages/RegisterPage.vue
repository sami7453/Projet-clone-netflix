<template>
    <section>
        <FormComponent :data="formData" :onsubmit="onSubmit" />
        <small>Already registered? <RouterLink to="/login">Login now</RouterLink></small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import { useRouter } from "vue-router";
    import FormComponent from "../components/FormComponent.vue";
    import type FormInterface from "../interfaces/FormInterface";

    const router = useRouter();

    const formData = reactive<FormInterface>({
        title: "Register",
        fields: [
            { id: "firstname",  type: "text", required: true, placeholder: "John",  labelTextContent: "First name" },
            { id: "lastname", type: "text", required: true, placeholder: "Doe", labelTextContent: "Last name" },
            { id: "email", type: "email", required: true, placeholder: "john.doe@gmail.com", labelTextContent: "Email" },
            { id: "password", type: "password", required: true, placeholder: "Not 1234 ;)", labelTextContent: "Password" }
        ],
        buttons: [
            { id: "submit-button", type: "submit", textContent: "Submit", class: "is-primary" },
            { id: "reset-button", type: "reset", textContent: "Reset", class: "is-danger" }
        ]
    });

    const onSubmit = async (event: Event) => {
        event.preventDefault(); // Prevent the default form submission

        // Collect the form values
        const formValues: { [key: string]: string } = {};

        formData.fields.forEach(field => {
            const fieldElement = document.getElementById(field.id) as HTMLInputElement;
            if (fieldElement) {
                formValues[field.id] = fieldElement.value;
            }
        });

        const { firstname, lastname, email, password } = formValues;

        console.log(firstname, lastname, email, password);

        // Validation
        if (!firstname || !lastname || !email || !password) {
            alert("All fields are required!");
            return;
        }

        const registerData = { first_name: firstname, last_name: lastname, email, password };

        try {
            // Send the registration data to the backend API
            const response = await fetch("http://localhost:3001/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerData)
            });

            const data = await response.json();

            if (response.ok) {
                alert("Registration successful!");
                // Redirect to login page after successful registration
                router.push("/login");
            } else {
                alert(`Error: ${data.message || data.error}`);
            }
        } catch (error) {
            console.error("Error during registration:", error);
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
