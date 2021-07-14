import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//remember S should be capital in the Store 
//remember V should be capital in the Vuex
    export const store = new Vuex.Store({

  state: {
    userTelNumber: "",
    userIdNumber: " ",
    captchaCode: " ",
  },
  mutations: {
    setUserTelNumber: (state, telNumber) => {
      state.userTelNumber = telNumber;
    },
    setUserIdNumber: (state, idNumber) => {
      state.userIdNumber = idNumber;
    },
    setUserCaptcha: (state, CaptchaCode) => {
      state.captchaCode = CaptchaCode;
    },
  },
});
