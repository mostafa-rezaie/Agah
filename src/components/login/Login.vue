<template>
  <div>
    <div class="loader" v-if="loaderFlag">
      <img src="../../assets/img/loading-gif.svg" alt="" />
    </div>
    <app-header></app-header>
    <app-jumbo
      title="کد ملی و شماره همراه خود را جهت ثبت نوبت احراز هویت وارد کنید"
      subTitle="نوبت دهی احراز هویت برای افرادی می باشد که قبلا در آگاه ثبت نام کرده اند و احراز هویت نشده اند"
      jumboActiveClass="text-right"
      titleClass="title-right"
      subTitleClass="sub-title-right"
      tempClass="active"
      jumboClass="jumbotron-lg"
    >
    </app-jumbo>
    <div class="input-container">
      <app-input-number
        label="شماره همراه"
        placeHolder="شماره خود را وارد کنید"
        inputType="tel"
        id="phoneNumber"
        value="09128874778"
        @updateInput="checkInputNumber"
      ></app-input-number>
      <!-- TODO delete value prop -->
      <app-input-number
        label="کد ملی"
        placeHolder="کد ملی خود را وارد کنید"
        inputType="text"
        id="idNumber"
        value="8673239953"
        @updateInput="checkIdNumber"
      ></app-input-number>
      <!-- <button style="width : 200px" @click="printInputFlag"></button> -->
      <app-input-captcha
        label="کد امنیتی"
        placeHolder="لطفا عدد رو به رو را وارد کنید"
        inputType="text"
        :captchaSrc="'https://' + captcha.src"
        :captcahCode="captcha.id"
        id="capthcaCode"
        @clicked="getCaptcha"
        @entered="setCaptcha"
      >
      </app-input-captcha>
      <!--    <p>{{captchaEntered}}</p>-->
      <div class="btn-container">
        <!--      <router-link to="" tag="div"-->
        <!--      >-->
        <app-button
          :active="fieldHandler"
          :not-allowed="!fieldHandler"
          label="دریافت کد تایید"
          @clicked="clickHandler"
        ></app-button>
        <!--      </router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Jumbotron from "../Jumbotron.vue";
import InputNumber from "./InputNumber.vue";
import InputCaptcha from "./InputCaptcha.vue";
import Button from "../Button.vue";
import Header from "../Header.vue";
// import axios from "axios";

export default {
  data() {
    return {
      numberIsCorrect: false,
      captchaIsEntered: false,
      loaderFlag: false,
      phoneNumber: "",
      idNumber: "",
      captchaEntered: "",
      captcha: {
        id: {
          type: String,
          default: "123456",
        },
        src: {
          type: String,
          default: " ",
        },
      },
      systemUp: {
        type: Boolean,
        default: false,
      },
    };
  },

  components: {
    appJumbo: Jumbotron,
    appInputNumber: InputNumber,
    appInputCaptcha: InputCaptcha,
    appButton: Button,
    appHeader: Header,
  },
  computed: {
    fieldHandler() {
      if (
        this.phoneNumber.length > 10 &&
        this.phoneNumber[0] == "0" &&
        this.phoneNumber[1] == "9" &&
        this.idNumber.length > 9 &&
        this.captchaEntered.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    ...mapMutations({
      setUserTel: "setUserTelNumber",
      setUserId: "setUserIdNumber",
      serUserCaptcha: "setCaptchaCode",
    }),
    checkInputNumber(value) {
      this.phoneNumber = value;
    },
    checkIdNumber(value) {
      this.idNumber = value;
    },

    setCaptcha(value) {
      console.log(value);
      this.captchaEntered = value;
    },
    hideLoader() {
      this.loaderFlag = false;
    },

    getCaptcha() {
      console.log("hey");
      this.$api
        .get("Captcha")
        .then((res) => res.data)
        .then((res) => {
          if (res.isSuccess) {
            console.log(res.data.captchaId);
            console.log(res.data.captchaUrl);
            this.captcha.id = res.data.captchaId;
            this.captcha.src = res.data.captchaUrl;
            if (this.loaderFlag)
              setTimeout(() => {
                this.hideLoader();
              }, 500);
          }
        });
    },
    clickHandler() {
      if (this.systemUp) {
        if (this.fieldHandler) {
          // if (this.captchaEntered == this.captcha.id) {
            this.setUserTel(this.phoneNumber);
            this.setUserId(this.idNumber);
            this.serUserCaptcha(this.captcha.id);
            this.getVerification();
          // }
          // else alert("کپچا نادرست است");
        }
      } else {
        console.log("اگاه در دسترس نیست");
      }
    },
    getVerification() {
      this.$api
        .get("Customer/VerificationCode", {
          params: {
            NationalCode: this.idNumber,
            PhoneNumber: this.phoneNumber,
            CaptchaCode: this.captchaEntered,
            CaptchaId: this.captcha.id,
          },
        })
        .then(
          (res) => {
            if (res.data.isSuccess) {
              //TODO delete
              console.log("validate is success");
              this.$router.push({ path: "confirm" });
            } else {
              throw "bad request";
            }
          },
          () => {
            alert("خطا در برقراری ارتباط با اگاه");
          }
        );
    },

    checkSystemIsUp() {
      return this.$api
        .get("Customer/IsUp")
        .then((res) => {
          if (res.request.status == 200) {
            console.log("system is up");
            this.systemUp = true;
          } else {
            throw "Bad request";
          }
        })
        .catch(() => {
          console.log("system is down");
          alert("آگاه در دسترس نیست");
        });
    },
    getWord() {
      console.log("hey");
      fetch(
        "https://agah-admission-api.webjarprojects.ir/api/CustomerAdmission/IsUp"
      )
        // .then(res =>  res.data)
        .then((res) => {
          console.log(res);
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
  mounted() {
    this.getCaptcha();
    this.checkSystemIsUp();
  },
};
</script>

<style scoped>
.btn-container {
  direction: rtl;
}
.input-container {
  margin-right: 16%;
}

@media screen and (max-width: 1100px) {
  .input-container {
    margin-right: 4%;
  }
}

@media screen and (max-width: 600px) {
  .btn-container {
    margin-left: 5%;
    width: 95%;
  }

  .container {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>