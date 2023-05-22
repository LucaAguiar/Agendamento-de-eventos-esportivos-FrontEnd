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
    height: 100%;
    justify-content: flex-end;
}
@media (max-width: 820px) {
    .recover-password-view-container {
        justify-content: center;
    }
}
</style>
