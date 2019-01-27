<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
/* eslint-disable no-new */
import homeHeader from './component/homeHeader'
import homeSwiper from './component/homeSwiper'
import homeIcons from './component/homeIcons'
import homeRecommend from './component/homeRecommend'
import homeWeekend from './component/homeWeekend'
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRecommend,
    homeWeekend
  },
  methods: {
    getHomeInfo () {
      // ajax请求
      axios.get('api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
        console.log(res)
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style></style>
