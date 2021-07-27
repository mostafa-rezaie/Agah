<template>
  <div>
    <!-- choose day section -->

    <div class="wrapper" id="wrapper">
      <div class="choose-day-wrapper">
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
              wrapperClassDay
              innerContainerDay
              :active="index == activatedCardIndex"
              :iconIsSet="index == activatedCardIndex"
              @clicked="clickHandler(index)"
          ></app-branch-card>
        </div>
      </div>

      <!-- choose time section  -->
      <div v-if="activatedCardIndex != -1" class="choose-time-wrapper">
        <div class="title-text" id="title-text">ساعت مراجعه را انتخاب کنید</div>
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

      <!-- bottom button section -->

      <!-- right button  -->

      <div class="btn-box">
        <router-link to="branch" tag="div" id="pre-btn-container">
          <app-button
              label="مرحله قبل"
              simple
              iconIsSet
              iconMobile
              :icon="goBackIconSrc"
          ></app-button>
        </router-link>

        <!-- left button  -->
        <router-link to="summary" tag="div" id="nxt-btn-container">
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
      activatedTextBox: -1,
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
      this.activatedCardIndex = index;
    },
    textBoxClickHandler(index) {
      this.activatedTextBox = index;
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

.cards > .card-wrapper:nth-child(2n) {
  margin-right: 45px;
}

.cards {
  margin-top: 20px;
}

.title-text {
  font-size: 24px;
  display: inline-block;
}

.choose-day-wrapper,
.time-box-wrapper {
  direction: rtl;
  height: auto;
  width: 1112px;
  margin: 20px;
}

.time-box-wrapper > div {
  margin-bottom: 15px;
  margin-right: 20px;
}

.time-box-wrapper {
  height: auto;
  margin: 20px 2% 0 0;
  width: 98%;
}

.wrapper {
  height: 100%;
  direction: rtl;
}
#wrapper{
  height: 83vh;
  display: flex;
  flex-direction: column;

}
.btn-box {
  direction: rtl;
  display: flex;
  justify-self: end;
  margin-top: auto;
  margin-bottom: 10px;
}

@media screen and (max-width: 1400px) {
  .wrapper {
    width: 98%;
    margin-left: 5px;
  }

  .choose-day-wrapper {
    width: 100%;
    margin: 2px;
  }

  .cards {
    margin-right: 15px;
  }

  .time-box-wrapper > div {
    width: 30%;
  }
}

@media screen and (max-width: 1100px) {
  .time-box-wrapper > div {
    width: 45%;
    margin-bottom: 5px !important;
  }

  .time-box-wrapper > div:nth-child(2n) {
    margin-right: 2.5% !important;
  }
  .time-box-wrapper > div:nth-child(2n+1) {
    margin-right: 12px;
  }

}

@media screen and (max-width: 800px) {
  .cards {
    width: 92%;
  }

}

@media screen and (max-width: 700px) {
  #wrapper{
    height: 90vh;
  }
  .cards > .card-wrapper:nth-child(2n) {
    margin-right: 4%;
  }

  .title-wrapper {
    margin: 20px !important;
  }

  .cards {
    margin-top: 2px;
  }

  .title-text {
    font-size: 14px;
    font-weight: bold;

  }

  #title-text {
    margin: 20px 20px 0 0;
  }

  .time-box-wrapper > div {
    width: 45%;
    margin-bottom: 5px !important;
  }

  .time-box-wrapper > div:nth-child(2n) {
    margin-right: 3% !important;
  }
  .time-box-wrapper{
    width: 92%;
  }
  #nxt-btn-container > button {
    width: 100%;
  }
  #nxt-btn-container{
    width: 60%;
  }
  #pre-btn-container{

    width: 40%;
  }
  .btn-box{
    margin-right: 4%;
    width: 87%;
    margin-top: 25px;
  }
  #pre-btn-container > button{
    width : 100%;
  }
}

@media screen and (max-width: 600px) {
  .time-box-wrapper > div {
    width: 42%;
  }
  .time-box-wrapper{
    width: 98%;
  }

}

@media screen and (max-width: 500px) {
  .time-box-wrapper > div {
    margin-bottom: 5px !important;
  }

  .time-box-wrapper > div:nth-child(2n) {
    margin-right: 4% !important;
  }

}
</style>