<template>
  <header>
    <div class="logo">
      <h1>&lt;/&gt; Dev<span class="blue">Web</span></h1>
    </div>

    <div class="menu">
      <button type="button" class="btn-toggle-menu">
        <i class="fas fa-bars"></i>
      </button>

      <nav>
        <!-- ITEM -->
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Menu',
    data() {
      return {
        items: [
          {
            name: 'HTML5',
            iconClasses: ['fab', 'fa-html5'],
            isSelected: false
          },
          {
            name: 'CSS3',
            iconClasses: ['fab', 'fa-css3-alt'],
            isSelected: false
          },
          {
            name: 'Sass',
            iconClasses: ['fab', 'fa-sass'],
            isSelected: false
          },
          {
            name: 'JavaScript',
            iconClasses: ['fab', 'fa-js'],
            isSelected: false
          },
          {
            name: 'Vue JS',
            iconClasses: ['fab', 'fa-vuejs'],
            isSelected: false
          }
        ]
      }
    }
  }
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--medium-black);
  }

  .logo {
    display: flex;
    align-items: center;
    height: 15%;
    padding: 0 60px;
    border-bottom: 1px solid var(--light-gray);
  }

  h1 {
    color: var(--white);
    font-size: 2.4rem;
    font-weight: bold;
  }

  .menu {
    height: 85%;
  }

  nav {
    height: 100%;
    overflow-y: auto;
  }

  .btn-toggle-menu {
    display: none;
  }

  .blue {
    color: var(--blue);
  }
</style>
