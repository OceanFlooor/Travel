<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont black-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~sty/varibles.styl'
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #ffffff
    .header-left
      text-align center
      width .64rem
      float left
      .black-icon
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-left .2rem
      margin-top .12rem
      text-indent .2rem
      background-color #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      text-align center
      padding 0 .1rem
      min-width 1.04rem
      float right
      color #fff
      .arrow-icon
        font-size .2rem
</style>
