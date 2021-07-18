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
      :placeHolder="getUserTel"
      inputType="tel"
      id="phoneNumber"
      value="09199999999"
      backSrc="/login"
    ></app-confirm-input-number>
    <app-confirm-input-number
      label="کد ملی"
      :placeHolder="getUserId"
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
      @entered="setConfirmCode"
    ></app-confirm-input-number>
    <div class="btn-container">
      <!-- <router-link to="/result"> -->
      <app-button
        :active="true"
        label="مرحله بعد"
        @clicked="clickHandler"
      ></app-button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

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
      getUserTel: "getUserTelNumber",
      getUserId: "getUserIdNumber",
      getCaptcha: "getUserCaptchaCode",
      getToken: "getUserToken",
    }),
    // showMe (){
    //   console.log(this.getUserTel)
    //   return true
    // },
    getSubtitle() {
      let outString =
        "کد تایید به شماره موبایل ثبت شده توسط شما در سایت کارگزاری آگاه (" +
        this.getUserTel.toString() +
        ") ارسال گردید";
      return outString;
    },
  },

  methods: {
    ...mapMutations({
      setToken: "setUserToken",
      setStatus: "setUserStatus",
      setId: "setUserId",
      setFullName: "setUserFullName",
    }),

    setConfirmCode(value) {
      this.confirmCode = value;
    },
    clickHandler() {
      // console.log(this.getUserTel)
      // TODO add loading page while clicking
      console.log(this.getToken);
      // TODO check for the wrong opt code
      this.$api
        .post("Customer/ValidateOTPByNationaCode", {
          nationalCode: this.getUserId,
          otpCode: this.confirmCode,
          phoneNumber: this.getUserTel,
        })
        .then((res) => res.data)
        .then((res) => {
          if (res.isSuccess) {
            this.setToken(res.data.token);
            this.setFullName (res.data.fullName)
            this.setId (res.data.id)
            this.setStatus(res.data.userStatus)
            // console.log(res.data.userStatus);
            //TODO sotre in the local storage 
            console.log("entrance is valid");
            this.$router.push({ path: "result" });
            // TODO handle exceptions
          } else {
            alert("خطا در برقراری ارتباط با آگاه یا خطا در مقادیر ورودی");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      confirmCode: {
        type: String,
        default: "",
      },
    };
  },
};
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