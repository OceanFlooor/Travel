<template>
  <div class="outter-wrapper" ref="outter">
    <div class="content">
      <div class="area">
        <div class="title border">当前城市</div>
        <div class="button-list">
          <div class="wrapper">
            <button>广州</button>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border">热门城市</div>
        <div class="button-list">
          <div class="wrapper">
            <button v-for=" item in hotCities " :key="item.id"> {{ item.name }} </button>
          </div>
        </div>
      </div>
      <div class="area" v-for=" (value,key) in cities" :key="key" :ref="key">
        <div class="title border"> {{ key }} </div>
        <div class="button-list">
          <div class="wrapper">
            <button v-for=" city in value " :key="city.id"> {{ city.name }} </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.outter)
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter][0])
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .border
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .outter-wrapper
    overflow hidden
    position absolute
    top 1.88rem
    bottom 0
    left: 0
    right: 0
    .content
      .area
        .title
          line-height .54rem
          background #eee
          padding-left .2rem
          color #666
        .button-list
          overflow auto
          padding .1rem .4rem .1rem .2rem
          .wrapper
            width 100%
            float left
            button
              background #fff
              text-align center
              width 31%
              padding .1rem
              margin .1rem .05rem
              border .02rem solid #ccc
              border-radius .06rem
</style>
