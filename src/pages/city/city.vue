<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :alphabet="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data () {
    return {
      cities: {},
      hotCities: []
    }
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
