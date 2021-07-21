<template>
  <hr />
  <h1>Mpi</h1>
  <ul id="render-projects" v-for="item in items" :key="item.id">
    <li>{{ item.title }}</li>
    <p>{{ item.description }}</p>
  </ul>
  {{ items.length }}
  <hr />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
});
</script>
