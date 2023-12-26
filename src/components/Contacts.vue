<template>
    <div id="contacts1">
        <h2>Контакты</h2>
        <div class="card_container">
            <div class="card">
                <i class="fa-brands fa-whatsapp"></i>
                <a href="https://wa.me/79290091520" target="_blank" class="card_header">Whats App</a>
            </div>
            <div class="card">
                <i class="fa-brands fa-discord"></i>
                <a href=" https://discordapp.com/users/397848923357577226" class="card_header" target="_blank">Discord</a>
            </div>
            <div class="card">
                <i class="fa-brands fa-telegram"></i>
                <a href="https://web.telegram.org/k/#@AlexRaihn" class="card_header" target="_blank">Telegram</a>
            </div>
            <div class="card">
                <i class="fa-regular fa-envelope"></i>
                <a href="mailto:iogan.dead@yandex.ru" class="card_header">Яндекс Почта</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.card_container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.card{
    min-width: 200px;
    min-height: 100px;
    padding: 1%;
    border: none;
    margin: 1%;
    font-size: 150%;
}
.card_header{
    padding-top: 15%;
    color: black;
    text-decoration: none;
}
</style>