<template>
  <h2>{{ counter }}</h2>
  <p>Get more info...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
