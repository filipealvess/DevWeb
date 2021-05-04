<template>
  <div @click="$emit('click')" class="view">
    <p class="logo">&lt;/&gt; Dev<span class="blue">Web</span></p>
    <p class="invitation">
      Não deixe para depois.
      <strong>Escolha uma tecnologia</strong>
      no menu e comece seus estudos agora mesmo!
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';

  .view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    margin-bottom: 20px;
    font-size: 3.2rem;
    font-weight: bold;
    color: var(--white);
  }

  .invitation {
    width: 90%;
    max-width: 450px;
    text-align: center;
  }

  .blue {
    color: var(--blue);
  }
</style>
