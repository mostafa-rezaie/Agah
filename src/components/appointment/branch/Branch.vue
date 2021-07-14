<template>
  <div>
    <div class="search-bar-wrapper">
      <app-city-search
          @getCityState="setCityState"
      ></app-city-search>
    </div>
    <div v-if="cityIsSet" class="choose-branch-wrapper">
      <app-choose-branch></app-choose-branch>
      <div class="btn-box">
        <app-button
            label="مرحله قبل"
            simple
            iconIsSet
            :icon="goBackIconSrc"
        ></app-button>
        <router-link to="choose-day">

          <app-button label="مرحله بعدی"></app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import citySearchBar from './CitySearchBar'
import ChooseBranch from './ChooseBranch'
import Button from "../../Button.vue";

export default {
  components: {
    appCitySearch: citySearchBar,
    appChooseBranch: ChooseBranch,
    appButton: Button,

  },
  data() {
    return {
      cityIsSet: false,
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),

    }
  },
  methods: {
    setCityState(value) {
      console.log(value)
      this.cityIsSet = true
    }
  }
};
</script>

<style scoped>
.btn-box {
  direction: rtl;

}
</style>