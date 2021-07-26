<template>
  <footer>Fikasentani Technologies {{ year }}</footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
