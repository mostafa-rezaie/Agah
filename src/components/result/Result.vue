<template>
  <div>
      <app-header
   
    ></app-header>
    <app-jumbo
      title="کد ملی  خود را جهت ثبت نوبت احراز هویت وارد کنید"
      subTitle="نوبت دهی احراز هویت برای افرادی می باشد که قبلا در آگاه ثبت نام کرده اند و احراز هویت نشده اند"
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
      backSrc="/login"

    ></app-confirm-input-number>
    <app-confirm-input-number
      label="کد ملی"
      placeHolder="5565665665"
      inputType="text"
      id="idNumber"
      backSrc="/login"

    ></app-confirm-input-number>
    <app-result-box :title="getTitle" :subTitle="getSubTitle"> </app-result-box>
    <div class="btn-container">
      <router-link to="/appointment">
    <app-button :active="true" :label="getLabel"></app-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import ConfirmInputNumber from "../confirmation/ConfirmInputNumber.vue";
import ResultBox from "./ResultBox.vue";
import Button from "../Button.vue";
import Header from '../Header.vue'
export default {
  data() {
    return {
      state: 'accepted',
      // states could be :
      // accepted , unfinished or signUp
    };
  },
  components: {
    appJumbo: Jumbotron,
    appConfirmInputNumber: ConfirmInputNumber,
    appButton: Button,
    appResultBox: ResultBox,
    appHeader : Header,
    
  },
  computed: {
    getLabel() {
      switch (this.state) {
        case 'accepted':
          return "رفتن به آگاه اکسپرس";
        case 'unfinished':
          return "تکمیل ثبت نام";
        case 'signUp':
          return "ثبت نام در آگاه اکسپرس";
        default:
          return "رفتن به آگاه اکسپرس";
      }
    },
    getTitle() {
      switch (this.state) {
        case 'accepted':
          return "عرفان محمدی گرامی";
        case 'unfinished':
          return "شما ثبت نام خود را تکمیل نکرده اید";
        case 'signUp':
          return "شما در آگاه ثبت نام نکرده اید ! ";
        default:
          return "شما در آگاه ثبت نام نکرده اید !";
      }
    },
    getSubTitle() {
        switch (this.state) {
        case 'accepted':
          return "احراز هویت شما قبلا با موفقیت انجام شده است و دسترسی شما به سامانه معاملات آنلاین فعال گردیده است";
        case 'unfinished':
          return "فرآیند ثبت نام شما تکمیل نشده است ابتدا ثبت نام خود را تکمیل سپس اقدام به نوبت دهی احراز هویت کنید";
        case 'signUp':
          return "شما در آگاه ثبت نام نکرده اید و امکان دریافت نوبت برای احراز هویت وجود ندارد";
        default:
          return "شما در آگاه ثبت نام نکرده اید !";
      }
    },
  },
};
</script>

<style  scoped>
.input-number {
  width: 200px;
}

.btn-container {
  direction: rtl;
  margin-right: 278px;
}
</style>