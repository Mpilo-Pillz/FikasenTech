<style lang="scss" scoped>
a {
  font-weight: 800;
  text-decoration: none;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
}

.nav-item {
  text-decoration: none;
  margin: 2rem;
}
</style>
<template>
  <header class="header">
    <div class="fika-logo">FIKASENTECH</div>
    <div id="nav">
      <span class="nav-item"> <router-link to="/">Home</router-link> </span>
      <span class="nav-item">
        <router-link to="/about">About</router-link>
      </span>
      <span class="nav-item">
        <router-link to="/login">Login</router-link>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #eee;
}
</style>
