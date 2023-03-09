<template>
  <table class="my-table">
    <thead>
      <tr>
        <th v-for="column, index in columns" v-bind:key="`${index}-${column}`">
          {{fixTextSpacing(column)}}
        </th>
      </tr>
    </thead>
    <tbody v-if="content">
      <tr v-for="row, index1 in content" v-bind:key="`${index1}-${row}`">
        <td v-for="column, index2 in columns" v-bind:key="`${index2}-${column}`">
          <slot v-bind:name="column" v-bind:data="row">
            {{row[column]}}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    content: {
      type: Object(Array),
      default: () => [],
      required: true,
    },
  },
  computed: {
    columns() {
      const firstRow = this.content
        ? this.content[0]
        : {};
      console.log(firstRow);
      const columns = Object.keys(firstRow);
      return columns;
    },
  },
  methods: {
    fixTextSpacing(text) {
      const result = text.replace(/([A-Z])/g, ' $1').trim();
      return result;
    },
  },
};
</script>

<style>
.my-table {
  width: 100%;
}

.my-table thead tr th {
  text-transform: capitalize;
}
</style>
