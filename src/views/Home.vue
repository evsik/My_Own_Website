<template>
  <div class="landing-page" :class="{ bgcMedia: !mediaActive }">
    <video src="../assets/first.mp4" autoplay loop muted v-if="mediaActive"></video>
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
  },
  data() {
    return {
      mediaQuery: window.matchMedia('(pointer:coarse)'),
      mediaActive: false
    }
  },

  mounted() {
    this.mediaQuery.addListener(this.handleTabletChange)
    this.handleTabletChange(this.mediaQuery)
  },

  methods: {
    handleTabletChange(e) {
      this.mediaActive = !e.matches;
    }
  }
}
</script>

<style lang="scss">
.bgcMedia {
  background: url("../assets/pexels-giovanni-calia-2733337.jpg");
  background-size: cover;
  background-position: center;
}
</style>