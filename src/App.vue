<template>
  <div id="app">
    <!--    </Header>-->
    <!--    the transition menu is located in the head of the components-->
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",

  data() {
    return {
      mediaQuery: window.matchMedia('(pointer:coarse)')
    }
  },

  components: {
    Header
  },

  // mounted() {
  //   this.mediaQuery.addListener(this.handleTabletChange)
  //   this.handleTabletChange(this.mediaQuery)
  // },

  updated() {
    this.customStyle()
    this.overStyle()
  },

  //This method will be needed in the future to change the header style when switching the router
  methods: {
    customStyle() {
      if (this.$route.path === '/photosPage') {
        document.querySelector("header").style.backgroundColor = "#ebebeb";
      } else {
        document.querySelector("header").style.backgroundColor = "transparent";
      }
    },
    overStyle() {
      if (this.$route.path !== '/') {
        document.querySelector("body").style.overflow = "auto";
      } else {
        document.querySelector("body").style.overflow = "hidden";
      }
    },
// if the video is not viewed from a computer the background video is disabled
//     handleTabletChange(e) {
//       if (e.matches) {
//         document.querySelector("video").style.display = "none";
//         console.log('Media Query Matched!')
//       } else {
//         document.querySelector("video").style.display = "block";
//       }
//     }
  }
}
</script>

<style lang="scss">
#app {
  height: 100%;
}

</style>
