<style lang="scss" scoped>
.crafts-card {
  width: 49rem;

  & > img {
    height: 6rem;
    margin: auto;
    width: 6rem;
  }
}
.crafts--title {
  margin: 1rem auto;
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
        <img :src="craft.icon" :alt="craft.title" />
        <h2 class="crafts--title">{{ craft.title }}</h2>
        <p class="font-weight--300">{{ craft.description }}</p>
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
