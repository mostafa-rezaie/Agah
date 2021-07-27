<template>
  <div>
    <app-header></app-header>
    <app-jumbo
        title="کد تایید را وارد کنید"
        subTitle="کد تایید به شماره موبایل ثبت شده توسط شما در سایت کارگزاری آگاه (17*****0919) ارسال گردید"
        jumboActiveClass="text-right"
        titleClass="title-right"
        subTitleClass="sub-title-right"
        tempClass="active"
        jumbo-class="jumbotron-lg"
    >
    </app-jumbo>
    <div class="input-container">

      <app-confirm-input-number
          label="کد ملی"
          placeHolder="5565665665"
          inputType="text"
          id="idNumber"
          value="5555555555"
          backSrc='/edit'
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
        <router-link to="/user-panel">
          <app-button :active="true" label="مرحله بعد"></app-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import ConfirmInputNumber from "../confirmation/ConfirmInputNumber.vue"
import Button from "../Button.vue";
import Header from "../Header.vue";

export default {
  components: {
    appJumbo: Jumbotron,
    appConfirmInputNumber: ConfirmInputNumber,
    appButton: Button,
    appHeader: Header,
  },
};
</script>

<style scoped>
.input-number {
  width: 200px;
}

.input-container{
  margin-right: 15%;
}

.btn-container {
  direction: rtl;
}
@media screen and (max-width: 1100px) {
  .input-container{
    margin-right: 4%;
  }

}
@media screen and (max-width: 600px) {
  .btn-container {
    /* padding-right: 12px; */
    width: 100%;
    margin: 25px 2% 25px 2%;
  }
}
</style>