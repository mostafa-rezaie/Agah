<template>
  <div class="outer-container container">
    <label :for="getId"> {{ this.label }} </label>
    <div class="input-wrapper">
      <input
        :type="getType"
        :placeholder="getPlaceHolder"
        :id="getId"
        :class="getClass"
        :disabled="getInputStatus"
        @input="passConfirmCode"
        @keypress="preventInput"
      />
      <router-link :to="backSrc">
        <button v-show="getId !== 'confirmCode'">
          <img src="../../assets/img/editButton.svg" alt="editButton" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    sizeFull: {
      type: Boolean,
      default: false,
    },
    inputIsDisabled: {
      type: Boolean,
      default: true,
    },
    backSrc: {
      type: String,
      default: "/",
    },
  },
  data() {
    return {};
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
    getClass() {
      return {
        sizeFull: this.sizeFull,
      };
    },
    getInputStatus() {
      return this.inputIsDisabled;
    },
    getInputValue() {
      return this.value;
    },
  },

  methods: {
    passConfirmCode($ev) {
        this.$emit("entered", $ev.target.value);
    },
    preventInput($ev) {
      if ($ev.target.value.length > 5) {
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
.outer-container {
  /* margin-right: 290px; */
  margin-top: 47px;
  margin-bottom: 47px;
  padding-left: 0;
  padding-right: 0;
}
input {
  box-sizing: border-box;
  width: 450px;
  height: 74px;
  background-color: #f8f9fa;
  border: white solid 0px;
  font-size: 27px;
  direction: rtl;
  padding: 0 22px 0 0 ;
}
.input-wrapper {
  display: flex;
}
input::placeholder {
  font-size: 20px;
  color: black;
  /* text-indent: 20px; */
  /* background-color: red; */
}
.sizeConfirm {
  width: 450px;
  display: inline-block;
}

button {
  height: 74px;
  width: 74px;
  background-color: #0a5bff;
  border: 0 solid white;
}

.sizeFull {
  width: 524px;
}
@media screen and (min-width:1100px) {
  .outer-container{
    margin-right: 0;
    width: 100%;
  }
  
}@media screen and (max-width:1100px) {
  .outer-container{
    margin-right: 10%;
    width: 90%;
  }

}
  
@media screen and (max-width:600px ) {
  .container{
    width: 95%;
  }
  .outer-container{
    padding-right: 0;
    padding-left: 0;
    width: 95%;
    margin: 25px auto 25px auto;
  }
  input{
    width : 100%;
    height: 52px;
    padding-right: 5px;


  }
  input::placeholder{
font-size: 16px;
  }
  .outer-container > label{
    font-size: 14px;
  }
  button{
    height: 52px;
  }
  .sizeFull {
    width: 100%;
  }
}
</style>