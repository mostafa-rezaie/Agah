<template>
  <div>
    <div class="drop-down">
      <div class="drop-down-list">
        <div class="search-bar">
          <div id="search-icon-wrapper">
            <img src="../../../assets/img/icon-search.svg" alt="" />
          </div>
          <input
            class="city-search-bar"
            name="city"
            id="city"
            :placeholder="placeHolder"
            @input="filterCity($event)"
          />
        </div>
        <a
          v-for="(city, index) in filteredCities"
          :key="index"
          @click="updateSearchState(city)"
          >{{ city }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      citiesTitle: ['تهران' , 'بوشهر' ,'سمنان ' ,'مرکزی' ],
      filteredCities: [],
      temp: 0,
      chosenCity: {
        isSet: false,
        label: "",
      },
      urbanData: [],
      placeHolder: "تهران",
    };
  },
  computed: {
    ...mapGetters({
      getToken: "getUserToken",
    }),
  },
  methods: {
    filterCity($e) {
      this.filteredCities = this.citiesTitle.filter(
        (value) =>
          $e.target.value.length > 0 && value.startsWith($e.target.value)
      );
    },
    updateSearchState(cityTitle) {
      document.getElementById("city").value = cityTitle;
      this.filteredCities = [];
      this.placeHolder = cityTitle;
      this.chosenCity.isSet = true;
      this.passCityState();
    },
    passCityState() {
      this.$emit("getCityState", this.chosenCity.isSet);
    },
    getCities() {
      console.log(this.getToken);
      this.$api
        .get("/Urban/branch", {
          headers: {
            authorization: "Bearer " + this.getToken,
          },
        })
        .then((res) => res.data)
        .then((res) => res.data)
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          this.urbanData = res;
          this.setCitiesTitle();
        });
    },
    setCitiesTitle() {
      let i = 0;
      this.urbanData.forEach((element) => {
        this.citiesTitle[i] = element.title;
        i++;
      });
    },
  },
  mounted() {
    this.getCities();
  },
};
</script>
<style scoped>
.drop-down {
  direction: rtl;
  margin-right: 97px;
  margin-top: 68px;
  min-width: 490px;
  overflow: auto;
}

.drop-down-list a {
  display: block;
  padding: 15px 15px 15px 0;
  background-color: #f6f6f6;
  border-bottom: grey;
  text-decoration: none;
  color: black;
  border-top: none;
}

.drop-down-list {
  width: 460px;
  border: 2px solid #cccccc;
}

.search-bar input {
  padding: 15px 25px 15px 0;
  background-color: #f6f6f6;
  border: none;
  margin-right: 40px;
  box-sizing: content-box;
  /* height: 100%; */
}

.search-bar > input :focus-visible {
  border: none;
}

.search-bar {
  background-color: #f6f6f6;
}

#search-icon-wrapper > img {
  display: block;
  position: absolute;
  margin: 10px 10px 0 0;
}

.drop-down-list > a {
  border-bottom: 1px solid #d1d1d1;
  cursor: pointer;
}

input {
  outline: none;
}
</style>
