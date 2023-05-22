<template>
    <div class="user-area-container">
        <div class="user-area-wrapper">
            <div class="user-back-button-container">
                <p class="user-back-button" @click="backToLoginPage()">
                    <b-icon-arrow-left-short />Voltar
                </p>
            </div>
            <div class="user-name-container">
                <span>João Vitor Mello</span>
            </div>
            <div class="user-photo-container">
                <img
                    src="../assets/avatar.png"
                    alt="avatar"
                    style="border-radius: 100%"
                />
                <div class="edit-image-container">
                    <span>Alterar imagem</span>
                </div>
            </div>
            <div class="user-informations-container">
                <div>
                    <div class="information-container">
                        <span class="topic-information">Email:</span>
                        <span class="information"
                            >joaomello@alunos.utfpr.edu.br</span
                        >
                    </div>
                    <div class="information-container">
                        <span class="topic-information"
                            >Data de nascimento:</span
                        >
                        <span class="information">23/12/2002</span>
                    </div>
                    <div class="information-container">
                        <span class="topic-information">Eventos criados:</span>
                        <span class="information">5</span>
                    </div>
                    <div class="information-container">
                        <span class="topic-information"
                            >Eventos participados:</span
                        >
                        <span class="information">22</span>
                    </div>
                </div>
                <div class="update-password-container" v-if="updatePassword">
                    <div class="update-password-wrapper">
                        <b-form-input
                            class="update-password-input"
                            v-model="form.password"
                            type="password"
                            placeholder="Senha atual"
                        ></b-form-input>
                    </div>
                    <div class="update-password-wrapper">
                        <b-form-input
                            class="update-password-input"
                            v-model="form.newPassword"
                            type="password"
                            placeholder="Nova senha"
                        ></b-form-input>
                    </div>
                    <div class="update-password-wrapper">
                        <b-form-input
                            class="update-password-input"
                            v-model="form.confirmPassword"
                            type="password"
                            placeholder="Confirmar senha"
                        ></b-form-input>
                    </div>
                    <div>
                        <b-button
                            class="update-password-button-confirm"
                            variant="success"
                            @click="clickUpdatePassword()"
                            >Confirmar</b-button
                        >
                    </div>
                </div>
            </div>
            <div
                class="button-update-password-container"
                v-if="!updatePassword"
            >
                <b-button
                    class="update-password-button"
                    variant="warning"
                    @click="clickUpdatePassword()"
                    >Alterar senha</b-button
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserAreaComponent",
    data() {
        return {
            form: {
                password: null,
                newPassword: null,
                confirmPassword: null,
            },
            updatePassword: false,
        };
    },
    methods: {
        clickUpdatePassword: function () {
            this.updatePassword = !this.updatePassword;
        },
        backToLoginPage: function () {
            return this.$router.push("/");
        },
    },
};
</script>

<style scoped>
.user-area-container {
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
.user-area-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
.user-back-button-container {
    display: flex;
    width: 100%;
}
.user-back-button {
    display: flex;
    text-decoration: none;
    color: #4a4a4a;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
    margin: 0;
}
.user-back-button:hover {
    transform: scale(1.05);
    color: #858585;
}
.user-name-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
}
.user-photo-container {
    display: flex;
    width: 100%;
    max-width: 160px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
}
.edit-image-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    max-width: 150px;
    font-size: 10px;
    text-decoration: underline;
    color: rgb(47, 47, 236);
    cursor: pointer;
}
.user-informations-container {
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    gap: 5px;
}
.information-container,
.button-update-password-container {
    display: flex;
    width: 100%;
    max-width: 400px;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
}
.topic-information {
    text-align: start;
    font-size: 18px;
    font-weight: 600;
}
.information {
    text-align: start;
    margin-left: 5px;
    font-size: 14px;
}
.button-update-password-container {
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    min-width: 100%;
    min-height: 0;
}
.update-password-button,
.update-password-button-confirm {
    width: 100%;
    max-width: 160px;
    font-weight: 600;
    font-size: 15px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    transition: 0.3s;
    border: 0;
}
.update-password-container {
    width: 100%;
    height: 100%;
    max-width: 300px;
    padding: 5px;
}

.update-password-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
}
.update-password-input {
    width: 100%;
    height: 100%;
    min-height: 45px;
    max-height: 45px;
    border-radius: 10px;
    border: none;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    outline: none;
    color: #444;
}
.update-password-button-confirm {
    background-color: #1b9b0f;
    color: white;
}
</style>
