<template>
    <div class="send-email-view-container">
        <SendEmailMessageComponent
            firstMessage=""
            secondMessage="Um e-mail para recuperação da senha foi enviado para o endereço:"
        />
    </div>
</template>

<script>
import SendEmailMessageComponent from "@/components/SendEmailMessageComponent.vue";

export default {
    name: "SendEmailMessageView",
    components: {
        SendEmailMessageComponent,
    },
};
</script>

<style scoped>
.send-email-view-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
</style>
