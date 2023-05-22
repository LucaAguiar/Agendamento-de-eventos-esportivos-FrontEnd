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
    height: 100%;
    justify-content: center;
}
</style>
