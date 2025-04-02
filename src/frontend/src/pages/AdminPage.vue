<template>
    <section>
        <h2>Support Tickets</h2>
        <ul v-if="supportTickets.length > 0">
            <li v-for="ticket in supportTickets" :key="ticket.id">
                <h3>{{ ticket.title }}</h3>
                <p>{{ ticket.description }}</p>
                <p>{{ ticket.open_date }}</p>
                <p>{{ ticket.close_date ? ticket.close_date : 'Ongoing issue' }}</p>
            </li>
        </ul>
        <p v-else>No support ticket available at the moment.</p>
    </section>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import type SupportTicketInterface from "../interfaces/SupportTicketInterface";

    const supportTickets = ref<SupportTicketInterface[]>([]);

    const fetchSupportTickets = async () => {
        try {
            const response = await fetch("http://localhost:3001/support-tickets");
            supportTickets.value = await response.json();
        } catch (error) {
            console.error("Error fetching support tickets:", error);
        }
    }

    onMounted(fetchSupportTickets);
</script>

<style scoped lang="css">
    section {
        max-width: 800px;
        margin: 20px auto;
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
