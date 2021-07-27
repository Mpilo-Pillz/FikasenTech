<style lang="scss" scoped>
.btn {
  border: none;
  border-radius: 5px;
  font-weight: 800;
  margin: 10px;
  padding: 10px 20px;
}
.profile-pic {
  position: relative;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  padding: 0;
  margin: 0;
  border: 15px solid transparent;
  z-index: 9999;
  transition: all 0.3s ease-out;
  object-fit: cover;
}
</style>
<template>
  <section class="flex-center">
    <img
      class="profile-pic"
      src="https://lh3.googleusercontent.com/pWGKsbC67uKkiC4xQKOPM4juc2DCUN9oqsBKqaqpRawSTFAeYfPTW-MhTnvFGEUJ3nMJoqsbY3x6rs_uqZb9nts9npWdjgUtI0W3jhDfYd9LuSa7DFj6q9R5apEXi0JyTiuSJqQV=w2400"
      alt="fikasentani"
    />
    <h1>MT Fikasentani KN Dlamini</h1>
    <h2>Front End Developer, Software Developer in Test</h2>
    <button class="btn">Hire Me</button>
    <button class="btn">Download CV</button>
  </section>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>
