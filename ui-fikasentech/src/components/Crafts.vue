<style lang="scss" scoped>
.crafts-card {
  width: 49rem;
}
</style>

<template>
  <section class="element-center--width compnent--mb">
    <h1 class="fikasentani-heading">Services</h1>
    <div class="flex-row">
      <div
        class="card flex-space-evenly crafts-card"
        v-for="craft in crafts"
        :key="craft.id"
      >
        <h1>{{ craft.title }}</h1>
        <p>{{ craft.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Craft",
  data() {
    return {
      crafts: [],
    };
  },
  created() {
    this.fetchCrafts();
  },
  methods: {
    async fetchCrafts() {
      const response = await fetch("http://localhost:1337/crafts");
      const myCraft = await response.json();
      this.crafts = myCraft;
    },
  },
};
</script>
