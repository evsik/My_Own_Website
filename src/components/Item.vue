<template>
  <div class="b-item">
    <img :src="item.photo_name" :alt="item.photo_city" class="b-item__img">
    <div class="b-item__hoverBlock">
      <a :href="item.photo_name" class="b-item__hoverLink" target="_blank">
        {{ item.photo_city }}
        <br>
        {{ item.photo_data }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",

  props: {
    item: {type: Object}
  }
}
</script>

<style lang="scss">
.b-item {
  width: 24.3%;
  height: 200px;
  margin-bottom: 1%;
  position: relative;

  &:hover .b-item__hoverBlock {
    visibility: visible;
  }

  .b-item__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .b-item__hoverBlock {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #ebebeb6e;
    visibility: hidden;

    .b-item__hoverLink {
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
  }
}

@media screen and (max-width: 992px) {
}

@media screen and (max-width: 768px) {
  .b-item {
    width: 33%;
  }

  .b-item:last-child {
    width: 66.5%;
  }
}

@media screen and (max-width: 576px) {
  .b-item {
    width: 49.5%;
  }

  .b-item:last-child {
    width: 49.5%;
  }
}
</style>