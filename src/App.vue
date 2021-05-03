<template>
  <div id="app">
    <Menu />

    <router-view></router-view>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue';

  export default {
    name: 'App',
    components: {
      Menu
    }
  }
</script>

<style>
  html {
    --dark-black: #181818;
    --medium-black: #212121;
    --light-black: #383838;
    --light-gray: #E0E0E0;
    --white: #FFFFFF;
    --blue: #34B1CD;

    font-size: 10px;
  }

  body {
    min-height: 100vh;
    background-color: var(--dark-black);
  }

  * {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    color: var(--light-gray);
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    list-style: none;
  }

  #app {
    display: flex;
  }

  h2, h3 {
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
  }

  button {
    background-color: transparent;
  }
</style>
