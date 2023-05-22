<template>
    <div class="message-container">
        <div class="message-wrapper">
            <div class="messages-container">
                <span class="message">
                    {{ firstMessage }}
                </span>
                <span class="message">
                    {{ secondMessage }}
                </span>
                <span class="email-address">joaomello@alunos.utfpr.edu.br</span>
            </div>
            <div class="back-to-login-button-container">
                <b-button
                    class="back-to-login-button"
                    variant="warning"
                    @click="redirectToLoginPage()"
                    >Fazer login</b-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SendEmailMessageComponent",
    props: ["firstMessage", "secondMessage"],
    methods: {
        redirectToLoginPage: function () {
            this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.message-container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    max-width: 800px;
    max-height: 500px;
    background-color: white;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 10px;
}
.message-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
.messages-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
.message {
    font-size: 28px;
    font-weight: 200;
}
.email-address {
    font-size: 25px;
    font-weight: bold;
    margin: 10px 0;
}
.back-to-login-button-container {
    display: flex;
    width: 100%;
    justify-content: center;
}
.back-to-login-button {
    padding: 5px 20px;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    max-width: 160px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    transition: 0.3s;
    border: 0;
}

.back-to-login-button:hover {
    transform: scale(1.05);
}

@media (max-width: 600px) {
    .message-container {
        max-height: 300px;
    }
    .back-to-login-button {
        max-width: 160px;
        font-size: 15px;
    }
    .message {
        font-size: 18px;
    }
    .email-address {
        font-size: 15px;
    }
}

@media (max-width: 340px) {
    .message {
        font-size: 15px;
    }
    .email-address {
        font-size: 12px;
    }
}
</style>
