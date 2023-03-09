<template>
  <div>
    <h1>Parent</h1>
    <!-- eslint-disable-next-line -->
    <input v-model="firstName" type="text">
    <!-- eslint-disable-next-line -->
    <input v-model="lastName" type="text">
    <model-testing v-bind:first-name.sync="firstName" v-bind:last-name.sync="lastName" />
  </div>
</template>

<script>
import ModelTesting from '@/components/ModelTesting.vue';

export default {
  components: {
    ModelTesting,
  },
  data: () => ({
    firstName: '',
    lastName: '',
  }),
};
</script>

<style></style>
