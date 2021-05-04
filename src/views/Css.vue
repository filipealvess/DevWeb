<template>
  <div @click="$emit('click')" class="view">
    CSS
  </div>
</template>

<script>
  export default {
    name: 'Css',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';
</style>
