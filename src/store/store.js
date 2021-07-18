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
        token : "",
        userStatus:"",
        userFullName : "",
        userId : ""
    },
    getters: {
        getUserTelNumber :state => {
            return state.userTelNumber
        },
        getUserIdNumber :state => {
            return state.userIdNumber
        },
        getUserCaptchaCode :state => {
            return state.captchaCode
        },
        getUserToken :state => {
            return state.token
        },
        getUserStatus :state => {
            return state.userStatus
        },
        getUserFullName :state => {
            return state.userFullName
        }
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
        setUserFullName (state,fullName){
            state.userFullName = fullName
        },
        setUserId (state,id){
            state.userId = id
        }
    },
});
