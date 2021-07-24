<template>
  <hr />
  <h1>Mpi</h1>
  <ul id="render-projects" v-for="item in items" :key="item.id">
    <li>{{ item.title }}</li>
    <p>{{ item.description }}</p>
  </ul>
  {{ items.length }}
  <hr />
  <ItemDetails :details="items" />
</template>

<script>
import ItemDetails from "./ItemDetails.vue";
export default {
  name: "Card",
  components: {
    ItemDetails,
  },
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
