<template>
  <div>

    <div class="wrapper">
      <div class="top-text-container">
        <div class="title name ">{{ name }} گرامی</div>
        <div class="top-subtitle">در صورت موافقت، نوبت احراز هویت خود را تایید کنید</div>
      </div>
      <div class="summary-text-container">
        <div class="option-container">
          <div class="image-container">
            <img src="../../../assets/img/location-address.svg" alt=""/>
          </div>
          <div class="text-container">


            <div class="title">شعبه مراجعه</div>
            <div class="subtitle">{{ branch }}</div>
          </div>
        </div>
        <div class="option-container">
          <div class="image-container">
            <img src="../../../assets/img/calender.svg" alt=""/>
          </div>
          <div class="text-container">


            <div class="title">روز مراجعه</div>
            <div class="subtitle">{{ day }}</div>
          </div>
        </div>
        <div class="option-container">
          <div class="image-container">
            <img src="../../../assets/img/watch.svg" alt=""/>
          </div>
          <div class="text-container">

            <div class="title">ساعت مراجعه</div>
            <div class="subtitle">{{ time }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="btn-box">
      <router-link to="choose-day">
        <app-button
            label="مرحله قبل"
            simple
            iconIsSet
            :icon="goBackIconSrc"
        ></app-button>
      </router-link>

      <!-- left button  -->
      <router-link to="accept">

        <app-button label="مرحله بعدی"></app-button>
      </router-link>
    </div>


  </div>

</template>
<script>
import Button from "../../Button.vue";

export default {
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),

      name: 'عرفان محمدی',
      day: 'سه شنبه - ۲۷ شهریور',
      branch: 'خیابان نلسون ماندلا باااااااا',
      time: 'بین ۸ الی ۱۰ ',
    }
  },
  components: {
    appButton: Button,

  }
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
  margin-right: 86px;
  margin-top: 82px;
  direction: rtl;
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
  margin-top: 102px;
}

.btn-box {
  direction: rtl;
  position: relative;
  bottom: -10px;

}
</style>