<template>
  <div class="city-header">
    <router-link to="/">
      <span class="iconfont black-icon">&#xe624;</span>
    </router-link>
    选择城市
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~sty/varibles.styl'
  .city-header
    position relative
    text-align center
    height $headerHeight
    line-height $headerHeight
    font-size .32rem
    color #fff
    background $bgColor
    .iconfont
      display inline-block
      width .64rem
      font-size .4rem
      color #fff
      position absolute
      left 0
      top 0
</style>
