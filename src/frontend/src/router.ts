import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import PlayerPage from "./pages/PlayerPage.vue";
import UserPage from "./pages/UserPage.vue";
import MoviesPage from "./pages/MoviesPage.vue";
import SeriesPage from "./pages/SeriesPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

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
            path: "/movies",
            component: MoviesPage
        },
        {
            path: "/series",
            component: SeriesPage
        },
        {
            path: "/user",
            component: UserPage,
        },
        {
            path: "/player/:id",
            component: PlayerPage
        },
        {
            path: "/:pathMatch(.*)*",
            component: NotFoundPage
        }
    ]
});

export default router;
