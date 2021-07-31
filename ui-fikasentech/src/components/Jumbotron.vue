<style lang="scss" scoped>
.btn {
  border: none;
  // border-radius: 5px;
  font-weight: 800;
  margin: 2rem 1rem;
  padding: 10px 20px;
  width: 20rem;

  &__link {
    text-decoration: none;
  }

  &:hover {
    background-color: #575454;
    color: #fff;
    cursor: pointer;
    font-weight: 900;
  }
}

.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.jumbotron {
  background: #000;
  color: #fff;
  line-height: 30px;
  padding: 2rem 0 5rem 0;
}
.profile-pic {
  position: relative;
  border-radius: 50%;
  height: 180px;
  width: 180px;
  padding: 0;
  margin: 2rem 0;
  border: 15px solid transparent;
  z-index: 9999;
  transition: all 0.3s ease-out;
  object-fit: cover;
}
</style>
<template>
  <section class="flex-center jumbotron compnent--mb">
    <img
      class="profile-pic"
      src="https://lh3.googleusercontent.com/pWGKsbC67uKkiC4xQKOPM4juc2DCUN9oqsBKqaqpRawSTFAeYfPTW-MhTnvFGEUJ3nMJoqsbY3x6rs_uqZb9nts9npWdjgUtI0W3jhDfYd9LuSa7DFj6q9R5apEXi0JyTiuSJqQV=w2400"
      alt="fikasentani"
    />
    <h1>MT Fikasentani KN Dlamini</h1>
    <h4>Software Developer, Software Development Engineer in Test</h4>
    <div class="flex-row-center">
      <button class="btn">Hire Me</button>
      <button class="btn">Download CV</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>
