<template>
  <div>
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

</style>
