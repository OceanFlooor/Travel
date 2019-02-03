<template>
  <div class="container" @click="hideGallery">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg">
        </swiper-slide>
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallery',
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    hideGallery () {
      this.$emit('handleHideGallery')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    z-index 999
    position fixed
    display flex
    flex-direction column
    justify-content center
    top 0
    bottom 0
    left 0
    right 0
    background #000
    .wrapper
      width 100%
      padding-bottom 100%
      height 0
      background #fff
      img
        width 100%
      .swiper-pagination
        color: #fff
        bottom -1rem
</style>
