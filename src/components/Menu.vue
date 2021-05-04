<template>
  <header @click="handleMenuVisibility">
    <div class="logo" @click="redirect('/')">
      <h1>&lt;/&gt; Dev<span class="blue">Web</span></h1>
    </div>

    <div class="menu">
      <button type="button" class="btn-toggle-menu">
        <i class="fas fa-bars"></i>
      </button>

      <nav :class="{ 'visible' : isVisible }">
        <ul>
          <Item
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
            :iconClasses="item.iconClasses"
            :isSelected="item.isSelected"
            :link="item.link"
            @redirect="redirect(item.link)"
          />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import Item from './Item.vue';

  export default {
    name: 'Menu',
    components: {
      Item
    },
    props: {
      currentPath: String,
      isVisible: Boolean
    },
    data() {
      return {
        items: [
          {
            name: 'HTML5',
            iconClasses: ['fab', 'fa-html5'],
            isSelected: false,
            link: '/html'
          },
          {
            name: 'CSS3',
            iconClasses: ['fab', 'fa-css3-alt'],
            isSelected: false,
            link: '/css'
          },
          {
            name: 'Sass',
            iconClasses: ['fab', 'fa-sass'],
            isSelected: false,
            link: '/sass'
          },
          {
            name: 'JavaScript',
            iconClasses: ['fab', 'fa-js'],
            isSelected: false,
            link: '/js'
          },
          {
            name: 'Vue JS',
            iconClasses: ['fab', 'fa-vuejs'],
            isSelected: false,
            link: '/vue'
          }
        ]
      }
    },
    methods: {
      redirect(link) {
        if (link === this.currentPath) return;

        this.$router.push(link);
      },
      handleMenuVisibility({ path }) {
        const menuContainer = document.querySelector('nav');
        const btnToggleMenu = document.querySelector('.btn-toggle-menu');
        const menuWasClicked = path.includes(menuContainer);
        const btnToggleMenuWasClicked = path.includes(btnToggleMenu);

        if (menuWasClicked) return;

        if (btnToggleMenuWasClicked) {
          this.$emit('closeMenu', !this.isVisible);
          return;
        }

        this.$emit('closeMenu', false);
      }
    },
    watch: {
      currentPath() {
        this.items.forEach(item => {
          item.isSelected = (item.link === this.currentPath);
        });
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
    width: 270px;
    height: 100%;
    background-color: var(--medium-black);
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15%;
    border-bottom: 1px solid var(--light-gray);
    cursor: pointer;
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
    cursor: pointer;
  }

  .btn-toggle-menu i {
    font-size: 2.4rem;
  }

  .blue {
    color: var(--blue);
  }

  @media (max-width: 770px) {
    header {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: none;
      width: 100%;
      height: 60px;
      padding: 0 20px;
    }

    .logo {
      height: auto;
      border-bottom: 0;
    }

    .menu {
      display: flex;
      align-items: center;
    }

    .btn-toggle-menu {
      display: block;
    }

    nav {
      position: absolute;
      right: 0;
      top: 100%;
      width: 80vw;
      max-width: 500px;
      height: 90vh;
      background-color: var(--medium-black);
      border-top: 1px solid var(--light-gray);
      transform: translateX(100%);
      transition: 0.4s transform ease-in-out;
    }

    nav.visible {
      transform: translateX(0);
    }
  }
</style>
