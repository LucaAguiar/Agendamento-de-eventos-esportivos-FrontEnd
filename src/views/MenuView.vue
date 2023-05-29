<template>
    <div class="menu-view-container">
        <div class="menu-view-wrapper">
            <div class="menu-header">
                <div class="logo-container">
                    <img
                        src="../assets/logo-app.png"
                        alt="logo-app"
                        class="logo-app"
                    />
                </div>
                <div class="menu-header-dropdown-container">
                    <b-dropdown
                        id="dropdown"
                        class="dropdown"
                        variant="light"
                        right
                    >
                        <template #button-content>
                            <b-icon-person />
                            <span style="font-size: 15px"> João Vitor</span>
                        </template>
                        <b-dropdown-item @click="redirect('/user')">
                            <span class="dropdown-item-description"
                                ><b-icon-person-lines-fill /> Área do
                                usuário</span
                            ></b-dropdown-item
                        >
                        <b-dropdown-item>
                            <span class="dropdown-item-description"
                                ><b-icon-calendar-plus /> Criar evento</span
                            ></b-dropdown-item
                        >
                        <b-dropdown-item>
                            <span class="dropdown-item-description"
                                ><b-icon-calendar4-event /> Meus eventos</span
                            ></b-dropdown-item
                        >
                        <b-dropdown-item @click="redirect('/')">
                            <span class="dropdown-item-description"
                                ><b-icon-box-arrow-in-left /> Desconectar</span
                            ></b-dropdown-item
                        >
                    </b-dropdown>
                </div>
            </div>
            <div class="menu-search-bar"><MenuSearchBarComponent /></div>
            <div class="menu-body">
                <MenuEventCardsComponent />
                <MenuEventCardsComponent />
                <MenuEventCardsComponent />
                <MenuEventCardsComponent />
            </div>
        </div>
    </div>
</template>

<script>
import MenuSearchBarComponent from "@/components/MenuComponents/MenuSearchBarComponent.vue";
import MenuEventCardsComponent from "@/components/MenuComponents/MenuEventCardsComponent.vue";

export default {
    name: "MenuView",
    components: {
        MenuSearchBarComponent,
        MenuEventCardsComponent,
    },
    methods: {
        redirect: function (path) {
            this.$router.push(path);
        },
    },
};
</script>

<style scoped>
.menu-view-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.menu-view-wrapper {
    display: flex;
    width: 100%;
    max-width: 800px;
    flex-direction: column;
}
.menu-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
}
.logo-app {
    max-width: 180px;
}
#dropdown {
    font-size: 15px;
    border-radius: 10px;
    background-color: #ffd935;
    color: black;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
}
.dropdown-item-description {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
}
.menu-search-bar {
    padding: 20px 0;
}
.menu-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5px;
    overflow-y: auto;
    gap: 20px;
}
</style>
