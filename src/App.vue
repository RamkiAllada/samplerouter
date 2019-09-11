<template>
  <div id="app">
    <h1>{{ title }}</h1>
        <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/header/Header.vue';


export default {
  name: "app",
  components: {
    Header
  },
  data() {
    return {
      title: "VUE ROUTER INTRO"
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

