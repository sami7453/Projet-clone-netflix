import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "",
            component: () => import("./pages/HomePage.vue")
        },
        {
            path: "/login",
            component: () => import("./pages/LoginPage.vue")
        },
        {
            path: "/register",
            component: () => import("./pages/RegisterPage.vue")
        },
        {
            path: "/movies",
            component: () => import("./pages/MoviesPage.vue")
        },
        {
            path: "/series",
            component: () => import("./pages/SeriesPage.vue")
        },
        {
            path: "/profile",
            component: () => import("./pages/ProfilePage.vue"),
        },
        {
            path: "/player/movies/:id",
            component: () => import("./pages/PlayerPage.vue")
        },
        {
            path: "/player/series/:id",
            component: () => import("./pages/PlayerPage.vue")
        },
        {
            path: "/admin-dashboard",
            component: () => import("./pages/AdminPage.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import("./pages/NotFoundPage.vue")
        }
    ]
});

export default router;
