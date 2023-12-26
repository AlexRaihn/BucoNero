<template>
    <div id="projects1">
        <h2>Мои проекты</h2>
        <div class="projects_container">
            <transition name="fade">
                <div v-if="scrollNow" class="projects_img">
                </div>
            </transition>
            <div class="info_cont">
                <Projectinfo
                v-for="project in projects"
                :key="project.link"
                :name="project.name" 
                :description="project.description" 
                :link="project.link"
                />
            </div>
        </div>
    </div>
  </template>
  
<script>
import Projectinfo from './Projectinfo.vue'

export default {
    name: "Projects",
    data() {
      return {
        scrollNow: false,
        projects: [
            {
                name: "Список дел",
                description: "Это приложение для управления задачами с возможностью создания, редактирования и удаления карточек дел. Также есть функции замены заднего фона и переключения между тёмной и светлой темами.",
                link: "https://alexraihn.github.io/MyToDoList/#/"
            },
            {
                name: "SimonTheGame",
                description: "Игра где нужно кликать последовательность цветов заданную компьютером",
                link: "https://alexraihn.github.io/SimonTheGame/"
            },
            {
                name: "Формы с валидацией",
                description: "Это формы создания клиентов поэтапно с их валидацией",
                link: "https://alexraihn.github.io/NewClient/"
            }
        ]
      };
    },
    mounted() {
      window.addEventListener("scroll", this.onScroll);
    },
    methods: {
      onScroll() {
        if (window.scrollY > 330) {
          this.scrollNow = true;
        } else {
          this.scrollNow = false;
        }
      },
    },
    components: {
        Projectinfo
    }
  };
  </script>
  
  <style scoped>
 .fade-enter-active, .fade-leave-active {
  transition: opacity 3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.projects_container {
    display: flex;
    justify-content: center;
    text-align: left;
    min-height: 300px;
}
.projects_img{
    background-image: url('https://blog.grantmcgregor.co.uk/hubfs/web%20developer.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    width: 30%;
    margin-right: 10%;
}
.info_cont{
    width: 40%;
    font-size: 120%;
}
@media (max-width: 900px) {
  .projects_img{
    width: 100%;
    margin: 0;
    min-height: 300px;
    background-position: center;
  }
  .projects_container{
    display: block;
  }
  .info_cont{
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
}
  </style>