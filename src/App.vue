<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'JanieAndPaul',
  components: {
    Header
  },
  computed: {
    notOnMain() {
      return !(this.$route.name === "Home")
    },
    route() {
      return this.$route.name
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap');

#app {
  margin: none;
  position: relative;
}
</style>
