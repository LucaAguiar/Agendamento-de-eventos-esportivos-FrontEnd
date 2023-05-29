<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
#app {
    display: flex;
    width: 100%;
    height: 100vh;
    font-family: system-ui;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(
        90deg,
        rgba(255, 217, 53, 1) 5%,
        rgba(255, 242, 61, 1) 30%,
        rgba(255, 255, 255, 1) 70%
    );
    padding: 10px;
    overflow-y: hidden;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}

.b-form-btn-label-control.form-control > .form-control {
    display: flex;
    align-items: center;
}
</style>
