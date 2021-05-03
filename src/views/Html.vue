<template>
  <div>
    HTML
  </div>
</template>

<script>
  export default {
    name: 'Html',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>

</style>
