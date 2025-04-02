<template>
    <section class="user-info">
        <h2>Hello, {{ user.username }}</h2>
        <p>
            <strong>Email:</strong> {{ user.email }}
        </p>
        <ButtonComponent :data="updateButtonData" @click="startEditing" />
        <FormComponent v-if="editing" :data="editFormData" @field-change="handleFieldChange" @submit="saveEdits" />
    </section>

    <section class="bookmarks">
        <h2>Bookmarks</h2>
        <CarouselComponent>
            <VideoCardComponent v-for="item in bookmarks" :key="item.id" :item="item" />
        </CarouselComponent>
    </section>

    <section class="history">
        <h2>History</h2>
        <CarouselComponent>
            <VideoCardComponent v-for="item in history" :key="item.id" :item="item" />
        </CarouselComponent>
    </section>

    <section class="preferences">
        <h2>Preferences</h2>
        <div class="toggle-wrapper" @click="toggleTheme">
            <span class="toggle-label">Dark mode</span>
            <div :class="['toggle-button', { active: isDark }]"></div>
        </div>
    </section>
</template>
    
<script setup lang="ts">
    import { ref, onMounted } from "vue";
    import ButtonComponent from "../components/ButtonComponent.vue";
    import FormComponent from "../components/FormComponent.vue";
    import VideoCardComponent from "../components/VideoCardComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type FormInterface from "../interfaces/FormInterface";
    import type ButtonInterface from "../interfaces/ButtonInterface";
    import type FieldInterface from "../interfaces/FieldInterface";
    import type CardInterface from "../interfaces/VideoCardInterface";

    const user = ref({
        id: 1,
        username: 'User123',
        email: 'user@example.com',
    });

    const history = ref<CardInterface[]>([]);
    const bookmarks = ref<CardInterface[]>([]);

    const fetchBookmarks = async () => {
    try {
        const response = await fetch(`http://localhost:3001/bookmarks/users/${user.value.id}`);
        const bookmarksData = await response.json();

        // Fetch actual movie data for each bookmark
        const moviePromises = bookmarksData.map(async (bookmark: any) => {
            const movieResponse = await fetch(`http://localhost:3001/movies/${bookmark.movie_id}`);
            const movieData = await movieResponse.json();
            return movieData;
        });

        // Wait for all movie data to be fetched
        bookmarks.value = await Promise.all(moviePromises);
    } catch (error) {
        console.error("Error fetching bookmarks:", error);
    }
}

const fetchHistory = async () => {
    try {
        const response = await fetch(`http://localhost:3001/histories/users/${user.value.id}`);
        const historyData = await response.json();

        // Fetch actual movie data for each history item
        const moviePromises = historyData.map(async (historyItem: any) => {
            const movieResponse = await fetch(`http://localhost:3001/movies/${historyItem.movie_id}`);
            const movieData = await movieResponse.json();
            return movieData;
        });

        // Wait for all movie data to be fetched
        history.value = await Promise.all(moviePromises);
    } catch (error) {
        console.error("Error fetching history:", error);
    }
};

    onMounted(() => {
        fetchBookmarks();
        fetchHistory();
    });

    const editing = ref(false);
    const isDark = ref(false);
    const editPseudo = ref(user.value.username);
    const editEmail = ref(user.value.email);
    
    const updateButtonData: ButtonInterface = {
        id: "updateBtn",
        textContent: "Update my information",
        class: "update-btn",
        type: "button"
    }
    
    const editFormData: FormInterface = {
        title: 'Update Information',
        fields: [
            {
                id: 'editPseudo',
                placeholder: 'Nouveau pseudo',
                labelTextContent: 'Pseudo'
            } as FieldInterface,
            {
                id: 'editEmail',
                placeholder: 'Nouvel email',
                labelTextContent: 'Email'
            } as FieldInterface,
        ],
            buttons: [
            {
                id: 'saveBtn',
                textContent: 'Sauvegarder',
                type: 'submit'
            } as ButtonInterface
        ]
    }
    
    const startEditing = () => {
        editing.value = true;
    }
    
    const handleFieldChange = (payload: { id: string, value: string }) => {
        if (payload.id === "editPseudo") {
            editPseudo.value = payload.value;
        } else if (payload.id === "editEmail") {
            editEmail.value = payload.value;
        }
    }
    
    const saveEdits = () => {
        user.value.username = editPseudo.value;
        user.value.email = editEmail.value;
        editing.value = false;
    }

    onMounted(() => {
        isDark.value = localStorage.getItem("theme") === "dark";
        applyTheme();
    })

    function toggleTheme() {
        isDark.value = !isDark.value;
        const theme = isDark.value ? "dark" : "light";
        localStorage.setItem("theme", theme);
        applyTheme();
    }

    function applyTheme() {
        document.documentElement.classList.toggle("dark", isDark.value);
    }
</script>
    
<style scoped lang="css">
    .profile-page {
        padding: 6rem 4rem 2rem;
        background-color: var(--bg-color);
        color: var(--text-color);
    }
    
    .user-info {
        margin-bottom: 3rem;
    }
    
    .bookmarks h2 {
        margin-bottom: 1rem;
    }
    
    .preferences {
        margin-top: 2rem;
        padding: 1rem 0;
        border-top: 1px solid #444;
    }
    
    .preferences h2 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .toggle-wrapper {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
    }
    
    .toggle-label {
        font-weight: 500;
    }
    
    .toggle-button {
        width: 50px;
        height: 24px;
        background: #666;
        border-radius: 50px;
        position: relative;
        transition: background 0.3s;
    }
    
    .toggle-button::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        width: 18px;
        height: 18px;
        background: white;
        border-radius: 50%;
        transition: transform 0.3s;
    }
    
    .toggle-button.active {
        background: #e50914;
    }
    
    .toggle-button.active::after {
        transform: translateX(26px);
    }
</style>
