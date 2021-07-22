<template>
  <div>DETAILS - {{ details }}</div>
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
  mounted() {
    console.log("deets", this.details);
  },
});
</script>
