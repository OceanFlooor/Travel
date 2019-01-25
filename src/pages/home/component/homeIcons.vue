<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <a href="">
            <div class="icon-img">
              <img :src="item.iconUrl" alt="">
            </div>
            <p>{{ item.title }}</p>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          id: '000',
          title: '景点门票'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '001',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '002',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '003',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '004',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '005',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '006',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '007',
          title: '丹霞山'
        }, {
          iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          id: '008',
          title: '丹霞山'
        }
      ]
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
