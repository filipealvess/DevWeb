<template>
  <div @click="$emit('click')" class="view">
    HOME
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

</style>
