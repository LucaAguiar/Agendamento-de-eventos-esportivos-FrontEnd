<template>
    <div class="form-container">
        <div class="form-recover-password-wrapper">
            <h3 style="font-weight: bold; margin-bottom: 1rem">
                Informe o e-mail
            </h3>
            <div class="recover-password-back-button-container">
                <p
                    class="recover-password-back-button"
                    @click="backToLoginPage()"
                >
                    <b-icon-arrow-left-short />Voltar
                </p>
            </div>
            <b-form>
                <div class="recover-password-wrapper-input-username">
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
                        class="recover-password-input"
                        v-model="form.email"
                        type="email"
                        placeholder="E-mail"
                        required
                    ></b-form-input>
                </div>

                <b-button
                    type="submit"
                    variant="warning"
                    class="recover-password-button"
                    >Recuperar senha</b-button
                >
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
        redirectRegisterPage: function name() {
            this.$router.push("/register");
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
    width: 400px;
    max-width: 460px;
    padding: 10px 5px;
}
.form-recover-password-wrapper {
    align-items: center;
    padding: 12px;
    margin-bottom: 20px;
}
.recover-password-back-button-container {
    display: flex;
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
.recover-password-wrapper-input-password,
.recover-password-wrapper-input-username {
    display: flex;
    flex-direction: column;
    height: 57px;
    position: relative;
    margin-bottom: 2rem;
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
.recover-password-button {
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
</style>
