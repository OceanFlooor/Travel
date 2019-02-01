<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="请输入中文或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
        >
        {{ item }}
        </li>
        <li v-show="hasNoData">
          没有找到匹配城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'citySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((obj) => {
            if (obj.name.indexOf(this.keyword) > -1 || obj.spell.indexOf(this.keyword) > -1) {
              result.push(obj.name)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
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
      color $darkTextColor
      padding 0 .1rem
  .search-content
    z-index 999
    position absolute
    top 1.88rem
    bottom 0
    left 0
    right 0
    overflow hidden
    ul
      li
        line-height: .62rem
        padding-left: .2rem
        background: #fff
        color: $darkTextColor
        border-bottom 1px solid #eee
</style>
