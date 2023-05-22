<template>
    <div class="login-view-container">
        <LoginFormComponent />
    </div>
</template>

<script>
import LoginFormComponent from "@/components/LoginFormComponent.vue";

export default {
    name: "LoginView",
    components: {
        LoginFormComponent,
    },
};
</script>

<style scoped>
.login-view-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
}

@media (max-width: 820px) {
    .login-view-container {
        justify-content: center;
    }
}
</style>
