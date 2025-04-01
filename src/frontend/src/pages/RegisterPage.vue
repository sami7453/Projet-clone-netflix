<template>
    <section>
        <FormComponent :data="formData" @form-change="onFormChange" />
        <small>Already registered? <a href="">Login now</a></small>
    </section>
</template>

<script setup lang="ts">
    import { reactive } from "vue";
    import type FormInterface from "../interfaces/FormInterface";
    import FormComponent from '../components/FormComponent.vue';

    const formData = reactive<FormInterface>({
        title: "Register",
        fields: [
            {
                id: 'name',
                type: 'text',
                placeholder: 'Enter your name',
                labelTextContent: 'Name'
            },
            {
                id: 'firstname',
                type: 'text',
                placeholder: 'Enter your first name',
                labelTextContent: 'First Name'
            },
            {
                id: 'mail',
                type: 'email',
                placeholder: 'Enter your email',
                labelTextContent: 'Email'
            },
            {
                id: 'mdp',
                type: 'password',
                placeholder: 'Enter your password',
                labelTextContent: 'Password'
            }
        ],
        buttons: [
            {
                id: 'submit-button',
                type: 'submit',
                textContent: 'Submit',
                class: 'is-primary'
            },
            {
                id: 'reset-button',
                type: 'reset',
                textContent: 'Reset',
                class: 'is-danger'
            }
        ]
    });

    const onFormChange = () => {
        console.log('Form changed!');
    }
</script>

<style scoped lang="css">

</style>
