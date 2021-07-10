<template>
  <div class="outer-container">
    <div class="container">
      <label :for="getId"> {{ this.label }} </label>
      <input
        :type="getType"
        :placeholder="getPlaceHolder"
        :id="getId"
        :class="getClass"
      />
      <button v-show="getId !== 'confirmCode'">
        <img src="../../assets/img/editButton.svg" alt="editButton" />
      </button>
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
    sizeFull :{
        type: Boolean,
        default : false
    }
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
  },
  methods: {},
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
  width: 450px;
  height: 74px;
  background-color: #f8f9fa;
  border: white solid 0px;
  font-size: 27px;
  direction: rtl;
  padding: 0 22px 0 0 !important;
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

.sizeFull{
    width: 524px;
}
</style>