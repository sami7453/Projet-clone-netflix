<template>
    <fieldset class="support-ticket">
        <legend class="ticket-title">{{ data.title }}</legend>
        <p class="ticket-description">{{ data.description }}</p>
        <div class="ticket-dates">
            <p><strong>Opened:</strong> {{ data.open_date }}</p>
        </div>
        <ButtonComponent :data="closeTicketButtonData" @click="deleteTicket" />
    </fieldset>
</template>

<script setup lang="ts">
    import ButtonComponent from "./ButtonComponent.vue";
    import type ButtonInterface from "../interfaces/ButtonInterface";
    import type SupportTicketInterface from "../interfaces/SupportTicketInterface";

    interface SupportTicketComponentProperties {
        data: SupportTicketInterface;
    }

    const props = defineProps<SupportTicketComponentProperties>();

    const closeTicketButtonData: ButtonInterface = {
        id: "close-ticket-button",
        type: "button",
        class: "",
        textContent: "Close"
    }

    const deleteTicket = async () => {
        try {
            const response = await fetch(`http://localhost:3000/support-tickets/${props.data.id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) { throw new Error("Failed to delete ticket"); }
        } catch (error) {
            console.error("Error deleting ticket:", error);
        }
    }
</script>

<style scoped lang="css">
    .support-ticket {
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 15px;
    }

    .ticket-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

    .ticket-description {
        font-size: 1rem;
        color: #555;
        margin-bottom: 10px;
    }

    .ticket-dates {
        font-size: 0.9rem;
        color: #777;
    }

    .ticket-dates p {
        margin: 5px 0;
    }

    .ticket-dates strong {
        color: #333;
    }
</style>
