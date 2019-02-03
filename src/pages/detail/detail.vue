<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import detailBanner from './component/banner'
import detailHeader from './component/header'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
