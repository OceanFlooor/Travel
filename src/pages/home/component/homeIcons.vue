<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <a href="">
            <div class="icon-img">
              <img :src="item.imgUrl" alt="">
            </div>
            <p>{{ item.desc }}</p>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~sty/varibles.styl'
  @import '~sty/mixins.styl'
  .icons
    margin-top .2rem
    width 100%
    height 0
    padding-bottom 50%
    overflow hidden
    .icon
      position relative
      overflow hidden
      width 25%
      height 0
      float left
      padding-bottom 25%
      text-align center
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        img
          height 100%
      p
        position absolute
        bottom 0
        left 0
        right 0
        line-height .44rem
        color $darkTextColor
        ellipsis()
</style>
