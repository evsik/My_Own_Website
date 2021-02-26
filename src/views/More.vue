<template>
  <div class="container">
    <Header/>
    <main class="content more-content">
      <h2 @click="isActive = true" :class="{ trackingOutExpand: isActive }">
        <a href="https://github.com/evsik">
          https://github.com/evsik
        </a>
      </h2>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "More",
  components: {Footer, Header},

  data() {
    return {
      isActive: false,
    }
  }
}
</script>

<style lang="scss">
.more-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {

  a {
    color: rgba(0, 0, 0, 0.4);
    text-decoration: none;
  }
}

.trackingOutExpand {
  -webkit-animation: trackingOutExpand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: trackingOutExpand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes trackingOutExpand {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    opacity: 0;
  }
}

@keyframes trackingOutExpand {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    opacity: 0;
  }
}

@media (max-width: 500px) {
  h2 {
    font-size: medium;
  }
}

</style>