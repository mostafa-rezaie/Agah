<template>
  <div>
    <div class="container">
      <label :for="getId"> {{ this.label }} </label>
      <input
          :type="getType"
          :placeholder="getPlaceHolder"
          :id="getId"
          @keypress="inputHandler($event)"
          @input="updateInput($event)"
          v-model="inputNumber"
          :class="getClass"
          :value="getValue"
      />
     <!-- <p>{{ this.getValue }}</p> -->
<!--      <p>{{ massage }}</p>-->
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

    sizeConfirm: {
      type: Boolean,
      default: false,
    },
    value :{
      type : String,
      default : ''
    }
  },
  data() {
    return {
      inputLength: 0,
      inputNumber: "",
      jumboState: 0,
      inputIsWrong: true,
      massage: "",
      //0 req not sent
      //1 req sent not confirmed
      //2 req sent confirmed
    };
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
        sizeConfirm: this.sizeConfirm,
      };
    },
    getValue (){
      return this.value
    }
  },
  methods: {


    inputHandler($ev) {
      this.checkInput($ev)
    },
    checkInput($ev) {
      this.checkNumericInput($ev);
      this.limitLength($ev);
      //update input in the parent
      // this.updateInput($ev.target.value);

    },
    checkNumericInput($ev) {
      if ($ev.keyCode < 48 || $ev.keyCode > 57) {
        $ev.preventDefault();
      }
    },
    limitLength($ev) {
      if (this.id === "phoneNumber") {
        if (this.inputNumber.length > 10) {
          $ev.preventDefault();
        }
      }
      if (this.id == "idNumber") {
        if (this.inputNumber.length > 9) {
          $ev.preventDefault();
        }
      }
    },
    updateInput($ev) {
      this.$emit("updateInput", $ev.target.value);
    },
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}

label {
  display: block;
  margin-bottom: 3px;
}

.container {
  /* margin-right: 278px; */
  margin-top: 47px;
  margin-bottom: 47px;
  padding-right: 0;
  padding-left: 0;
  margin-right: 0;
}

input {
  box-sizing: border-box;
  width: 526px;
  height: 74px;
  background-color: #f8f9fa;
  border: white solid 0px;
  font-size: 27px;
  direction: rtl;
  padding: 0 22px 0 0 ;
}

input::placeholder {
  font-size: 20px;
  color: grey;
  /* text-indent: 20px; */
  /* background-color: red; */
}

.sizeConfirm {
  width: 450px;
  display: inline-block;
}
@media screen and (min-width : 1100px) {
  .container {
  }
  
}
@media screen and (max-width : 568px) {
  .container {
    /* margin-right: 16%; */
    width: 95%;
  }
  .container > input{
    width: 100%;
    height: 52px;
  }
  .container > input::placeholder{
font-size: 16px;
  }
  .container > label{
    font-size: 14px;
  }
  input{
    padding-right: 5px;
  }
}

</style>