<template>
    <div class="recover-password-view-container">
        <RecoverPasswordFormComponent />
    </div>
</template>

<script>
import RecoverPasswordFormComponent from "@/components/RecoverPasswordFormComponent.vue";

export default {
    name: "RecoverPasswordView",
    components: {
        RecoverPasswordFormComponent,
    },
};
</script>

<style scoped>
.recover-password-view-container {
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
