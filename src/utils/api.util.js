function getQueryString(query) {
  const actualQuery = query || {};
  const keys = Object.keys(actualQuery);
  let queryString = '';
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    queryString += `${key}=${actualQuery[key]}`;
    if (i === keys.length - 1) {
      queryString += '&';
    }
  }
  return queryString;
}

async function callApi(method, endpoint, { query, body, headers }) {
  const queryString = getQueryString(query);
  const actualUrl = `${endpoint}?${queryString}`;
  const bodyJson = JSON.stringify(body);
  const response = await fetch(
    actualUrl,
    {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: bodyJson,
    },
  );
  return response.json();
}

export default {
  async httpGet(endpoint, payload) {
    return callApi('GET', endpoint, payload);
  },
  async httpPost(endpoint, payload) {
    return callApi('POST', endpoint, payload);
  },
  async httpPut(endpoint, payload) {
    return callApi('PUT', endpoint, payload);
  },
  async httpDelete(endpoint, payload) {
    return callApi('DELETE', endpoint, payload);
  },
};
