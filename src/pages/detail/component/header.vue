<template>
  <div>
    <router-link
      tag="div"
      class="abs"
      to="/"
    >
      <div class="iconfont">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'datailHeader',
  data () {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      var opacity
      if (top > 60) {
        opacity = (top - 60) / 80
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = true
      } else {
        this.showAbs = false
      }
      this.opacityStyle = { opacity }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~sty/varibles.styl'
  .content
    height 50rem
  .abs
    position absolute
    top .2rem
    left .2rem
    height .8rem
    width .8rem
    background rgba(0, 0, 0, 0.5)
    border-radius .4rem
    text-align center
    div
      color #fff
      line-height .8rem
      font-size .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
