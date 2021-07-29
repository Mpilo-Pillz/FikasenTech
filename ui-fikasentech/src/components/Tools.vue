<style lang="scss" scoped></style>

<template>
  <div class="card shadow-lg">
    <div v-for="tool in myTools" :key="tool.id">
      <label>{{ tool.name }}</label>
      <progress :id="tool.id" :value="tool.proficiency" max="100">32%</progress>
    </div>
  </div>
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
