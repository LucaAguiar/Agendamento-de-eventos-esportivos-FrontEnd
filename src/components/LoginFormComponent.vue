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
                    <svg
                        data-v-11c2177c=""
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                    >
                        <path
                            data-v-11c2177c=""
                            d="M18 17.136V15.456C18 14.5649 17.5786 13.7103 16.8284 13.0801C16.0783 12.45 15.0609 12.096 14 12.096H6C4.93913 12.096 3.92172 12.45 3.17157 13.0801C2.42143 13.7103 2 14.5649 2 15.456V17.136"
                            stroke="#666360"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            data-v-11c2177c=""
                            d="M10 9.072C12.2091 9.072 14 7.26681 14 5.04C14 2.81318 12.2091 1.008 10 1.008C7.79086 1.008 6 2.81318 6 5.04C6 7.26681 7.79086 9.072 10 9.072Z"
                            stroke="#666360"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                    <b-form-input
                        class="login-input"
                        v-model="form.email"
                        type="email"
                        placeholder="E-mail"
                        required
                    ></b-form-input>
                </div>
                <div class="login-wrapper-input-password">
                    <svg
                        viewBox="0 0 16 16"
                        width="1em"
                        height="1em"
                        focusable="false"
                        role="img"
                        aria-label="lock"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="bi-lock mx-auto b-icon bi"
                        data-v-41be6633=""
                    >
                        <g data-v-41be6633="">
                            <path
                                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"
                            ></path>
                        </g>
                    </svg>
                    <b-form-input
                        class="login-input"
                        v-model="form.password"
                        placeholder="Senha"
                        required
                        type="password"
                    ></b-form-input>
                </div>

                <b-button type="submit" variant="warning" class="login-button"
                    >Login</b-button
                >
            </b-form>
        </div>
        <div class="redirect-links-container">
            <span @click="redirectRegisterPage()" class="redirect-links"
                ><svg
                    data-v-41be6633=""
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    focusable="false"
                    role="img"
                    aria-label="person plus"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    style="margin-right: 5px"
                >
                    <g data-v-41be6633="">
                        <path
                            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                        ></path>
                        <path
                            fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                        ></path>
                    </g>
                </svg>
                Crie sua conta
            </span>
            <span class="redirect-links" @click="redirectRecoverPasswordPage()">
                <svg
                    data-v-41be6633=""
                    viewBox="0 0 16 16"
                    width="12px"
                    height="12px"
                    focusable="false"
                    role="img"
                    aria-label="unlock"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    style="margin-right: 5px"
                >
                    <g data-v-41be6633="">
                        <path
                            d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"
                        ></path>
                    </g>
                </svg>
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
        redirectRegisterPage: function name() {
            this.$router.push("/register");
        },
        redirectRecoverPasswordPage: function name() {
            this.$router.push("/recover");
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
    top: 20px;
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
</style>
