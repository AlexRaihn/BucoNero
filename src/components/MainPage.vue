<template>
  <div>
    <div>
      <NavBar/>
    </div>
    <div>
      <Header/>
    </div>
    <div>
      Привет! Я разработчик, готовый выполнить проект любой сложности. Гарантирую высокий уровень профессионализма в своей работе.
    </div>
    <div>
      <AboutMe/>
    </div>
    <div>
      <Projects/>
    </div>
    <div>
      <Contacts/>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contacts from './Contacts';

export default {
  name: 'MainPage',
  data () {
    return {
      scrollCalc: false
    }
  },
  components: {
    NavBar,
    Header,
    AboutMe,
    Projects,
    Contacts
  }
}
</script>

<style scoped>

</style>
