<template>
  <div>
    <app-header></app-header>
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
    <div class="btn-container">
      <router-link to="/confirm" tag="div">
        <app-button :active="fieldHandler" label="دریافت کد تایید"></app-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Jumbotron from "../Jumbotron.vue";
import InputNumber from "./InputNumber.vue";
import InputCaptcha from "./InputCaptcha.vue";
import Button from "../Button.vue";
import Header from "../Header.vue";
import axios from "axios";

export default {
  data() {
    return {
      ok: false,
      idIsCorrect: false,
      phoneIsCorrect: false,
      captchaIsCorrect: false,
      fieldsAreCorrect: false,
      numberIsCorrect: false,
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
      if (this.numberIsCorrect && this.idIsCorrect && this.captchaIsCorrect) {
        return true;
      } else {
        return false;
      }
      //adding API
    },
  },

  components: {
    appJumbo: Jumbotron,
    appInputNumber: InputNumber,
    appInputCaptcha: InputCaptcha,
    appButton: Button,
    appHeader: Header,
  },
  methods: {
    checkValid() {
      return true;
    },
    checkInputNumber(value) {
      //change input event --> checkinput --> update input -->$emit
      this.temp = value;
      if (value.length > 9) {
        if (value[0] == 0 && value[1] == 9) {
          console.log("phone is  true");
          this.numberIsCorrect = true;
          return true;
        }
      } else {
        this.numberIsCorrect = false;
        console.log("phone is  false");
        return false;
      }
    },
    checkInputId(value) {
      if (value.length > 8) {
        this.idIsCorrect = true;
        // console.log("id is true");
        return true;
      } else {
        // console.log("id is false");
        this.idIsCorrect = false;
        return false;
      }
    },
    checkCaptcha(value) {
      console.log(value);
      if (value) {
        this.captchaIsCorrect = true;
      }
    },
  },
  beforeCreate() {
    // this.$api
    axios
      .get("https://agah-admission-api.webjarprojects.ir/api/Customer/IsUp")
      .then(() => {
        // console.log("system is up");
      })
      .catch((err) => {
        alert("سیستم قادر به پاسخوگی نیست");
        console.log(err);
      });
  },
  beforeMount() {
    this.$api.get("Captcha")
    .then(res => res.data)
    .then((res) => {
      this.capthca = { id: res.data.captchaId, src: res.data.captchaUrl };
      console.log(res);
      // console.log(this.capthca);
    });
  },
  mounted() {},
  created() {},
};
</script>

<style  scoped>
.btn-container {
  direction: rtl;
  margin-right: 290px;
}
</style>