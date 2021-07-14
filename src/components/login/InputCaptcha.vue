<template>
  <div>
    <div class="container">
      <label :for="getId"> {{ this.label }} </label>
      <input
        @keypress="captchaHandler($event)"
        :type="getType"
        :placeholder="getPlaceHolder"
        :id="getId"
      />
      <img :src="getCaptchaSrc" alt="captcha img" />
      <button @click="sayHey(true)">
        <img src="../../assets/img/restartCaptcha.svg" alt="Captcha" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "کد امنیتی",
    },
    placeHolder: {
      type: String,
      default: "لطفا عدد رو به رو را وارد کنید",
    },
    inputType: {
      type: String,
      default: "text",
    },
    captchaCode: {
      type: String,
      default : '123456'
    },
    captchaSrc: {
      type: String,
      default : ' '
    },
  },

  computed: {
    getType() {
      return this.inputType;
    },
    getLabel() {
      return this.label;
    },
    getPlaceHolder() {
      return this.placeHolder;
    },
    getId() {
      return this.id;
    },
    getCaptchaSrc() {
      return this.captchaSrc;
    },
  },
  methods: {
    captchaHandler($ev) {
      if ($ev.target.value.length>1){
        this.$emit("updateCaptch", true);
      }else{
        this.$emit('updateCaptch',false)
      }
      if ($ev.target.value.length >5){
        $ev.preventDefault();
        
      }
    },
  },
};
</script>

<style  scoped>
* {
  direction: rtl;
}

label {
  display: block;
  margin-bottom: 3px;
}
.container {
  margin-right: 278px;
  margin-top: 47px;
  margin-bottom: 47px;
}
input {
  box-sizing: border-box;
  width: 357px;
  height: 74px;
  background-color: #f8f9fa;
  border: white solid 0px;
  display: inline;
  padding: 0 22px 0 0 !important;
  font-size: 27px;
}

input::placeholder {
  font-size: 20px;
  color: grey;
  /* text-indent: 20px; */
}
#captcha {
  height: 74px;
  width: 152px;
  display: inline-block;
}
button {
  height: 74px;
  width: 75px;
  background-color: #0a5bff;
  border: 0 solid white;
}
</style>