<template>
  <div>
    <div class="container">
      <label :for="getId"> {{ this.label }} </label>
      <input @keypress="sayHey(true)" :type="getType" :placeholder="getPlaceHolder" :id="getId" />
      <span id="captcha">2222</span>
      <button @click="sayHey(true)">
        <img src="../../assets/img/restartCaptcha.svg" alt="Captcha" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "placeHolder", "inputType", "id",'captchaIscorrect'],

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
  },
  methods: {
    sayHey(value) {
      console.log("hey");
      this.$emit('updateCaptch',value)
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
  width: 297px;
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
  background-color: #0A5BFF;
  border: 0 solid white;
}
</style>