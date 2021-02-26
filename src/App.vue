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
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}

</style>
