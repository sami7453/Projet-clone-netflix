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
  
<style lang="css">
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
    
        50% {
            background-position: 100% 50%;
        }
    
        100% {
            background-position: 0% 50%;
        }
    }

    .hidden {
        display: none !important;
    }

   

    

    #image img {
        margin-left: 100px;
        border-radius: 50%;
    }

    #texte a {
        text-decoration: none;
        color: white;
        font-size: 30px;
        margin-right: 300px;
        transition: 1s ease-in-out;
        display: inline-block;
    }

    #texte a:hover {
        transform: scale(1.2);
        transition: 1s;
    }

    main {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    #connexion {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 10%;
        width: 300px;
        padding: 70px 90px 70px 90px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #6c7c8c5f
    }

    #connexion img {
        filter: invert(1);
    }

    #connexion label {
        font-size: 20px;
        margin-bottom: 30px;
        font-size: 30px;
        color: #FFFFFF;
    }

    #connexion input {
        width: 200px;
        height: 40px;
        margin-top: 10px;
        font-size: 20px;
        border: none;
        border-left: 2px solid black;
        /* border-bottom: black 2px solid; */
        outline: none;
        transition: 1s;
        padding-left: 20px;
        background-color: transparent;
    }

    input::placeholder {
        color: #FFFFFF;
        font-family: "Georgia", sans-serif;
    }

    #connexion button {
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ffffff26;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transition: 1s;
        border-radius: 20px;
        margin-top: 40px;
    }

    #connexion button:hover {
        background-color: black;
        transform: scale(1.1);
        transition: 1s;
    }

    #name img {
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 20px;
    }

    #firstname img {
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 20px;
    }

    #inscription {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 40px;
        width: 300px;
        padding: 70px;
        background-color: #6c7c8c5f;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    }
    #inscription img{
        filter: invert(1);
    }
    #inscription label{
        font-size: 20px;
        color: white;
        margin-bottom: 30px;
        font-size: 30px;
    }
    #inscription input{
        width: 200px;
        height: 40px;
        margin-top: 10px;
        font-size: 20px;
        border: none;
        border-left: 2px solid black;
        /* border-bottom: black 2px solid; */
        outline: none;
        transition: 1s;
        background-color: transparent;
        padding-left: 20px;
    }

    #inscription button{
        margin-top: 20px;
        padding: 10px 20px;
        background-color: #ffffff26;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 20px;
        transition: 1s;
        border-radius: 20px;
    }
    #inscription button:hover{
        background-color: black;
        transform: scale(1.1);
        transition: 1s;
    }

    header.apparition{
        animation-delay: 0.2s;
    }
    main.apparition{
        animation-delay: 0.4s;
    }
    footer.apparition{
        animation-delay: 0.6s;
    }

    @keyframes fadeIn{
        0%{
            opacity: 0;
            transform: translateY(20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    .apparition{
        opacity: 0;
        animation: fadeIn 1s ease-in-out forwards;
    }

</style>
  