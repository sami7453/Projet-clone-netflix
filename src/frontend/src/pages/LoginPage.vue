<template>
    <section>
        <FormComponent :data="formData" @form-change="onFormChange" />
        <small>Not registered yet? <a href="">Register now</a></small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import type FormInterface from "../interfaces/FormInterface";
    import FormComponent from "../components/FormComponent.vue";

    const formData = reactive<FormInterface>({
        title: 'Login',
        fields: [
            {
                id: "email",
                type: "email",
                placeholder: "Enter your email",
                labelTextContent: "Email"
            },
            {
                id: "password",
                type: "password",
                placeholder: "Enter your password",
                labelTextContent: "Password"
            }
        ],
        buttons: [
            {
                id: "submit-button",
                type: "submit",
                textContent: "Submit",
                class: "is-primary"
            },
            {
                id: "reset-button",
                type: "reset",
                textContent: "Reset",
                class: "is-danger"
            }
        ]
    });

    import { ref, onMounted } from "vue";
    
    const showConnexion = ref(localStorage.getItem("inscription") !== "true");
    const email = ref("");
    const password = ref("");
    const nom = ref("");
    const prenom = ref("");
    
    const toggleForms = () => {
        showConnexion.value = !showConnexion.value;
        localStorage.setItem("inscription", showConnexion.value ? "false" : "true");
    };
    
    const handleLogin = () => {
        console.log("Tentative de connexion avec", email.value, password.value);
    };
    
    const handleSignup = () => {
        console.log("Tentative d'inscription avec", nom.value, prenom.value, email.value, password.value);
    };
    
    onMounted(() => {
        showConnexion.value = localStorage.getItem("inscription") !== "true";
    });
</script>
  
<style scoped lang="css">

</style>
