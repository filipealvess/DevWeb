<template>
  <li
    :class="{ 'selected' : isSelected }"
    @click="$emit('redirect')"
  >
    <i :class="iconClasses"></i>
    <span>{{ name }}</span>
  </li>
</template>

<script>
  export default {
    name: 'Item',
    props: {
      name: String,
      iconClasses: Array,
      isSelected: Boolean,
      link: String
    }
  }
</script>

<style scoped>
  li {
    padding: 10px 15px;
    border-bottom: 1px solid var(--light-black);
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.2s background-color;
  }

  li:hover:not(.selected) {
    background-color: var(--light-black);
  }

  .selected {
    background-color: var(--blue);
  }

  .selected * {
    color: var(--white);
  }

  li i {
    width: 30px;
    padding-right: 5px;
    text-align: center;
  }
</style>
