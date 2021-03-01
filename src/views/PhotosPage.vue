<template>
  <div class="container">
    <Header/>
    <main class="content">
      <div class="contentUl">
<!--        <div class="b-item" v-for="item of $store.state.dataArr">-->
<!--          <img :src="item.photo_name" :alt="item.photo_city" class="b-item__img">-->
<!--          <div class="b-item__hoverBlock">-->
<!--            <a :href="item.photo_name" class="b-item__hoverLink" target="_blank">-->
<!--              {{ item.photo_city }}-->
<!--              <br>-->
<!--              {{ item.photo_data }}-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
        <Item
            v-for="item of this.$store.state.dataArr"
            :item="item"
            :key="item.id_obj"
        />
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Item from "@/components/Item";

export default {
  name: "PhotosPage",
  data() {
    return {}
  },
  components: {
    Header,
    Footer,
    Item
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

</style>