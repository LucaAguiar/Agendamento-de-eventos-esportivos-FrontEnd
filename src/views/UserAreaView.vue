<template>
    <div class="user-area-view-container">
        <UserAreaComponent />
    </div>
</template>

<script>
import UserAreaComponent from "@/components/UserAreaComponent.vue";

export default {
    name: "UserAreaView",
    components: {
        UserAreaComponent,
    },
};
</script>

<style scoped>
.user-area-view-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style>
