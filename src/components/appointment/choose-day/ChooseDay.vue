<template>
  <div>
    <!-- choose day section -->
    <div class="wrapper">
      <div class="choose-day-wrapper">
        <div class="box-day">
          <div class="title-wrapper">
            <div class="title-text">روز مراجعه را انتخاب کنید</div>
          </div>
          <div class="cards">
            <app-branch-card
              v-for="(branch, index) in branches"
              :key="index"
              :title="branch.title"
              :subtitle="branch.subtitle"
              containerMd
              :isActivatedBefore="dayState"
              @passState="updateDayState"
            ></app-branch-card>
          </div>
        </div>
      </div>

      <!-- choose time section  -->
      <div v-if="dayState" class="choose-time-wrapper">
        <div class="title-text">ساعت مراجعه را انتخاب کنید</div>
        <div class="time-box-wrapper">
          <app-text-box
            v-for="(time, index) in times"
            :key="index"
            :text="time"
            :isActivatedBefore="timeState"
            @passState="updateTimeState"
          ></app-text-box>
        </div>
      </div>

      <!-- bottom button section -->

      <!-- right button  -->
      <div class="btn-box">
        <app-button
          label="مرحله قبل"
          simple
          iconIsSet
          :icon="goBackIconSrc"
        ></app-button>

        <!-- left button  -->
        <app-button label="مرحله بعدی"></app-button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../Button.vue";
import BranchCard from "../branch/BranchCard";
import TextBox from "../TextBox.vue";

export default {
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),
      checkIconState: 0,
      dayState: false,
      timeState: false,
      branches: [
        {
          title: "شنبه",
          subtitle: "شهریور 1399",
        },
        {
          title: "یکشنبه",
          subtitle: "شهریور 1399",
        },
        {
          title: "چهارشنبه",
          subtitle: "شهریور 1399",
        },
        {
          title: "چهارشنبه",
          subtitle: "شهریور 1399",
        },
      ],
      times: ["بین 8 الی 12", "بین 8 الی 12", "بین 8 الی 12", "بین 8 الی 12"],
    };
  },
  computed: {},
  components: {
    appButton: Button,
    appBranchCard: BranchCard,
    appTextBox: TextBox,
  },
  methods: {
    updateDayState(val) {
      this.dayState = val;
    },
    updateTimeState(val) {
      this.timeState = val;
    },
  },
};
</script>

<style scoped>
.test {
  height: 200px;
  cursor: pointer;
  margin: 100px;
}
.cards > .wrapper:nth-child(2n) {
  margin-right: 45px;
}
.cards {
  margin-top: 49px;
}
.title-text {
  font-size: 24px;
  display: inline-block;
}
.choose-day-wrapper,
.time-box-wrapper {
  direction: rtl;
  height: 489px;
  width: 1112px;
  margin: 20px;
}
.time-box-wrapper > .wrapper {
  margin-bottom: 30px;
  margin-right: 20px;
}
.time-box-wrapper {
  margin-right: 0px !important;
  height: auto;
}
.wrapper {
  direction: rtl;
}

.box-day {
  direction: rtl;
  /* border: solid; */
}
.btn-box {
  direction: rtl;
}
</style>