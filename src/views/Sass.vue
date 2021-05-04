<template>
  <div @click="$emit('click')" class="view">
    SASS
  </div>
</template>

<script>
  export default {
    name: 'Sass',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';
</style>
