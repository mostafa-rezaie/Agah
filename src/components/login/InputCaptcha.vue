<template>
  <div>
    <div class="container">
      <label :for="getId"> {{ this.label }} </label>
      <input
        @keypress="captchaHandler($event)"
        @input="passData($event)"
        :type="getType"
        :placeholder="getPlaceHolder"
        :id="getId"
      />
      <div class="captcha-container">

      <img :src="getCaptchaSrc" alt="captcha img" />
      </div>
      <button @click="clickHandler(true)">
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
        this.$emit("updateCaptcha", true);
      }else{
        this.$emit('updateCaptcha',false)
      }
      if ($ev.target.value.length >5){
        $ev.preventDefault();
        
      }
    },
    passData($ev){
      console.log('data entered')
      this.$emit('entered',$ev.target.value)
    },
    clickHandler(value){
      this.$emit('clicked',value)
    }
  },
};
</script>

<style  scoped>
* {
  direction: rtl;
}
.container {
  padding-left: 0;
  padding-right: 0;
   margin-right: 0;
  margin-top: 47px;
  margin-bottom: 47px;
  width: 526px;

}
label {
  display: block;
  margin-bottom: 3px;
}
input {
  box-sizing: border-box;
  width: auto;
  height: 74px;
  background-color: #f8f9fa;
  border: white solid 0px;
  display: inline;
  padding: 0 22px 0 0 ;
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
.container > img {
  margin-right: 3px;
}

.captcha-container{
  display: inline-block;
  width: 15%;
}
/*start media queries*/
@media screen and (min-width : 1100px) {
  .container {
  }
  
}
@media screen and (max-width : 568px) {
  .container {
    /* margin-right: 16%; */
    width: 95%;
    margin-right: 0;
    margin-left: auto;
  }
  .container > input{
    width: 60%;
    height: 52px;
  }
  .container > .captcha-container {
    width: 23%;
  }
  .container > button{
    position: relative;
    width: 17%;
    height: 52px;
  }
  input{
    padding-right: 5px;

  }
  button > img{
    /* width: 50%; */
    /* height: 50%; */
    margin: auto;
  }
  .container > input::placeholder{
font-size: 16px;
  }
  .container > label{
    font-size: 14px;
  }
  
}
</style>