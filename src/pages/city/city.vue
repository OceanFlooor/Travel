<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './component/cityHeader'
import citySearch from './component/citySearch'
import cityList from './component/cityList'
import cityAlphabet from './component/cityAlphabet'

export default {
  name: 'city',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
