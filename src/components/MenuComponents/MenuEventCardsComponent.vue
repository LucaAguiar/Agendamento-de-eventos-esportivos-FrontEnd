<template>
    <div class="event-card-container">
        <div class="event-card-wrapper">
            <div class="event-card-img-container">
                <img
                    src="../../assets/img-esporte.png"
                    alt="event-card-img"
                    class="event-card-img"
                />
            </div>
            <div class="event-informations-container">
                <h5>Torneio de Futsal</h5>
                <div class="event-informations-wrapper">
                    <b-icon-alarm />
                    <span class="event-informations"
                        >07/05/2023 - 09:00 às 16:00
                    </span>
                </div>
                <div class="event-informations-wrapper">
                    <b-icon-pin-map />
                    <span class="event-informations"
                        >Quadra de Esportes UTFPR</span
                    >
                </div>
                <div class="event-informations">
                    <b-icon-people /> <span> 01/40 Inscritos</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuEventCardsComponent",
};
</script>

<style scoped>
.event-card-container {
    display: flex;
    width: 100%;
    min-height: 150px;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    padding: 5px;
    background-color: white;
    border-radius: 10px;
}
.event-card-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}
.event-card-img {
    border-radius: 10px;
    max-height: 120px;
}
.event-informations-container {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    height: 100%;
    max-height: 130px;
    padding: 5px;
    gap: 4px;
}
.event-informations-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
}
.event-informations {
    font-size: 15px;
}
</style>
