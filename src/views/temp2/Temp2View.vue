<template>
  <div>
    <h1>Table Testing</h1>
    <hr />
    <h2>Content 1:</h2>
    <custom-table
      v-bind:content="content1.content"
      v-bind:isLoading="content1.isLoading"
      v-bind:pageNumber.sync="content1.pageNumber"
      v-bind:totalPages="content1.totalPages"
      v-on:pageChanged="content1PageChanged($event)">
      <template v-slot:headerSuffix>
        <th>Actions</th>
      </template>
      <template v-slot:firstName="{ data }">
        <span style="color:red;">{{ data.firstName }}</span>
      </template>
      <template v-slot:lastName="{ data }">
        <span style="color:green;">{{ data.lastName }}</span>
      </template>
      <template v-slot:columnSuffix="{ data }">
        <button v-on:click="doSomething(`${data.firstName} ${data.lastName}`)">Do Something</button>
        <button v-on:click="doSomethingElse(`${data.id}`)">Delete</button>
      </template>
    </custom-table>
    <hr />
    <h2>Content 2:</h2>
    <custom-table
      v-bind:content="content2.content"
      v-bind:isLoading="content2.isLoading"
      v-bind:pageNumber.sync="content2.pageNumber"
      v-bind:totalPages="content2.totalPages"
      v-on:pageChanged="content2PageChanged($event)">
      <template v-slot:headerSuffix>
        <th>Actions or Something</th>
      </template>
      <template v-slot:height="{ data }">
        <span style="color:red">{{ data.height }}in</span>
      </template>
      <template v-slot:weight="{ data }">
        {{ data.weight }}lb
      </template>
      <template v-slot:columnSuffix="{ data }">
        <button v-on:click="doTheThing(data)">Click me!</button>
      </template>
    </custom-table>
  </div>
</template>

<script>
import FakeApi from '@/api/fake.api';
import PokemonApi from '@/api/pokemon.api';
import CustomTable from '@/components/_generic/CustomTable.vue';

export default {
  async mounted() {
    await this.callFakeApiGetResultsAsync(1, this.content1.resultsPerPage);
    await this.callPokemonApiGetPokemons2Async(1, this.content2.resultsPerPage);
  },
  components: {
    CustomTable,
  },
  data: () => ({
    content1: {
      isLoading: false,
      pageNumber: 1,
      resultsPerPage: 5,
      totalPages: 1,
      content: [],
    },
    content2: {
      isLoading: false,
      pageNumber: 1,
      resultsPerPage: 25,
      totalPages: 1,
      content: [],
    },
  }),
  methods: {
    content1PageChanged(pageNumber) {
      this.callFakeApiGetResultsAsync(pageNumber, this.content1.resultsPerPage);
    },
    content2PageChanged(pageNumber) {
      this.callPokemonApiGetPokemons2Async(pageNumber, this.content2.resultsPerPage);
    },
    async callFakeApiGetResultsAsync(pageNumber, resultsPerPage) {
      this.content1.isLoading = true;
      try {
        const response = await FakeApi.getResultsAsync(pageNumber, resultsPerPage);
        this.content1.content = response.results.map((r) => ({
          id: r.id,
          firstName: r.lastName,
          lastName: r.firstName,
          fullName: `${r.firstName} ${r.lastName}`,
          anotherColumn: 'something',
          dateOfBirth: r.dateOfBirth,
        }));
        this.content1.totalResults = response.totalResults;
        this.content1.totalPages = response.totalPages;
      } catch (error) {
        console.error(error);
      } finally {
        this.content1.isLoading = false;
      }
    },
    async callPokemonApiGetPokemons2Async(pageNumber, resultsPerPage) {
      this.content2.isLoading = true;
      try {
        const response = await PokemonApi.getPokemons2(pageNumber, resultsPerPage);
        this.content2.content = response.results;
        this.content2.totalResults = response.totalResults;
        this.content2.totalPages = response.totalPages;
      } catch (error) {
        console.error(error);
      } finally {
        this.content2.isLoading = false;
      }
    },
    doSomething(text) {
      alert(text);
    },
    doSomethingElse(id) {
      alert(`Delete ${id}`);
    },
    doTheThing(data) {
      alert(data.name);
    },
  },
};
</script>

<style></style>
