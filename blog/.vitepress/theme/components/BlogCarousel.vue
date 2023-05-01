<template>
    <div>

  </div>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="(src, index) in imagesUrls" :key="index">
      <div class="carousel__item">
        <img :src="src" height="50%" alt="" @click="() => showImg(index)"/>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
        />
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation,Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'

export default defineComponent({
  name: 'Breakpoints',
  props: {
    imagesUrls: {
      type: Array,
      required: true
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
      wrapAround: true
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  setup(props) {
    const {
      // methods
      show, onHide, changeIndex,
      // refs
      visibleRef, indexRef, imgsRef
    } = useEasyLightbox({
      // src / src[]
      imgs: props.imagesUrls,
      // initial index
      initIndex: 0
    })
    const showImg = (index) => {
            indexRef.value = index
            visibleRef.value = true
          }

    return {
      visibleRef,
      indexRef,
      imgsRef,
      show,
      onHide,
      showImg
    }
  }
})
</script>
<style>
.carousel__item {
  margin: 5px;
}
.carousel__item > img {
  border-radius: 10px;
}
</style>
