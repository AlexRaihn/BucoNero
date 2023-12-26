<template>
    <div class="header_container">
        <div class="header_text">
            <h1 :style="'user-select: none;'">Ваши идеи, моя реальность!</h1>
        </div>
        <div class="header_img"></div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.header_container{
    display: flex;
    justify-content: center;
    padding: 2% 5% 5% 5%;
}
.header_img{
    background-image: url("../assets/aboutme2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 300px;
    min-width: 50%;
}
.header_text{
    margin-top: 2%;
    background-image: url("../assets/aboutme.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    text-align: left;
}
@media (max-width: 740px) {
    .header_container{
        display: block;
    }
    .header_text{
        margin-top: 0%;
        background-image: none;
    }
}
</style>