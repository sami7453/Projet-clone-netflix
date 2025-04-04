<template>
    <section class="user-info">
        <h2>Hello, {{ user.username }}</h2>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <ButtonComponent :data="updateButtonData" @click="startEditing" />
        <FormComponent 
            v-if="editing" 
            :data="formData" 
            @field-change="handleFieldChange" 
            @submit="saveEdits" 
        />
    </section>
    
    <section class="bookmarks">
        <h2>Bookmarks</h2>
        <CarouselComponent v-if="bookmarks.length > 0">
            <VideoComponent v-for="bookmark in bookmarks" :key="bookmark.id" :data="bookmark" />
        </CarouselComponent>
        <p v-else>Start bookmarking movies or series now.</p>
    </section>
    
    <section class="history">
        <h2>History</h2>
        <CarouselComponent v-if="history.length > 0">
            <VideComponent v-for="historyRecord in history" :key="historyRecord.id" :data="historyRecord" />
        </CarouselComponent>
        <p v-else>Start watching movies or series now.</p>
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
    import { ref, reactive, onMounted } from "vue";
    import ButtonComponent from "../components/ButtonComponent.vue";
    import FormComponent from "../components/FormComponent.vue";
    import VideoComponent from "../components/VideoComponent.vue";
    import CarouselComponent from "../components/CarouselComponent.vue";
    import type FormInterface from "../interfaces/FormInterface";
    import type ButtonInterface from "../interfaces/ButtonInterface";
    import type VideoInterface from "../interfaces/VideoInterface";
    
    const user = ref({
        id: null,
        username: "",
        email: "",
    });
    
    onMounted(() => {
        isDark.value = localStorage.getItem("theme") === "dark";
        applyTheme();

        const storedUser = localStorage.getItem("user");
        if (storedUser && storedUser !== "undefined") {
            user.value = JSON.parse(storedUser);
            console.log("User loaded from localStorage:", user.value);
        } else {
            console.warn("No valid user found in localStorage.");
        }
        fetchBookmarks();
        fetchHistory();
    });
    
    const editing = ref(false);
    const isDark = ref(false);
    const editPseudo = ref(user.value.username);
    const editEmail = ref(user.value.email);
    
    const history = ref<VideoInterface[]>([]);
    const bookmarks = ref<VideoInterface[]>([]);
    
    const fetchBookmarks = async () => {
        try {
            const response = await fetch(`http://localhost:3000/bookmarks/users/${user.value.id}`);
            const bookmarksData = await response.json();
        
            const moviePromises = bookmarksData.map(async (bookmark: any) => {
                const movieResponse = await fetch(`http://localhost:3000/movies/${bookmark.movie_id}`);
                const movieData = await movieResponse.json();
                return movieData;
            });
        
            bookmarks.value = await Promise.all(moviePromises);
        } catch (error) {
            console.error("Error fetching bookmarks:", error);
        }
    }
    
    const fetchHistory = async () => {
        try {
            const response = await fetch(`http://localhost:3000/histories/users/${user.value.id}`);
            const historyData = await response.json();
        
            const moviePromises = historyData.map(async (historyItem: any) => {
                const movieResponse = await fetch(`http://localhost:3000/movies/${historyItem.movie_id}`);
                const movieData = await movieResponse.json();
                return movieData;
            });
        
            history.value = await Promise.all(moviePromises);
        } catch (error) {
            console.error("Error fetching history:", error);
        }
    };
    
    const updateButtonData: ButtonInterface = {
        id: "updateBtn",
        textContent: "Update my information",
        class: "update-btn",
        type: "button"
    };
    
    const formData = reactive<FormInterface>({
        title: "Update Information",
        fields: [
            { id: "edit-email", placeholder: "John.doe@gmail.com", labelTextContent: "Email" },
        ],
        buttons: [
            { id: "save-button", textContent: "Save changes", type: "submit" }
        ]
    });
    
    const startEditing = () => {
        editing.value = true;
    };
    
    const handleFieldChange = (payload: { id: string, value: string }) => {
        if (payload.id === "editPseudo") {
            editPseudo.value = payload.value;
        } else if (payload.id === "editEmail") {
            editEmail.value = payload.value;
        }
    };
    
    const saveEdits = () => {
        user.value.username = editPseudo.value;
        user.value.email = editEmail.value;
        editing.value = false;
    };
    
    const toggleTheme = () => {
        isDark.value = !isDark.value;
        const theme = isDark.value ? "dark" : "light";
        localStorage.setItem("theme", theme);
        applyTheme();
    };
    
    const applyTheme = () => {
        document.documentElement.classList.toggle("dark", isDark.value);
    };
</script>
      
<style scoped lang="css">
    section {
        padding: 3rem;
    }
    
    .preferences h2 {
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
        content: "";
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
  