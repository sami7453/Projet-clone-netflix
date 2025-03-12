import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from "./pages/RegisterPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import PlayerPage from "./pages/PlayerPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: HomePage
        },
        {
            path: '/login',
            component: LoginPage
        },
        {
            path: '/register',
            component: RegisterPage
        },
        {
            path: '/search',
            component: SearchPage
        },
        {
            path: '/player',
            component: PlayerPage
        }
    ]
});

export default router;
