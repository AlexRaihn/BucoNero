<template>
    <div>
        <div class="technologies_container">
            <p class="technologies_header">Мой стэк</p>
            <i class="fa-brands fa-js technologies_icon"></i>
            <i class="fa-brands fa-vuejs technologies_icon"></i>
            <i class="fa-brands fa-php technologies_icon"></i>
            <i class="fa-brands fa-css3-alt technologies_icon"></i>
            <i class="fa-brands fa-html5 technologies_icon"></i>
            <i class="fa-brands fa-bootstrap technologies_icon"></i>
            <i class="fa-brands fa-node-js technologies_icon"></i>
        </div>
        <div>
            <div class="display_icon_cont" @click="switchDisplay()">
                <i class="fa-solid fa-angle-down" v-if="description==false"></i>
                <i class="fa-solid fa-angle-up" v-else></i>
            </div>
            <transition name="description_animation">
                <div v-if="description==true" class="description_text">
                    <p>На Frontent я использую фреймворк Vue JS в сочетании с нативными HTML и CSS. В случае это требуется, применяю Bootstrap</p>
                    <p>На Backend  я предпочитаю использовать нативный Node JS или PHP</p>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Technologies',
    data() {
        return {
            description: false,
        }
    },
    methods: {
        switchDisplay: function() {
            this.description = !this.description;
        }
    }
}
</script>

<style scoped>
.technologies_container{
    text-align: center;
    font-size: 120%;
    width: 100%;
}
.technologies_icon{
    font-size: 200%;
}
.fa-js{
    color: #efd81d;
}
.fa-vuejs{
    color: #3fb27f;
}
.fa-php{
    color: #7377ad;
}
.fa-css3-alt{
    color: #254bdd;
}
.fa-html5{
    color: #e96228;
}
.fa-bootstrap{
    color: #7810f1;
}
.description_text{
    font-size: 100%;
    text-align: left;
}
.display_icon_cont{
    display: flex;
    justify-content: center;
}
.display_icon_cont:hover{
    background: linear-gradient(to bottom, #333333, #f2f2f2);
}
.fa-node-js{
    color: #62995d;
}
.description_animation-enter-active, .description_animation-leave-active {
  transition: opacity .5s;
}
.description_animation-enter, .description_animation-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>