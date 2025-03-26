<template>
    <section>
        <label :for="data.id">{{ data.labelTextContent }}</label>
        <input
            :id="data.id"
            :type="data.type ? data.type : 'text'"
            :class="data.class ? data.class : ''"
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
    defineEmits(['field-change']);
</script>

<style lang="css">

</style>
