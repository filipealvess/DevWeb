<template>
  <div id="app">
    <Menu
      :currentPath="currentPath"
      :isVisible="menuIsVisible"
      @closeMenu="handleMenuVisibility"
    />

    <router-view
      @currentPath="updateCurrentPath"
      @click="handleMenuVisibility(false)"
    ></router-view>
  </div>
</template>

<script>
  import Menu from './components/Menu.vue';

  export default {
    name: 'App',
    components: {
      Menu
    },
    data() {
      return {
        currentPath: '/',
        menuIsVisible: false
      }
    },
    methods: {
      updateCurrentPath(route) {
        this.currentPath = route.path;
      },
      handleMenuVisibility(makeVisible) {
        this.menuIsVisible = makeVisible;
      }
    },
    created() {
      document.body.addEventListener('click', ({ target }) => {
        const appWasClicked = target === document.querySelector('#app');

        if (appWasClicked) {
          this.handleMenuVisibility(false);
        }
      });
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
    overflow-x: hidden;
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

    /* Firefox scrollbars */
    scroll-width: 10px;
    scroll-color: var(--light-gray) var(--light-black);
  }

  /* Chrome, Edge and Safari scrollbars */
  *::-webkit-scrollbar { width: 10px; }
  *::-webkit-scrollbar-track { background-color: var(--light-black); }
  *::-webkit-scrollbar-thumb { background-color: var(--light-gray); }

  #app {
    display: grid;
    grid-template-columns: 270px 1fr;
    grid-template-rows: 100vh;
    grid-template-areas: 'menu view';
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
  }

  h2, h3 {
    color: var(--white);
    font-family: 'Montserrat', sans-serif;
  }

  button {
    background-color: transparent;
  }

  header {
    grid-area: menu;
  }

  .view {
    grid-area: view;
    overflow-y: auto;
  }

  .view p {
    font-size: 1.6rem;
  }

  @media (max-width: 770px) {
    #app {
      grid-template-columns: 100vw;
      grid-template-rows: 60px 1fr;
      grid-template-areas: 'menu' 'view';
    }

    * { scroll-width: 5px; }
    *::-webkit-scrollbar { width: 5px; }
  }
</style>
