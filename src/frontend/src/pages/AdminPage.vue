<template>
    <section class="support-tickets">
        <h2>Support Tickets</h2>
        <div v-if="supportTickets.length > 0">
            <SupportTicketComponent v-for="supportTicket in supportTickets" :key="supportTicket.id" :data="supportTicket" />
        </div>
        <p v-else>No support ticket available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import SupportTicketComponent from "../components/SupportTicketComponent.vue";
    import type SupportTicketInterface from "../interfaces/SupportTicketInterface";

    const supportTickets = ref<SupportTicketInterface[]>([]);

    const fetchSupportTickets = async () => {
        try {
            const response = await fetch("http://localhost:3000/support-tickets");
            if (!response.ok) { throw new Error("Failed to fetch support tickets"); }
            supportTickets.value = await response.json();
        } catch (error) {
            console.error("Error fetching support tickets:", error);
        }
    }

    onMounted(fetchSupportTickets);
</script>

<style scoped lang="css">
    section {
        max-width: 60%;
        max-height: fit-content;
        margin: 3rem auto;
        padding: 2rem;
        background-color: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 15px;
        background: white;
        margin-bottom: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h3 {
        font-size: 1.2rem;
        color: #333;
    }

    p {
        font-size: 1rem;
        color: #555;
    }

    span {
        font-size: 0.9rem;
        color: #777;
    }
</style>
