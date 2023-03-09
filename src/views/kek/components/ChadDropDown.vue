<template>
  <select
    v-on:change="change"
    v-model="selected">
    <option
      v-for="option in options"
      v-bind:key="option"
      v-bind:selected="option == value">
      {{option}}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      required: false,
      type: String,
      default: () => undefined,
    },
    options: {
      required: true,
      type: Array[String],
      default: () => [],
    },
  },
  beforeMount() {
    this.selected = this.value;
  },
  data: () => {
    const data = {
      selected: undefined,
    };
    return data;
  },
  methods: {
    change() {
      this.$emit('input', this.selected);
      this.$emit('change', this.selected);
      this.$emit('update', this.selected);
    },
  },
};
</script>

<style>
</style>
