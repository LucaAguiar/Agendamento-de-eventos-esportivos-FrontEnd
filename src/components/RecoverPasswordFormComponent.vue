<template>
    <div class="form-container">
        <div class="form-recover-password-wrapper">
            <h2 class="form-recover-password-title">Informe o e-mail</h2>
            <div class="recover-password-back-button-container">
                <p
                    class="recover-password-back-button"
                    @click="backToLoginPage()"
                >
                    <b-icon-arrow-left-short />Voltar
                </p>
            </div>
            <div class="recover-password-description-container">
                <p class="recover-password-description">
                    Para redefinir sua senha, informe o e-mail cadastrado na sua
                    conta e lhe enviaremos um link com as instruções.
                </p>
            </div>
            <b-form style="width: 100%">
                <div class="recover-password-wrapper-input-username">
                    <b-icon-envelope-open />
                    <b-form-input
                        class="recover-password-input"
                        v-model="form.email"
                        type="email"
                        placeholder="E-mail"
                    ></b-form-input>
                </div>
                <div class="recover-password-button-container">
                    <b-button
                        type="submit"
                        variant="warning"
                        class="recover-password-button"
                        @click="redirectMessagePage()"
                    >
                        Enviar</b-button
                    >
                </div>
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecoverPasswordFormComponent",
    data() {
        return {
            form: {
                email: "",
            },
        };
    },
    methods: {
        redirectRegisterPage: function () {
            this.$router.push("/register");
        },
        redirectMessagePage: function () {
            this.$router.push("/recover-message");
        },
        backToLoginPage: function () {
            return this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 460px;
    padding: 10px 5px;
}
.form-recover-password-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    margin-bottom: 20px;
}
.form-recover-password-title {
    font-weight: bold;
    margin-bottom: 1rem;
}
.recover-password-back-button-container {
    display: flex;
    width: 100%;
}
.recover-password-back-button {
    display: flex;
    text-decoration: none;
    color: #4a4a4a;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
}
.recover-password-back-button:hover {
    transform: scale(1.05);
    color: #858585;
}
.recover-password-description-container {
    width: 95%;
}
.recover-password-description {
    font-size: 14px;
    color: #4a4a4a;
    text-align: justify;
    margin-bottom: 8px;
}
.recover-password-wrapper-input-username {
    display: flex;
    flex-direction: column;
    height: 57px;
    position: relative;
    margin-bottom: 2rem;
    width: 100%;
}
.recover-password-input {
    width: 100%;
    height: 100%;
    min-height: 55px;
    max-height: 55px;
    padding-left: 50px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    outline: none;
    color: #444;
}
.recover-password-wrapper-input-password > svg,
.recover-password-wrapper-input-username > svg {
    position: absolute;
    top: 20px;
    left: 15px;
}
.recover-password-button-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
.recover-password-button {
    display: flex;
    align-items: center;
    padding: 5px 20px;
    font-weight: 600;
    font-size: 20px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    transition: 0.3s;
    border: 0;
}
.recover-password-button:hover {
    transform: scale(1.05);
}
.recover-password-button-icon {
    margin-right: 8px;
}

@media (max-width: 340px) {
    .recover-password-description,
    p {
        font-size: 12px;
    }
    .form-recover-password-wrapper {
        padding: 5px;
    }
}
</style>
