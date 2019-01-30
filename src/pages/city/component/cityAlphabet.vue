<template>
  <ul class="list">
    <li v-for="(item,index) in alpha" :key="index"> {{ item }} </li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    alphabet: Object
  },
  computed: {
    alpha () {
      const alpha = []
      for (const key in this.alphabet) {
        alpha.push(key)
      }
      return alpha
    }
  }
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
