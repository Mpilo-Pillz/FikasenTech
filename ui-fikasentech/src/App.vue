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
  background-color: #dfdfdf;
  box-sizing: border-box;
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  // margin: 0 30rem;
}

.element-center--width {
  margin: auto;
  max-width: 150rem;
}

.card {
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 150rem;
  padding: 2rem;
  background-color: #fff;
}

.compnent--mb {
  margin-bottom: 5rem;
}

.fikasentani-heading {
  text-align: center;
  // font-size: 2rem;
  margin: 2rem;
}

.flex-row-center {
  display: flex;
  flex-direction: row;
}

.flex-space-evenly {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
}

.u-margin {
  &__md {
    margin: 2rem;
  }
  &__tb {
    margin: 2rem 0;
  }
}

.router-link-exact-active {
  color: #42b983;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

::selection {
  background-color: #fff;
  color: #fff;
}
</style>
