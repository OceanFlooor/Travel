<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
/* eslint-disable no-new */
import homeHeader from './component/homeHeader'
import homeSwiper from './component/homeSwiper'
import homeIcons from './component/homeIcons'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>

<style></style>
