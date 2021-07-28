<template>
  <div>
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="top-text-container">
          <div class="title name">{{ selectedOptions.name }} گرامی</div>
          <div class="top-subtitle">
            در صورت موافقت، نوبت احراز هویت خود را تایید کنید
          </div>
        </div>
        <div class="summary-text-container">
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/location-address.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">شعبه مراجعه</div>
              <div class="subtitle">{{ selectedOptions.branch }}</div>
            </div>
          </div>
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/calender.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">روز مراجعه</div>
              <div class="subtitle">{{ selectedOptions.day }}</div>
            </div>
          </div>
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/watch.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">ساعت مراجعه</div>
              <div class="subtitle">{{ selectedOptions.time }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-box">
        <router-link to="choose-day" tag="div" id="pre-btn-container">
          <app-button
            label="مرحله قبل"
            simple
            iconIsSet
            iconMobile
            :icon="goBackIconSrc"
          ></app-button>
        </router-link>

        <!-- left button  -->
        <router-link to="accept" tag="div" id="nxt-btn-container">
          <app-button
            label="مرحله بعدی"
            @clicked="submitClickHandler"
          ></app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../../Button.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),
      //TODO add getters from computed
      name: "عرفان محمدی",
      selectedOptions: {
        day: "سه شنبه - ۲۷ شهریور",
        branch: "خیابان نلسون ماندلا باااااااا",
        time: "بین ۸ الی ۱۰ ",
      },
    };
  },
  computed: {
    ...mapGetters({
      getBranches: "getChosenCityBranches",
      getSelectedOptions: "getUserSelectedOption",
      getToken: "getUserToken",
    }),
  },
  methods: {
    setUserName() {
      this.name = this.getData.fullName;
    },

    setSelectedOptions() {
      let BranchId = this.getselectedOptions.BranchId;
      this.getBranches.forEach((element) => {
        if (element.id == BranchId)
          this.selectedOptions.branch = element.address;
      });
      this.selectedOptions.day = this.getselectedOptions.day;
      this.selectedOptions.time = this.getselectedOptions.time;
    },
    submitClickHandler() {
      this.$api.post(
        "CustomerAdmission",
        {
          //API params
          //TODO check for the branch capacity id
          branchCapacityId: 0,
          branchId: this.getselectedOptions.branchId,
          //TODO check the day format
          reservedDate: this.selectedOptions.day,
          customerId: 0,
        },
        {
          headers: {
            authorization: "Bearer " + this.getToken,
          },
        }
      );
    },
  },
  components: {
    appButton: Button,
  },
  mounted() {
    //TODO uncomment this lines
    // this.setSelectedOptions();
    // this.setUserName();
  },
};
</script>
<style scoped>
.option-container {
  display: flex;
  width: 700px;
  height: 100px;
  align-items: center;
  /*justify-content: space-around;*/
}

.text-container {
  margin-right: 20px;
  line-height: 40px;
}

.title {
  font-size: 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 30px;
  direction: rtl;
  height: 79vh;
  justify-content: space-between;
}

.name {
  font-size: 24px;
  font-weight: bold;
}

.subtitle {
  margin-right: 5px;
  font-weight: 300;
}

.top-text-container {
  line-height: 50px;
}

.top-subtitle {
  margin-right: 20px;
}

.summary-text-container {
  margin-top: 25px;
}

.btn-box {
  direction: rtl;
  margin-bottom: 10px;
  display: flex;
}
@media screen and (max-width: 700px) {
  .btn-box {
    width: 100%;
  }
  #nxt-btn-container > button {
    width: 100%;
  }
  #nxt-btn-container {
    width: 60%;
  }
  #pre-btn-container {
    width: 40%;
  }
  #pre-btn-container > button > .text-container > img {
    width: 9px;
    height: 14px;
  }
}
@media screen and (max-width: 600px) {
  .subtitle {
    font-size: 14px;
    font-weight: 300;
  }
  .title {
    font-size: 14px;
    font-weight: bold;
  }
  .top-subtitle {
    margin-right: 0;
    line-height: normal;
    font-size: 14px;
    font-weight: 300;
  }
}
</style>