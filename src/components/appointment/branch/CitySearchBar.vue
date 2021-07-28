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
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      //TODO delete the defualt content
      citiesTitle: ["تهران", "بوشهر", "سمنان ", "مرکزی"],
      filteredCities: [],
      temp: 0,
      chosenCity: {
        id: -1,
        label: "labelTemp",
        isSet: false,
        branches: [],
      },
      cityInfo: [],
      branchesInfo: [],
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
    ...mapMutations({
      setChosenUrban: "setChosenUrbanData",
    }),
    filterCity($e) {
      this.filteredCities = this.citiesTitle.filter(
        (value) =>
          $e.target.value.length > 0 && value.startsWith($e.target.value)
      );
    },
    updateSearchState(cityTitle) {
      document.getElementById("city").value = cityTitle;
      this.urbanData.forEach((element) => {
        if (element.title == cityTitle) {
          this.chosenCity.label = element.title;
          this.chosenCity.id = element.id;
          this.chosenCity.isSet = true;
          // this.chosenCity.branches = element.branches;
          this.chosenCity.branches = [];
          element.branches.forEach((branchElement)=>{
            this.chosenCity.branches.push(branchElement)
          })
          //check for branches
        }
      });
      this.setChosenUrban(this.chosenCity);
      this.filteredCities = [];
      this.placeHolder = cityTitle;
      this.passCityState();
    },
    passCityState() {
      this.$emit("getCityState", this.chosenCity.isSet);
    },
    getCities() {
      //TODO delete line 
      this.urbanData = []
      console.log(this.getToken);
      this.$api
        .get("Urban/branch", {
          headers: {
            authorization: "Bearer " + this.getToken,
          },
        })
        .then((res) => res.data.data.data)
        .then((res) => {
          res.forEach((element) => {
            this.urbanData.push(element);
          });
          this.setCitiesTitle();
        });
    },
    setCitiesTitle() {
      this.urbanData.forEach((element) => {
        //save the titles
        this.citiesTitle.push(element.title);
        //save the city information
        this.cityInfo.push({ id: element.id, title: element.title });
        //save city branches information
        element.branches.forEach((branchElement) => {
          this.branchesInfo.push({
            cityId: element.id,
            address: branchElement.address,
            id: branchElement.id,
            latitude: branchElement.latitude,
            longtitude: branchElement.longtitude,
            title: branchElement.title,
          });
        });
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
@media screen and (max-width: 1200px) {
  .drop-down {
    margin-right: 5%;
  }
}
</style>
