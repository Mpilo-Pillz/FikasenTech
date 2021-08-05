<style lang="scss" scoped>
.contact {
  height: 10rem;

  & > a {
    height: 100%;
  }

  &__img {
    height: 100%;
  }
}
</style>
<template>
  <section class="contact">
    <a href="https://github.com/Mpilo-Pillz/" target="_blank"
      ><img
        class="contact__img"
        src="https://res.cloudinary.com/mpilopillz/image/upload/v1628141133/icons/github_jkrfkj.svg"
        alt="GitHub"
    /></a>
    <a
      href="https://www.linkedin.com/in/mpilo-dlamini-38600b149/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        class="contact__img"
        src="https://res.cloudinary.com/mpilopillz/image/upload/v1628141133/icons/linkedin_m3skqf.svg"
        alt="LinkedIn"
      />
    </a>
    <a href="mailto:mpilo.pillz@gmail.com">
      <img
        class="contact__img"
        src="https://res.cloudinary.com/mpilopillz/image/upload/v1628141133/icons/gmail_oegbcj.svg"
        alt="Email"
      />
    </a>
  </section>
</template>
<script>
export default {
  name: "Contact",
};
</script>
