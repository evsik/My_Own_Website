<template>
  <footer>
    <p class="footer-name">
      <router-link to="/" class="b-headerHav__link">Evsikov Ilya</router-link>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
footer {
  text-align: center;
  padding: 2%;
  flex-shrink: 0;
}

.footer-name a {
  text-decoration: none;
  font-size: larger;
  color: rgba(0, 0, 0, 0.8);
}
</style>