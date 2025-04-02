<template>
    <section>
        <label :for="data.id">{{ data.labelTextContent }}</label>
        <input
            :id="data.id"
            :type="data.type ? data.type : 'text'"
            :class="data.class ? data.class : ''"
            :required="data.required ? data.required : false"
            :placeholder="data.placeholder ? data.placeholder : ''"
            @input="(event:any) => $emit('field-change', {
                id: data.id,
                value: event.target!.value
            })"
        />
    </section>
</template>

<script setup lang="ts">
    import type FieldInterface from "../interfaces/FieldInterface";

    interface FieldComponentProperties {
        data: FieldInterface
    }

    defineProps<FieldComponentProperties>();
    defineEmits(["field-change"]);
</script>

<style scoped lang="css">
    input {
        display: flex;
        justify-content: center;
        border: 1px solid black;
        border-radius: 6px;
        padding: 10px;
        align-items: center;
        margin-top: 10px;
        margin-bottom: 20px;
    }
</style>
