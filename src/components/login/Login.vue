<template>
  <div>
    <app-jumbo
      title="کد ملی و شماره همراه خود را جهت ثبت نوبت احراز هویت وارد کنید"
      subTitle="نوبت دهی احراز هویت برای افرادی می باشد که قبلا در آگاه ثبت نام کرده اند و احراز هویت نشده اند"
      jumboActiveClass="text-right"
      titleClass="title-right"
      subTitleClass="sub-title-right"
      tempClass="active"
    >
    </app-jumbo>
    <app-input-number
      label="شماه همراه"
      placeHolder="شماره خود را وارد کنید"
      inputType="tel"
      id="phoneNumber"
      @updateInput="checkInputNumber"
    ></app-input-number>
    <app-input-number
      label="کد ملی"
      placeHolder="کد ملی خود را وارد کنید"
      inputType="text"
      id="idNumber"
      @updateInput="checkInputId"
    ></app-input-number>
    <!-- <button style="width : 200px" @click="printInputFlag"></button> -->
    <app-input-captcha
      label="کد امنیتی"
      placeHolder="لطفا عدد رو به رو را وارد کنید"
      inputType="text"
      id="capthcaCode"
      @updateCaptch="checkCaptcha"
    >
    </app-input-captcha>
    <app-result-box> </app-result-box>
    <app-button :active="fieldHandler" label="دریافت کد تایید"></app-button>
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import InputNumber from "../InputNumber.vue";
import InputCaptcha from "../InputCaptcha.vue";
import Button from "../Button.vue";
import ResultBox from "../ResultBox.vue";

export default {
  data() {
    return {
      ok: false,
      natioanlCode: "",
      idIsCorrect: false,
      phoneIsCorrect: false,
      captchaIsCorrect: false,
      fieldsAreCorrect: false,
      temp: [],
    };
  },
  computed: {
    // checkButton(){
    //     return this.natioanlCode.length>0;
    // },
    checkPhoneNumber() {
      return true;
    },
    fieldHandler() {
      if (this.phoneIsCorrect && this.idIsCorrect) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    appJumbo: Jumbotron,
    appInputNumber: InputNumber,
    appInputCaptcha: InputCaptcha,
    appButton: Button,
    appResultBox: ResultBox,
  },
  methods: {
    checkValid() {
      return true;
    },
    checkInputNumber(value) {
      this.temp = value;
      if (value.length > 9) {
        if (value[0] == 0 && value[1] == 9) {
          console.log("phone is  true");
          this.phoneIsCorrect = true;
          return true;
        }
      } else {
        this.phoneIsCorrect = false;
        console.log("phone is  false");
        return false;
      }
    },
    checkInputId(value) {
      if (value.length > 9) {
        this.idIsCorrect = true;
        console.log("id is true");
        return true;
      } else {
        console.log("id is false");
        this.idIsCorrect = false;
        return false;
      }
    },
    checkCaptcha(value) {
      if (value) {
        this.captchaIsCorrect = true;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
</style>