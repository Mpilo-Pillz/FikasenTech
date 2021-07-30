<style lang="scss" scoped>
.card-summary {
  line-height: 1.5;
  margin: 2rem auto;
  max-width: 150rem;
  padding: 2rem;
  background-color: #fff;
}
</style>
<template>
  <div
    v-for="summary in mySummary"
    :key="summary.id"
    class="card shadow-lg compnent--mb"
  >
    <h2>{{ summary.title }}</h2>
    <p>{{ summary.content }}</p>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      mySummary: [],
    };
  },

  mounted() {
    this.fetchMySummary();
  },

  methods: {
    async fetchMySummary() {
      const response = await fetch("http://localhost:1337/articles");
      const aboutMe = await response.json();
      this.mySummary = aboutMe;
    },
  },
};
</script>
