<template>
    <div class="form-container">
        <div class="form-login-wrapper">
            <img
                src="../assets/logo-utfpr.png"
                alt="logo-utfpr"
                class="logo-utfpr"
            />
            <br />
            <br />
            <b-form>
                <div class="login-wrapper-input-username">
                    <b-icon-person font-scale="1.4" />
                    <b-form-input
                        class="login-input"
                        v-model="form.email"
                        type="email"
                        placeholder="E-mail"
                    ></b-form-input>
                </div>
                <div class="login-wrapper-input-password">
                    <b-icon-lock font-scale="1.2" />
                    <b-form-input
                        class="login-input"
                        v-model="form.password"
                        placeholder="Senha"
                        type="password"
                    ></b-form-input>
                </div>

                <b-button
                    type="submit"
                    variant="warning"
                    class="login-button"
                    @click="redirectToMenu()"
                    >Login</b-button
                >
            </b-form>
        </div>
        <div class="redirect-links-container">
            <span @click="redirectRegisterPage()" class="redirect-links">
                <b-icon-person-plus class="redirect-links-icons" />
                Crie sua conta
            </span>
            <span class="redirect-links" @click="redirectRecoverPasswordPage()">
                <b-icon-unlock class="redirect-links-icons" />
                Esqueci a senha
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginFormComponent",
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        redirectRegisterPage: function () {
            this.$router.push("/register");
        },
        redirectRecoverPasswordPage: function () {
            this.$router.push("/recover");
        },
        redirectToMenu: function () {
            this.$router.push("/menu");
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
.form-login-wrapper {
    align-items: center;
    padding: 12px;
    margin-bottom: 20px;
}
.logo-utfpr {
    width: 200px;
}

.login-wrapper-input-password,
.login-wrapper-input-username {
    display: flex;
    flex-direction: column;
    height: 57px;
    position: relative;
    margin-bottom: 1rem;
}
.login-input {
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
.login-wrapper-input-password > svg,
.login-wrapper-input-username > svg {
    position: absolute;
    top: 18px;
    left: 15px;
}
.login-button {
    padding: 5px 20px;
    font-weight: 600;
    font-size: 20px;
    width: 120px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    transition: 0.3s;
    border: 0;
}

.login-button:hover {
    transform: scale(1.05);
}
.redirect-links-container {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 15px;
}
.redirect-links {
    display: flex;
    text-decoration: none;
    color: #4a4a4a;
    font-size: 13px;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
}
.redirect-links:hover {
    transform: scale(1.05);
    color: #858585;
}

.redirect-links-icons {
    margin-right: 5px;
}
</style>
