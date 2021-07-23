<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss" scoped>
.header {
  background-color: #eee;
}
</style>
