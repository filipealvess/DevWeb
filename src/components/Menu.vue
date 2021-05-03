<template>
  <header>
    <div class="logo" @click="redirect(-1)">
      <h1>&lt;/&gt; Dev<span class="blue">Web</span></h1>
    </div>

    <div class="menu">
      <button type="button" class="btn-toggle-menu">
        <i class="fas fa-bars"></i>
      </button>

      <nav>
        <ul>
          <Item
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
            :iconClasses="item.iconClasses"
            :isSelected="item.isSelected"
            :link="item.link"
            @redirect="redirect(index)"
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
      redirect(itemIndex) {
        this.items.forEach(item => (item.isSelected = false));

        if (itemIndex === -1) {
          this.$router.push('/');
          return;
        }

        this.items[itemIndex].isSelected = true;

        this.$router.push(this.items[itemIndex].link);
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
  }

  .blue {
    color: var(--blue);
  }
</style>
