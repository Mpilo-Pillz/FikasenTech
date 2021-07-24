<template>
  <form @submit.prevent="onSubmit(email, password)">
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="text"
        v-model="email"
        placeholder="Email"
      />
    </fieldset>
    <fieldset class="form-group">
      <input
        class="form-control form-control-lg"
        type="password"
        v-model="password"
        placeholder="Password"
      />
    </fieldset>
    <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
  </form>
</template>

<script>
// import { mapState } from "vuex";
// import { LOGIN } from "@/store/actions.type";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    onSubmit(email, password) {
      console.log(email, password);
      //   this.$store
      //     .dispatch(LOGIN, { email, password })
      //     .then(() => this.$router.push({ name: "home" }));
    },
  },
};
</script>
