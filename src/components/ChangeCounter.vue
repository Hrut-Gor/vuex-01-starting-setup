<template>
  <button @click="increament">Add 5</button>
  <button @click="increase({ value: 15 })">Add 15</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    //addCount() {
    //  this.$store.dispatch('increament');
    //},

    ...mapActions('numbers',['increament', 'increase']),
  },
};
</script>
