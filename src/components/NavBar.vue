<template>
        <b-navbar type="light" class="nav-container" toggleable="md">
            <b-navbar-nav class="nav-header">
                Buco Nero
            </b-navbar-nav>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#about1" class="nav-link">Обо мне</b-nav-item>
                        <b-nav-item href="#projects1" class="nav-link">Мои проекты</b-nav-item>
                        <b-nav-item href="#contacts1" class="nav-link">Контакты</b-nav-item>
                    </b-navbar-nav>
            </b-collapse>
        </b-navbar>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fasthand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
.nav-container{
    padding: 1%;
    padding-left: 5%;
    padding-right: 5%;
}
.nav-header{
    text-align: left;
    font-family: 'Fasthand', cursive;
    font-size: 200%;
    user-select: none;
}
.nav-link{
    font-size: 120%;
    font-family: 'Caveat', cursive;
}
.nav-link:hover{
    color: black;
}
@media (min-width: 700px) {
    .navbar-collapse{
        flex-grow: 0;
    }
    .nav-container{
        justify-content: space-between;
    }
}
</style>