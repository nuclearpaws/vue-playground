<template>
  <div>
    <h1>Pokemon Lookup</h1>
    <div id="initial" v-show="!choosing">
      <!-- eslint-disable-next-line -->
      <label>Pokemon: </label>
      <!-- eslint-disable-next-line -->
      <input
        v-model="chosen"
        type="text"
        readonly
        v-on:focus="choosing = true"
      />
    </div>
    <div id="lookup" v-if="choosing">
      <form action="#" v-on:submit="getPoekmons">
        <input type="submit" v-bind:value="text" v-bind:disabled="loading" />
      </form>
      <br />
      <form v-if="pokemons" action="#" v-on:submit="selectPokemon">
        <my-table v-bind:content="pokemons.pokemons">
          <template v-slot:actions="{ data }">
            <input v-bind:value="data.name" v-text="Select" type="submit" />
          </template>
        </my-table>
      </form>
    </div>
  </div>
</template>

<script>
import pokemonApi from '@/api/pokemon.api';

export default {
  data() {
    return {
      choosing: false,
      chosen: undefined,
      text: 'Get Pokemons',
      loading: false,
      pokemons: undefined,
    };
  },
  methods: {
    async getPoekmons(event) {
      event.preventDefault();
      this.loading = true;
      this.text = 'Please Wait...';
      const response = await pokemonApi.getPokemons(10, 0);
      const dataWanted = {
        totalPokemons: response.count,
        pokemons: response.results.map((r) => {
          const pokemon = {
            ...r,
            actions: undefined,
          };
          return pokemon;
        }),
      };
      this.pokemons = dataWanted;
      this.loading = false;
      this.text = 'You Got Pokemons!';
      setTimeout(() => {
        this.text = 'Get Pokemons';
      }, 3000);
    },
    selectPokemon(event) {
      event.preventDefault();
      this.chosen = event.submitter.value;
      this.choosing = false;
      this.pokemons = undefined;
    },
  },
};
</script>

<style></style>
