<template>
  <section>
    Projeccts
    {{ allProjects.length }}
    <Card :items="allProjects" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "ProjectList",
  components: {
    Card,
  },
  computed: mapGetters(["allProjects"]),
  methods: mapActions(["fetchProjects"]),
  created() {
    this.fetchProjects();
  },
};
</script>
