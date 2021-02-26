<template>
  <header>
<!--    <slot name="nav"></slot>-->
    <nav class="b-headerHav" slot="nav">
      <ul class="b-headerHav__ul">
        <li class="b-headerHav__list">
          <router-link to="/" class="b-headerHav__link">Works</router-link>
        </li>
        <li class="b-headerHav__list">
          <router-link to="/" class="b-headerHav__link">More</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
header {
  height: 130px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1;

  .b-headerHav {
    height: 100%;

    .b-headerHav__ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      height: 100%;
      align-items: center;

      .b-headerHav__list {
        padding: 2%;

        .b-headerHav__link {
          text-decoration: none;
          color: rgba(0, 0, 0, 0.4);
          font-size: larger;

          &:hover {
            color: rgba(0, 0, 0, 0.8);
          }
        }
      }
    }
  }
}
</style>