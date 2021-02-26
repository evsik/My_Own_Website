<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->

    <!--    <Header>-->
    <!--      <nav class="b-headerHav" slot="nav">-->
    <!--        <ul class="b-headerHav__ul">-->
    <!--          <li class="b-headerHav__list">-->
    <!--            <router-link to="/" class="b-headerHav__link">Works</router-link>-->
    <!--          </li>-->
    <!--          <li class="b-headerHav__list">-->
    <!--            <router-link to="/" class="b-headerHav__link">More</router-link>-->
    <!--          </li>-->
    <!--        </ul>-->
    <!--      </nav>-->
    <!--    </Header>-->
    <router-view/>

    <!--    <footer/>-->
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",

  components: {
    Header
  },

  updated() {
    this.customStyle()
    // this.getOverflow()
  },

  //This method will be needed in the future to change the header style when switching the router
  methods: {
    customStyle() {
      if (this.$route.path === '/works') {
        document.querySelector("header").style.backgroundColor = "#ebebeb";
      } else {
        document.querySelector("header").style.backgroundColor = "transparent";
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}

</style>
