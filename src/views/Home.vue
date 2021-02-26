<template>
  <div class="landing-page">
    <video src="../assets/first.mp4" autoplay loop muted></video>
    <div class="wrapper">
      <div class="container">
        <Header/>
        <main class="content"></main>
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

</style>