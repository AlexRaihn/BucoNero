<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  },
  async beforeCreate() {
    if(window.location.href != 'http://localhost:8080/#/') {
      this.$router.push('/'); 
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor: url('../src/assets/icons8-select-cursor-32.png'), auto;
}
</style>
