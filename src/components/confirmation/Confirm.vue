<template>
  <div>
    <app-header></app-header>
    <app-jumbo
        title="کد تایید را وارد کنید"
        :subTitle="getSubtitle"
        jumboActiveClass="text-right"
        titleClass="title-right"
        subTitleClass="sub-title-right"
        tempClass="active"
    >
    </app-jumbo>
    <app-confirm-input-number
        label="شماه همراه"
        placeHolder="0919*****17"
        inputType="tel"
        id="phoneNumber"
        value="09199999999"
        backSrc="/login"
    ></app-confirm-input-number>
    <app-confirm-input-number
        label="کد ملی"
        placeHolder="5565665665"
        inputType="text"
        id="idNumber"
        value="5555555555"
        backSrc="/login"
    ></app-confirm-input-number>
    <app-confirm-input-number
        label="کد تایید"
        placeHolder="کد تایید خود را وارد کنید"
        inputType="text"
        id="confirmCode"
        :sizeFull="true"
        :inputIsDisabled="false"
    ></app-confirm-input-number>
    <div class="btn-container">
      <router-link to="/result">
        <app-button :active="true" label="مرحله بعد"></app-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

import Jumbotron from "../Jumbotron.vue";
import ConfirmInputNumber from "./ConfirmInputNumber.vue";
import Button from "../Button.vue";
import Header from "../Header.vue";

export default {
  components: {
    appJumbo: Jumbotron,
    appConfirmInputNumber: ConfirmInputNumber,
    appButton: Button,
    appHeader: Header,
  },
  computed: {

    ...mapGetters({
      getUserTel: 'getUserTelNumber',
      getUserId: 'getUserIdNumber',
      getCaptcha: 'getUserCaptchaCode'
    }),
    // showMe (){
    //   console.log(this.getUserTel)
    //   return true
    // },
    getSubtitle() {
      let outString =
          'کد تایید به شماره موبایل ثبت شده توسط شما در سایت کارگزاری آگاه ('+
          this.getUserTel.toString() +
          ') ارسال گردید'
      return outString
    }
  },



  methods: {

  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.input-number {
  width: 200px;
}

.btn-container {
  direction: rtl;
  margin-right: 290px;
}
</style>