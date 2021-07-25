<style lang="scss" scoped>
.card {
  background-color: #fff;
  border: solid #c5c5c5 1px;
  min-height: 190px;
}
</style>
<template>
  <hr />
  <h1>Mpi</h1>
  <div class="card" id="render-projects" v-for="item in items" :key="item.id">
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
  <hr />
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
