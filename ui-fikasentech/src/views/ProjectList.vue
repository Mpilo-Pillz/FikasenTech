<template>
  <section>
    Projeccts
    {{ allProjects.length }}
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProjectList",
  computed: mapGetters(["allProjects"]),
  methods: mapActions(["fetchProjects"]),
  created() {
    this.fetchProjects();
  },
};
</script>
