<template>
    <div>   
        <div @click="descriptionOff = !descriptionOff" class="proj_item">
            <div>
                <i class="fa-solid fa-circle"></i> 
                {{ name }}
            </div>
            <div>
                <i class="fa-solid fa-angle-down" v-if="descriptionOff == false"></i>
                <i class="fa-solid fa-angle-up" v-else></i>
            </div>
        </div>
        <transition name="description_animation">
            <div v-if="descriptionOff==true" class="description_text"> 
                {{ description }}
                <a :href="link" target="_blank">Ссылка</a>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Projectinfo',
    data() {
        return {
            descriptionOff: false,
        }
    },
    props: {
        name: String,
        description: String,
        link: String
    },
}
</script>

<style scoped>
.description_animation-enter-active, .description_animation-leave-active {
  transition: opacity .5s;
}
.description_animation-enter, .description_animation-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.description_text{
    margin: 5%;
    text-align: left;
}
.proj_item{
    display: flex;
    justify-content: space-between;
}
</style>