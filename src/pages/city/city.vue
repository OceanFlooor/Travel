<template>
  <div>
    <city-header></city-header>
    <city-search
      :cities="cities"
    ></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :alphabet="cities"
      @change="letterChange"
    ></city-alphabet>
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
      hotCities: [],
      letter: ''
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
    },
    letterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
