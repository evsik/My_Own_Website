<template>
  <header>
    <!--    <slot name="nav"></slot>-->
    <nav class="b-headerHav" slot="nav">
      <ul class="b-headerHav__ul">
        <li class="b-headerHav__list">
          <router-link to="/" class="b-headerHav__link">Home</router-link>
        </li>
        <li class="b-headerHav__list">
          <router-link to="/photosPage" class="b-headerHav__link">Photos</router-link>
        </li>
        <li class="b-headerHav__list">
          <router-link to="/more" class="b-headerHav__link">More</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
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

.trackingOutContract {
  -webkit-animation: trackingOutContract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  animation: trackingOutContract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
}

@-webkit-keyframes trackingOutContract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}

@keyframes trackingOutContract {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
}

</style>