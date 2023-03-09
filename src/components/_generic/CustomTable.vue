<template>
  <div class="custom-table">
    <table>
      <thead>
        <tr>
          <slot name="headerPrefix" />
          <th
            v-for="header in headers"
            v-bind:key="header">
              <slot
                name="header"
                v-bind:header="header">
                  {{ formatHeader(header) }}
              </slot>
          </th>
          <slot name="headerSuffix" />
        </tr>
      </thead>
      <tbody v-if="isLoading">
        <tr>
          <td v-bind:colspan="headers ? headers.length + 2 : 1"><b>Loading...</b></td>
        </tr>
      </tbody>
      <tbody v-else-if="hasContent">
        <tr
          v-for="row, rowIndex in content"
          v-bind:key="rowIndex">
            <slot
              name="columnPrefix"
              v-bind:data="row"
              v-bind:index="rowIndex" />
            <td
              v-for="header, columnIndex in headers"
              v-bind:key="columnIndex">
                <slot
                  v-bind:name="header"
                  v-bind:header="header"
                  v-bind:data="row">
                    {{ row[header] }}
                </slot>
            </td>
            <slot
              name="columnSuffix"
              v-bind:data="row"
              v-bind:index="rowIndex" />
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td><b>No Content</b></td>
        </tr>
      </tbody>
      <tfoot>
        <td v-bind:colspan="headers.length + 2">
          <button
            v-on:click="previousPage()"
            v-bind:disabled="!canGoToPreviousPage">
              Previous
          </button>
          Page
          <select v-on:change="updatePageNumber(parseInt($event.target.value))">
            <option
              v-for="(page, index) in allPages"
              v-bind:key="index"
              v-bind:selected="pageNumber === page">
                {{ page }}
            </option>
          </select>
          of {{ totalPages }}
          <button
            v-on:click="nextPage()"
            v-bind:disabled="!canGoToNextPage">
              Next
          </button>
        </td>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: () => false,
      required: false,
    },
    pageNumber: {
      type: Number,
      default: () => 1,
      required: true,
    },
    totalPages: {
      type: Number,
      default: () => 1,
      required: false,
    },
    totalResults: {
      type: Number,
      default: () => 1,
      required: false,
    },
    content: {
      type: Object(Array),
      default: () => [],
      required: true,
    },
  },
  computed: {
    hasContent() {
      return this.content.length > 0;
    },
    headers() {
      return this.hasContent
        ? Object.keys(this.content[0])
        : [];
    },
    canGoToNextPage() {
      return this.pageNumber < this.totalPages;
    },
    canGoToPreviousPage() {
      return this.pageNumber > 1;
    },
    allPages() {
      const pages = [];
      for (let i = 1; i <= this.totalPages; i += 1) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    formatHeader(header) {
      if (!header) {
        return '';
      }

      const fixedHeader = (header.charAt(0).toUpperCase() + header.slice(1));
      return fixedHeader
        .match(/[A-Z][a-z]+/g)
        .reduce((t, n) => `${t} ${n}`);
    },
    nextPage() {
      if (this.canGoToNextPage) {
        this.updatePageNumber(this.pageNumber + 1);
      }
    },
    previousPage() {
      if (this.canGoToPreviousPage) {
        this.updatePageNumber(this.pageNumber - 1);
      }
    },
    updatePageNumber(pageNumber) {
      this.$emit('update:pageNumber', pageNumber);
      this.$emit('pageChanged', pageNumber);
    },
  },
};
</script>

<style>
table {
  width: 100%;
}

td, th {
  padding: 5px;
}

table, thead, tbody, tr, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
