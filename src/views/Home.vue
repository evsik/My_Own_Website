<template>
  <div class="landing-page">
    <video src="../assets/first.mp4" autoplay loop muted></video>
    <div class="wrapper">
      <div class="container">
        <Header/>
        <main class="content"></main>
        <footer>
          <p class="footer-name">
            <a href="#">
              Evsikov Ilya
            </a>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style lang="scss">


</style>