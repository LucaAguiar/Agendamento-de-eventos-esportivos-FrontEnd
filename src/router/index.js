import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import RegisterMessageView from "../views/RegisterMessageView.vue";
import RecoverPasswordView from "../views/RecoverPasswordView.vue";
import RecoverMessageView from "../views/RecoverMessageView.vue";
import UserAreaView from "../views/UserAreaView.vue";

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
        path: "/register-message",
        component: RegisterMessageView,
    },
    {
        path: "/recover",
        component: RecoverPasswordView,
    },
    {
        path: "/recover-message",
        component: RecoverMessageView,
    },
    {
        path: "/user",
        component: UserAreaView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
