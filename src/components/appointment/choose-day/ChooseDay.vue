<template>
  <div>
    <!-- choose day section -->
    <div class="wrapper">
      <div class="inner-wrapper">

        <div class="choose-day-wrapper">
          <div class="box-day">
            <div class="title-wrapper">
              <div class="title-text">روز مراجعه را انتخاب کنید</div>
            </div>
            <div class="cards">
              <app-branch-card
                  v-for="(day, index) in Days"
                  :key="index"
                  :title="day.title"
                  :subtitle="day.subtitle"
                  containerMd
                  :active="index == activatedCardIndex"
                  :iconIsSet="index == activatedCardIndex "
                  @clicked="clickHandler(index)"
              ></app-branch-card>
            </div>
          </div>
        </div>

        <!-- choose time section  -->
        <div v-if="activatedCardIndex != -1" class="choose-time-wrapper">
          <div class="title-text">ساعت مراجعه را انتخاب کنید</div>
          <div class="time-box-wrapper">
            <app-text-box
                v-for="(time, index) in times"
                :key="index"
                :text="time"
                :textBoxActive="index == activatedTextBox"
                @clicked="textBoxClickHandler(index)"
            ></app-text-box>
          </div>
        </div>
      </div>

      <!-- bottom button section -->

      <!-- right button  -->

      <div class="btn-box">
      <router-link to="branch">
        <app-button
            label="مرحله قبل"
            simple
            iconIsSet
            :icon="goBackIconSrc"
        ></app-button>
      </router-link>

        <!-- left button  -->
        <router-link to="summary">

        <app-button label="مرحله بعدی"></app-button>
        </router-link>
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
      Days: [
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
      activatedCardIndex: -1,
      activatedTextBox : -1,

    };
  },
  computed: {},
  components: {
    appButton: Button,
    appBranchCard: BranchCard,
    appTextBox: TextBox,
  },
  methods: {

    updateTimeState(val) {
      this.timeState = val;
    },
    clickHandler(index) {
      this.activatedCardIndex = index
    },
    textBoxClickHandler(index){

      this.activatedTextBox = index
  },


  }
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
  height: 430px;
  width: 1112px;
  margin: 20px;
}
.inner-wrapper{
  width: 1112px;
  height: 650px;
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
  position: relative;
  bottom: -10px;

}
</style>