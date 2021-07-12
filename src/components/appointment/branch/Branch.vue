<template>
  <div>
    <div class="search-bar-wrapper">
      <app-city-search
      @getCityState = "setCityState"
      ></app-city-search>
    </div>
    <div v-if="cityIsSet" class="choose-branch-wrapper">
      <app-choose-branch></app-choose-branch>
    </div>
  </div>
</template>

<script>
import citySearchBar from './CitySearchBar'
import ChooseBranch from './ChooseBranch'

export default {
  components: {
    appCitySearch: citySearchBar,
    appChooseBranch: ChooseBranch
  },
  data() {
    return {
      cityIsSet: false
    }
  },
  methods : {
    setCityState (value){
      console.log(value)
      this.cityIsSet = true
    }
  }
};
</script>

<style scoped>

</style>