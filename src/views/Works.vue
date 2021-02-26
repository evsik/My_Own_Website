<template>
  <div class="container">
    <Header/>
    <main class="content">
      <div class="contentUl">
        <div class="images-list" v-for="item of $store.state.dataArr">
          <img :src="item.photo_name" :alt="item.photo_city" class="images-link-img">
          <div class="image-list-hover">
            <a :href="item.photo_name" class="images-link-hover" target="_blank">
              {{ item.photo_city }}
              <br>
              {{ item.photo_data }}
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Works",
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.commit('getData')
  }
}
</script>

<style lang="scss">
.content .contentUl {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  flex-flow: wrap;
}

.images-list {
  width: 24.3%;
  height: 200px;
  margin-bottom: 1%;
  position: relative;
}

.images-list:hover .image-list-hover {
  visibility: visible;
}

.image-list-hover {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ebebeb6e;
  visibility: hidden;
}

.images-link-hover {
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: x-large;
  font-weight: bold;
  padding-top: 70px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 1.5px #000000;
}

.images-link-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .images-list {
    width: 33%;
  }

  .images-list:last-child {
    width: 66.5%;
  }
}

@media screen and (max-width: 576px) {
  .images-list {
    width: 49.5%;
  }

  .images-list:last-child {
    width: 49.5%;
  }
}
</style>