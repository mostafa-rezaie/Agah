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
    ></app-input-number>
    <app-input-number
        label="کد ملی"
        placeHolder="کد ملی خود را وارد کنید"
        inputType="text"
        id="idNumber"
        v-model="natioanlCode"
    ></app-input-number>

    <app-input-captcha
      label="کد امنیتی"
      placeHolder="لطفا عدد رو به رو را وارد کنید"
      inputType="text"
      id="capthcaCode"
    >
    </app-input-captcha>
    <app-result-box> </app-result-box>
    <app-button 
        :disabled="!checkButton"
    label="دریافت کد تایید"
     
    ></app-button>
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
      natioanlCode:""
    };
  },
  computed:{
    checkButton(){
        return this.natioanlCode.length>0;
    }
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
  },
};
</script>

<style lang="postcss" scoped>
</style>