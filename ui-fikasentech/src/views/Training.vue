<style lang="scss" scoped>
.training-certificate {
  width: 100%;
  max-height: 35rem;
}
.training {
  color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &-certificate {
    display: block;
  }
  &__header {
    color: #fff;
    font-size: 1.7rem;
    font-weight: bolder;
    text-decoration: none;
  }

  &-item {
    border-radius: 5px;
    margin: 1rem;
    background-color: #000;
  }

  &__text {
    font-weight: 300;
    line-height: 1.5;
    padding: 1rem;
    text-align: center;
  }

  &__link {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
<template>
  <section class="about">
    <h1>This is an about page</h1>
    <div class="training">
      <div
        v-for="training in allTrainings"
        :key="training.id"
        class="training-item shadow"
      >
        <img class="training-certificate" :src="training.img" alt="" />
        <section class="training__text">
          <span>
            <a class="training__header" :href="training.courselink"
              ><em>{{ training.name }}</em></a
            >
          </span>

          <div>
            <strong>Duration</strong>: <span>{{ training.hours }} hours</span>
          </div>
          <div>
            <strong>Training Institution</strong>:
            <span>{{ training.provider }}</span>
          </div>
          <div>
            <strong>Instructor</strong>:
            <a class="training__link" :href="training.instructorprofile">{{
              training.instructor
            }}</a>
          </div>
        </section>
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
