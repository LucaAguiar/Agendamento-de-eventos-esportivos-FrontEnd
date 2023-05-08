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
    height: 100vh;
    justify-content: flex-end;
    background: linear-gradient(
        90deg,
        rgba(255, 217, 53, 1) 5%,
        rgba(255, 242, 61, 1) 30%,
        rgba(255, 255, 255, 1) 70%
    );
}
</style>
