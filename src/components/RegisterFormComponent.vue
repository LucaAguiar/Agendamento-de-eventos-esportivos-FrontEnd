<template>
    <div class="form-container">
        <div class="form-register-wrapper">
            <h2 style="font-weight: bold">Criar conta</h2>
            <div class="register-back-button-container">
                <p class="register-back-button" @click="backToLoginPage()">
                    <b-icon-arrow-left-short />Voltar
                </p>
            </div>
            <b-form>
                <div class="register-wrapper-input-username">
                    <b-form-input
                        class="register-input"
                        v-model="form.name"
                        placeholder="Nome completo"
                        required
                    ></b-form-input>
                </div>
                <div class="register-wrapper-input-date">
                    <b-form-datepicker
                        v-model="form.date"
                        class="register-input-date"
                        placeholder="Data de nascimento"
                    ></b-form-datepicker>
                </div>
                <div class="register-wrapper-input-email">
                    <b-form-input
                        class="register-input"
                        v-model="form.email"
                        placeholder="E-mail"
                        required
                        type="email"
                    ></b-form-input>
                </div>
                <div class="register-wrapper-input-password">
                    <b-form-input
                        class="register-input"
                        v-model="form.password"
                        placeholder="Senha"
                        required
                        type="password"
                    ></b-form-input>
                </div>
                <div class="register-wrapper-input-password">
                    <b-form-input
                        class="register-input"
                        v-model="form.confirmPassword"
                        placeholder="Confirmar senha"
                        required
                        type="password"
                    ></b-form-input>
                </div>

                <b-button
                    type="submit"
                    variant="warning"
                    class="register-button"
                    >Criar conta</b-button
                >
            </b-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterFormComponent",
    data: function () {
        return {
            form: {
                name: null,
                date: null,
                email: null,
                password: null,
                confirmPassword: null,
            },
        };
    },
    methods: {
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
    width: 400px;
    max-width: 460px;
    padding: 10px 5px;
}
.form-register-wrapper {
    align-items: center;
    padding: 12px;
    margin-bottom: 20px;
}
.register-back-button-container {
    display: flex;
}
.register-back-button {
    display: flex;
    text-decoration: none;
    color: #4a4a4a;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
}
.register-back-button:hover {
    transform: scale(1.05);
    color: #858585;
}
.register-wrapper-input-password,
.register-wrapper-input-username,
.register-wrapper-input-date,
.register-wrapper-input-email {
    display: flex;
    flex-direction: column;
    height: 57px;
    margin-bottom: 1rem;
}
.register-input,
.register-input-date {
    width: 100%;
    height: 100%;
    min-height: 55px;
    max-height: 55px;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.1);
    font-size: 18px;
    outline: none;
    color: #444;
}
.b-form-btn-label-control.form-control > .form-control {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
}
.register-button {
    padding: 5px 20px;
    font-weight: 600;
    font-size: 20px;
    width: 160px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    transition: 0.3s;
    border: 0;
}

.register-button:hover {
    transform: scale(1.05);
}
</style>
