<template>
  <Header/>
  <HomeView/>
</template>

<script>
import Header from './components/Header.vue'
import HomeView from './view/HomeView.vue';

export default {
  name: 'App',
  components: {
    Header,
    HomeView
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap');



/* CSS RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  scroll-behavior: smooth;
}

body{
  font-family: 'Fira Sans', sans-serif;
}

</style>
