<template>
    <div class="search-bar-container">
        <b-form-input type="search"></b-form-input>
        <b-button class="search-button" variant="warning"
            ><b-icon-search /> Buscar</b-button
        >
    </div>
</template>

<script>
export default {
    name: "MenuSearchBarComponent",
};
</script>

<style scoped>
.search-bar-container {
    display: flex;
    gap: 5px;
    height: 35px;
    margin-top: 20px;
}
.search-button {
    font-weight: 600;
    font-size: 14px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    transition: 0.3s;
    border: 0;
    width: 150px;
}
</style>
