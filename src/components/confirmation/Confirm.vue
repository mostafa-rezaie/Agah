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
      jumboClass="jumbotron-lg"
    >
    </app-jumbo>
    <div class="container">
      <app-confirm-input-number
          label="شماره همراه"
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
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {mapMutations} from "vuex";

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
      setUserData: "setUserData",
    }),

    setConfirmCode(value) {
      console.log(value);
      this.confirmCode = value;
    },
    clickHandler() {
      if (this.confirmCode.length != 6) {
        alert("کد تایید وارد شده صحیح نیست");
      } else {
        console.log("request sent");
        const userDataPromise = this.postValidateOtpReq();
        userDataPromise
            .then((res) => {
              if (res.isSuccess) {
                this.setData(res);

                //TODO store the data in the local storage
                console.log("entrance is valid");
                this.$router.push({path: "/result"});
                // TODO handle exceptions
              } else {
                alert("خطا در برقراری ارتباط با آگاه یا خطا در مقادیر ورودی");
              }
            })
            .catch(()=>{
              console.log('error has happened')
            })

      }
    },
    postValidateOtpReq() {
      return this.$api
          .post("Customer/ValidateOTPByNationaCode", {
            nationalCode: this.getUserId,
            otpCode: this.confirmCode,
            phoneNumber: this.getUserTel,
          })
          .then((res) => res.data)
          .catch((err) => {
            console.log("error is : ");
            console.log(err);

            err = err.response.data;
            alert(err.message);
          });
    },
    setData(res) {
      //TODO probably wont need the following line except last one
      this.setToken(res.data.token);
      this.setFullName(res.data.fullName);
      this.setId(res.data.id);
      this.setStatus(res.data.userStatus);
      this.setUserData(res.data);
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
  /* margin-right: 290px; */
}

@media screen and (min-width: 1100px) {
  .container {
    margin-right: 10%;
  }

}

@media screen and (max-width: 600px) {
  .btn-container {
    /* padding-right: 12px; */
    width: 95%;
    margin: auto;
  }

  .container {
    padding-right: 0;
    padding-left: 0;
  }

}
</style>