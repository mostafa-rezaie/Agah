<template>
  <div class="wrapper">
    <div class="search-bar-wrapper">
      <app-city-search @getCityState="setCityState"></app-city-search>
    </div>
    <!-- TODO add choosen city from the vuex -->
    <div class="title-text">
      <div class="title">شعبه</div>
      <div class="subtitle">
        <!-- تهران - تهران -->
        <!-- new code  -->
        {{this.getChosenCityTitle}}
        <img src="../../../assets/img/edit-pen.svg" alt="" />
        <span class="edit-text"> ویرایش </span>
      </div>
    </div>
    <div v-if="cityIsSet" class="choose-branch-wrapper">
      <app-choose-branch></app-choose-branch>
      <div class="btn-box">
        <router-link to="/appointment" tag="div" class="pre-btn">
          <app-button
            label="مرحله قبل"
            simple
            iconIsSet
            sizeFull
            :icon="goBackIconSrc"
          ></app-button>
        </router-link>
        <router-link to="choose-day" tag="div" class="nxt-btn">
          <app-button label="مرحله بعدی" sizeFull></app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import citySearchBar from "./CitySearchBar";
import ChooseBranch from "./ChooseBranch";
import Button from "../../Button.vue";
import { mapGetters } from "vuex";

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
    };
  },
  methods: {
    setCityState(value) {
      console.log(value);
      this.cityIsSet = true;
    },
  },
  computed: {
  ...mapGetters ({
    getChosenCityTitle : 'getCityTitle'
  })    
  },
};
</script>

<style scoped>
.btn-box {
  direction: rtl;
  display: flex;
  margin-bottom: 10px;
}
.title-text {
  display: none;
}
@media screen and (max-width: 700px) {
  .btn-box {
    width: 92%;
    margin-right: 3%;
    margin-left: 4%;
  }
  .pre-btn {
    width: 39%;
    margin-left: 5px;
  }
  .nxt-btn {
    width: 61%;
  }
}
@media screen and (max-width: 500px) {
  .wrapper {
    direction: rtl;
  }
  .title-text {
    display: inline-block;
    direction: rtl;
    margin: 20px;
  }
  .search-bar-wrapper {
    display: none;
  }
  .edit-text {
    color: blue;
  }
  .title {
    font-weight: 100;
  }
  .subtitle {
    font-size: 18px;
  }
}
</style>