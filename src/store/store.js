import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
//remember S should be capital in the Store
//remember V should be capital in the Vuex
export const store = new Vuex.Store({
  state: {
    userTelNumber: "09128874778",
    userIdNumber: "8673239953",
    captchaCode: "",
    token: "",
    userStatus: "",
    userFullName: "",
    userId: "",
    userData: {
      fullName: "",
      id: "",
      isUserPhoneNumberExit: null,
      lastModifyAt: "",
      nationalCode: "",
      token: "",
    },
    selectedOption: {
      cityId: -1,
      branchId: -1,
      //TODO add template day
      day: "",
      //TODO add template time
      time: "",
    },
    chosenBranchId: -1,
    urbanData: {
      id: {
        type: String,
      },
      label: {
        type: String,
      },
      isSet: {
        type: Boolean,
      },
      branches: [],
    },
  },
  getters: {
    getUserTelNumber: (state) => state.userTelNumber,
    getUserIdNumber: (state) => state.userIdNumber,
    getUserCaptchaCode: (state) => state.captchaCode,
    getUserToken: (state) => state.token,
    getUserStatus: (state) => state.userStatus,
    getUserFullName: (state) => state.userFullName,
    getUrbanData: (state) => state.urbanData,
    getChosenCityBranches: (state) => state.urbanData.branches,
    getUserData: (state) => state.userData,
    getCityTitle: (state) => state.urbanData.label,
    getUserSelectedOption: (state) => state.selectedOption,
  },
  mutations: {
    setUserTelNumber: (state, telNumber) => {
      state.userTelNumber = telNumber;
    },
    setUserIdNumber: (state, idNumber) => {
      state.userIdNumber = idNumber;
    },
    setCaptchaCode: (state, CaptchaCode) => {
      state.captchaCode = CaptchaCode;
    },
    setUserToken: (state, token) => {
      state.token = token;
    },
    setUserStatus: (state, status) => {
      // TODO get user different user status
      state.userStatus = status;
    },
    setUserFullName(state, fullName) {
      state.userFullName = fullName;
    },
    setUserId(state, id) {
      state.userId = id;
    },
    setUserData(state, data) {
      state.userData.fullName = data.fullName;
      state.userData.id = data.id;
      state.userData.isUserPhoneNumberExit = data.isUserPhoneNumberExit;
      state.userData.lastModifyAt = data.lastModifyAt;
      state.userData.nationalCode = data.nationalCode;
      state.userData.token = data.token;
    },
    setChosenUrbanData(state, data) {
      state.urbanData.branches = [];
      state.urbanData.id = data.id;
      state.selectedOption.cityId = data.id;
      state.urbanData.label = data.label;
      state.urbanData.isSet = data.isSet;
      // state.urbanData.branches = data.branches;
      data.branches.forEach((element) => {
        state.urbanData.branches.push(element);
      });
    },
    setChosenBranchId(state, data) {
      state.selectedOption.branchId = data;
    },
    setDay(state, data) {
      state.selectedOption.day = data;
    },
    setTime(state, data) {
      state.selectedOption.time = data;
    },
  },
});
