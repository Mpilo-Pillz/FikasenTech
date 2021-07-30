<style lang="scss" scoped>
.margin-md {
  margin: 1.5rem;
}

.tools {
  display: flex;
  flex-wrap: wrap;

  &__item {
    min-width: 60rem;
  }

  &__progress {
    width: 100%;
  }
}
</style>

<template>
  <section class="card shadow-lg">
    <h1>My Tool Box</h1>
    <div class="tools">
      <div
        class="tools__item flex-col margin-md"
        v-for="tool in myTools"
        :key="tool.id"
      >
        <label>{{ tool.name }}</label>
        <progress
          class="tools__progress"
          :id="tool.id"
          :value="tool.proficiency"
          max="100"
        >
          32%
        </progress>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Tools",
  data() {
    return {
      myTools: [],
    };
  },

  mounted() {
    this.fetchMyTools();
  },

  methods: {
    async fetchMyTools() {
      const response = await fetch("http://localhost:1337/stacks");
      //   const tools = await response.json();
      this.myTools = await response.json();
    },
  },
};
</script>
