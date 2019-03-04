<template>
  <ul class="list">
    <li
      v-for="(item,index) in alpha"
      :key="index"
      :ref="item"
      @click="changeLetterHandle"
      @touchstart.prevent="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      > {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    alphabet: Object
  },
  data () {
    return {
      touchStatus: '',
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    alpha () {
      const alpha = []
      for (const key in this.alphabet) {
        alpha.push(key)
      }
      return alpha
    }
  },
  methods: {
    changeLetterHandle (e) {
      this.$emit('change', e.target.innerText)
    },
    touchStart () {
      this.touchStatus = true
    },
    touchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 设置setTimeout，减少touchMove()的调用频率，提高代码性能
        this.timer = setTimeout(() => {
          // const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY - 94
          let index = Math.floor((touchY - this.startY) / 18.225)
          const maxIndex = this.alpha.length - 1
          index = (index > maxIndex) ? maxIndex : index
          this.$emit('change', this.alpha[index])
        }, 16)
      }
    },
    touchEnd () {
      this.touchStatus = false
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
