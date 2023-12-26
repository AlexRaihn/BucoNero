<template>
    <div class="about_conteiner" id="about1">
        <div>
            <Technologies/>
        </div>
        <div class="about_img"></div>
    </div>
</template>

<script>
import Technologies from './Technologies'

export default {
    name: "AboutMe",
    data() {
        return {

        }
    },
    components: {
        Technologies
    }
}
</script>

<style scoped>
.about_conteiner{
    padding: 5%;
    display: flex; 
    justify-content: center;
    text-align: right;
    font-size: 120%;
}
.about_img{
    background-image: url('https://axioweb.ru/images/wow/form7/1.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    min-width: 40%;
    min-height: 350px;
}
@media(max-width: 700px) {
    .about_conteiner{
        display: block;
        text-align: center;
    }
}
</style>