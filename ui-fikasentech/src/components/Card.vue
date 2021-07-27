<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: solid #c5c5c5 1px;
  min-height: 190px;
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
    };
  },
};
</script>
