<template>
    <form>
        <section>
            <FieldComponent
                @field-change="onFieldChange"
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
import type FormInterface from "../interfaces/FormInterface"
    import FieldComponent from "./FieldComponent.vue"
    import ButtonComponent from "./ButtonComponent.vue"

    interface FormComponentProperties {
        data: FormInterface
    }

    defineProps<FormComponentProperties>();

    const onFieldChange = ({ id, val }:{ id: string, val:string }) => {
        console.log('id', id)
        console.log('val', val)
    }
</script>

<style lang="css">

</style>
