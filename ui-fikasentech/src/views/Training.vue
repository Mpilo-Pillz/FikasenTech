<style lang="scss" scoped>
.training-certificate {
  max-width: 50rem;
  max-height: 50rem;
}
</style>
<template>
  <section class="about">
    <h1>This is an about page</h1>
    <div class="training">
      <div
        v-for="training in allTrainings"
        :key="training.id"
        class="training-item"
      >
        <img class="training-certificate" :src="training.img" alt="" />
        <h2>
          <a :href="training.courselink">{{ training.name }}</a>
        </h2>
        <p>
          <strong>Duration</strong>: <span>{{ training.hours }}</span>
          <strong>Training Institution</strong>:
          <span>{{ training.provider }}</span> <strong>Instructor</strong>:
          <a :href="training.instructorprofile">{{ training.instructor }}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Training",
  computed: mapGetters(["allTrainings"]),
  methods: mapActions(["fetchTraining"]),
  created() {
    this.fetchTraining();
  },
};
</script>
