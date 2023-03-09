import api from '@/utils/api.util';

const baseEndpoint = 'https://pokeapi.co/api/v2';
const baseHeaders = {
  'content-type': 'application/json',
};

function getEndpoint(endpoint) {
  const actualEndpoint = endpoint || '';
  return `${baseEndpoint}/${actualEndpoint}`;
}

function getHeaders(headers) {
  const actualHeaders = headers || {};
  return {
    ...baseHeaders,
    ...actualHeaders,
  };
}

export default {
  async getPokemons(limit, offset) {
    const endpoint = 'pokemon';
    const payload = {
      headers: getHeaders,
      query: {
        offset,
        limit,
      },
    };
    const response = await api.httpGet(getEndpoint(endpoint), payload);
    return response;
  },
  async getPokemon(id) {
    const endpoint = `pokemon/${id}`;
    const payload = {
      headers: getHeaders,
    };
    const response = await api.httpGet(getEndpoint(endpoint), payload);
    return response;
  },
  async getType(typeId) {
    const endpoint = `type/${typeId}`;
    const payload = {
      headers: getHeaders(),
    };
    const response = await api.httpGet(getEndpoint(endpoint), payload);
    return response;
  },
  async getPokemons2(pageNumber, resultsPerPage) {
    const limit = resultsPerPage;
    const offset = (pageNumber * resultsPerPage) - resultsPerPage;
    const response = await this.getPokemons(limit, offset);
    let results = [];

    const promises = response
      .results
      .map(async (r) => {
        const pokemonResponse = await this.getPokemon(r.name);
        return pokemonResponse;
      });

    await Promise.all(promises).then((values) => {
      results = values.map((r) => ({
        id: r.id,
        name: r.name,
        height: r.height,
        weight: r.weight,
      }));
    });

    return {
      results,
      totalResults: response.count,
      totalPages: Math.ceil(response.count / resultsPerPage),
    };
  },
};
