<template>
  <div @click="$emit('click')" class="view">
    VUE
  </div>
</template>

<script>
  export default {
    name: 'Vuejs',
    created() {
      this.$emit('currentPath', this.$route);
    }
  }
</script>

<style scoped>

</style>
