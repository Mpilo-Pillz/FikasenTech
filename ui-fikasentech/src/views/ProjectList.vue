<template>
  <section>Projeccts</section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProjectList",
  methods: mapActions(["fetchProjects"]),
  created() {
    this.fetchProjects();
  },
};
</script>
