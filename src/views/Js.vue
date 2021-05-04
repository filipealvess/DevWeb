<template>
  <div @click="$emit('click')" class="view">
    JS
  </div>
</template>

<script>
  export default {
    name: 'Js',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>
  @import '../css/global-views.css';
</style>
