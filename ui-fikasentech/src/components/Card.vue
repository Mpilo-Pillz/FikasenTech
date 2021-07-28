<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: solid #c5c5c5 1px;
  min-height: 190px;
}

ul.stack-items {
  display: flex;
  // align-items: stretch;
  // justify-content: space-between;
  // width: 100%; /* play with this number to get spacings correct */

  & > li {
    margin: 1rem 2rem;
  }
}
</style>
<template>
  <div
    class="card shadow-lg"
    id="render-projects"
    v-for="item in items"
    :key="item.id"
  >
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
    <h4>Built With:</h4>
    <ul class="stack-items">
      <li v-for="stack in item.stacks" :key="stack.id">{{ stack.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      projects: [],
      stacks: [],
    };
  },
};
</script>
