<template>
  <div>
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
