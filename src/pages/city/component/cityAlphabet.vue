<template>
  <ul class="list">
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
    <li>A</li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet'
}
</script>

<style lang="stylus" scoped>
  @import '~sty/varibles.styl'
  .list
    position absolute
    display flex
    flex-direction column
    justify-content center
    top 1.88rem
    bottom 0
    right 0
    padding 0 .1rem
    li
      color $bgColor
      margin .05rem
</style>
