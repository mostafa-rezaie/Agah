<template>
  <div>
    <div class="wrapper">
      <div class="inner-wrapper">
        <div class="top-text-container">
          <div class="title name">{{ name }} گرامی</div>
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
              <div class="subtitle">{{ branch }}</div>
            </div>
          </div>
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/calender.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">روز مراجعه</div>
              <div class="subtitle">{{ day }}</div>
            </div>
          </div>
          <div class="option-container">
            <div class="image-container">
              <img src="../../../assets/img/watch.svg" alt="" />
            </div>
            <div class="text-container">
              <div class="title">ساعت مراجعه</div>
              <div class="subtitle">{{ time }}</div>
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
        <router-link to="accept"  tag="div" id="nxt-btn-container">
          <app-button label="مرحله بعدی"></app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../../Button.vue";

export default {
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),

      name: "عرفان محمدی",
      day: "سه شنبه - ۲۷ شهریور",
      branch: "خیابان نلسون ماندلا باااااااا",
      time: "بین ۸ الی ۱۰ ",
    };
  },
  components: {
    appButton: Button,
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
  .btn-box{
    width: 100%;
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
  #pre-btn-container > button > .text-container > img{
    width: 9px;
    height: 14px;
  }
}
@media screen and (max-width: 600px) {
  .subtitle {
    font-size: 14px;
    font-weight: 300;
  }
  .title{
    font-size: 14px;
    font-weight: bold;
  }
  .top-subtitle{
    margin-right: 0;
    line-height: normal;
    font-size: 14px;
    font-weight: 300;
  }

}
</style>