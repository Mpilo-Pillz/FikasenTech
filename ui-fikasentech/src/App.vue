<template>
  <div id="nav">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

// #app {
//   max-width: 150rem;
// }

html {
  //defining what 1rem is
  font-size: 62.5%; //1rem = 10px, 10/16 = 62.5%
}

body {
  background-color: #c7c7c7;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  // margin: 0 30rem;
}

.flex-row-center {
  display: flex;
  flex-direction: row;
}

.router-link-exact-active {
  color: #42b983;
}

::selection {
  background-color: #fff;
  color: #fff;
}
</style>
