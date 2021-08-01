<style lang="scss" scoped></style>
<template>
  <section class="">
    <h1>Work History</h1>
    <div class="card flex-row" v-for="work in allWorkHistorys" :key="work.id">
      <div class="employer">
        <h2>{{ work.employer }}</h2>
      </div>
      <div class="work-summary">
        <p>{{ work.summary }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WorkHistory",
  computed: mapGetters(["allWorkHistorys"]),
  methods: mapActions(["fetchWorkHistory"]),
  created() {
    // debugger;
    this.fetchWorkHistory();
    // console.log(allWorkHistorys);
  },
};
</script>
