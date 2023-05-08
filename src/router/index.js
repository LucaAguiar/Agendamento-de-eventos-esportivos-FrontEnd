import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RecoverPasswordView from "../views/RecoverPasswordView.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: LoginView,
    },
    {
        path: "/register",
        component: RegisterView,
    },
    {
        path: "/recover",
        component: RecoverPasswordView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
