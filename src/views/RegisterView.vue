<template>
    <div class="register-view-container">
        <RegisterFormComponent />
    </div>
</template>

<script>
import RegisterFormComponent from "@/components/RegisterFormComponent.vue";

export default {
    name: "RegisterView",
    components: {
        RegisterFormComponent,
    },
};
</script>

<style scoped>
.register-view-container {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background: linear-gradient(
        90deg,
        rgba(255, 217, 53, 1) 5%,
        rgba(255, 242, 61, 1) 30%,
        rgba(255, 255, 255, 1) 70%
    );
}
</style>
