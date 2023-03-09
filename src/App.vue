<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/kek">Kek</router-link> |
      <router-link to="/pokemon-lookup">Pokemon Lookup</router-link> |
      <router-link to="/temp">Temp</router-link> |
      <router-link to="/temp2">Temp2</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 30px;
  width: 960px;
  margin: auto;
  background: #eee;
  border-radius: 40px;
}
</style>
