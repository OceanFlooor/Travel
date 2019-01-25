<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
/* eslint-disable no-new */
import homeHeader from './component/homeHeader'
import homeSwiper from './component/homeSwiper'
export default {
  name: 'home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style></style>
