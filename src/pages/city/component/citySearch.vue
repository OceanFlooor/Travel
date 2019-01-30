<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入中文或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'citySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~sty/varibles.styl'
  .search
    background $bgColor
    text-align center
    height .72rem
    padding .15rem
    .search-input
      box-sizing border-box
      border-radius .08rem
      font-size .32rem
      width 100%
      height 100%
      display block
      background #fff
      text-align center
      color #666
      padding 0 .1rem
</style>
