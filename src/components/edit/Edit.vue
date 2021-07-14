<template>
  <div>
    <app-header></app-header>
    <app-jumbo
      title="کد ملی خود را جهت  پیگیری ثبت نوبت احراز هویت وارد کنید"
      subTitle="نوبت دهی احراز هویت برای افرادی می باشد که قبلا در آگاه ثبت نام کرده اند و احراز هویت نشده اند"
      jumboActiveClass="text-right"
      titleClass="title-right"
      subTitleClass="sub-title-right"
      tempClass="active"
    >
    </app-jumbo>
    <app-input-number
      label="کد ملی"
      placeHolder="کد ملی خود را وارد کنید"
      inputType="text"
      id="idNumber"
      @updateInput="checkInputId"
    ></app-input-number>
    <app-input-captcha
      label="کد امنیتی"
      placeHolder="لطفا عدد رو به رو را وارد کنید"
      inputType="text"
      id="capthcaCode"
      @updateCaptch="checkCaptcha"
    >
    </app-input-captcha>
    <div class="btn-container">
      <router-link to="/edit-confirm" tag="div">
        <app-button :active="fieldHandler" label="دریافت کد تایید"></app-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import InputNumber from "../login/InputNumber.vue";
import InputCaptcha from "../login/InputCaptcha.vue";
import Button from "../Button.vue";
import Header from "../Header.vue";

export default {
  data() {
    return {
      ok: false,
      idIsCorrect: false,
      captchaIsCorrect: false,
      fieldsAreCorrect: false,
      temp: [],
      capthca: {
        id: {
          type: String,
          default: -1,
        },
        src: {
          type: String,
          default: " ",
        },
      },
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
      if (this.idIsCorrect && this.captchaIsCorrect) {
        return true;
      } else {
        return false;
      }
    },
  },

  components: {
    appJumbo: Jumbotron,
    appInputCaptcha: InputCaptcha,
    appInputNumber: InputNumber,
    appButton: Button,
    appHeader: Header,
  },
  methods: {
    checkValid() {
      return true;
    },
    checkInputId(value) {
      if (value.length > 8) {
        this.idIsCorrect = true;
        return true;
      } else {
        this.idIsCorrect = false;
        return false;
      }
    },
    checkCaptcha(value) {
        this.captchaIsCorrect = value;
    },
  },
};
</script>

<style  scoped>
.btn-container {
  direction: rtl;
  margin-right: 290px;
}
</style>