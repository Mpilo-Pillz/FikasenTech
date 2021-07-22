<template>
  <div>DETAILS - {{ details[0].description }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ItemDetails",

  props: {
    details: {
      type: Array,
      required: true,
    },
  },
});
</script>
