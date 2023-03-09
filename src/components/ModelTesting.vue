<template>
  <div>
    <h1>Child</h1>
    <!-- eslint-disable-next-line -->
    <input v-bind:value="firstName" type="text" v-on:input="$emit('update:firstName', $event.target.value)">
    <!-- eslint-disable-next-line -->
    <input v-bind:value="lastName" type="text" v-on:input="$emit('update:lastName', $event.target.value)">
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: () => '',
      required: true,
    },
    lastName: {
      type: String,
      default: () => '',
      required: true,
    },
  },
  emits: [
    'update:size',
  ],
};
</script>

<style></style>
