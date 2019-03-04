<template>
  <div>
    <div class="banner" @click="handleGalleryShow">
      <img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-img">
          <span class="iconfont banner-icon">&#xe632;</span>
          39
        </div>
      </div>
    </div>
    <animation-intro>
      <common-gallery
        v-show="galleryShow"
        @handleHideGallery="closeGallery"
      ></common-gallery>
    </animation-intro>
  </div>
</template>

<script>
import commonGallery from 'common/gallery/gallery'
import animationIntro from 'common/animation/animationIntro'
export default {
  name: 'detailBanner',
  components: {
    commonGallery,
    animationIntro
  },
  data () {
    return {
      galleryShow: false
    }
  },
  methods: {
    handleGalleryShow () {
      this.galleryShow = true
    },
    closeGallery () {
      this.galleryShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    height 0
    padding-bottom 55%
    overflow hidden
    color #fff
    img
      width 100%
    .banner-info
      position absolute
      display flex
      bottom 0
      line-height .6rem
      width 100%
      background-image linear-gradient(top, rgba(0, 0, 0 ,0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        text-indent .2rem
      .banner-img
        height .32rem
        line-height .32rem
        margin-top .14rem
        margin-right .2rem
        padding 0 .4rem
        border-radius: .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
