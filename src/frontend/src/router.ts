import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import PlayerPage from "./pages/PlayerPage.vue";
import UserPage from "./pages/UserPage.vue";
import MovieDetailsPage from "./pages/MovieDetailsPage.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "",
            component: HomePage
        },
        {
            path: "/login",
            component: LoginPage
        },
        {
            path: "/register",
            component: RegisterPage
        },
        {
            path: "/player",
            component: PlayerPage
        },
        {
            path: "/user",
            component: UserPage,
        },
        {
            path: "/movie-details/:id",
            component: MovieDetailsPage
        }
    ]
});

export default router;
