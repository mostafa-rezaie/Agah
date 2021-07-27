<template>
  <!-- <div @click="passToParent" class="outer-container"> -->
    <button :class="getClass" @click="passToParent" class="outer-container">
      <div class="text-container">
        <img :src="icon" alt="gps icon" class="icon" v-if="iconIsSet" />
        <div class="btn-text">
          {{ label }}
        </div>
      </div>
    </button>
  <!-- </div> -->
</template>

<script>
export default {
  //   props: ["label", "classState"],
  props: {
    label: {
      type: String,
      default: "click me!",
    },
    active: {
      type: Boolean,
      default: false,
    },
    sizeMd: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
    },
    iconIsSet: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
    simple: {
      type: Boolean,
      default: false,
    },
    textColorBlue: {
      type: Boolean,
      default: false,
    },
    smallSize: {
      type: Boolean,
      default: false,
    },
    notAllowed: {
      type: Boolean,
      default: false,
    },
    sizeFull :{
      type: Boolean,
      default : false
    }
  },
  data() {
    return {};
  },
  methods: {
    passToParent() {
      this.$emit("clicked", true);
    },
  },
  computed: {
    getClass() {
      return {
        active: this.active,
        sizeMd: this.sizeMd,
        empty: this.empty,
        iconIsSet: this.iconIsSet,
        simple: this.simple,
        blueText: this.textColorBlue,
        smSize: this.smallSize,
        notAllowed: this.notAllowed,
        sizeFull : this.sizeFull
      };
    },
    getIcon() {
      return {
        icon: this.icon,
      };
    },
    getIconIsSet() {
      return this.iconIsSet;
    },
  },
};
</script>

<style >

</style>
<style scoped>
* {
  direction: rtl;
}
button {
  width: 278px;
  height: 72px;
  background-color: #80aaff;
  color: white;
  font-size: 20px;
  cursor: pointer;
  /* border : 2 solid white; */
}
.active {
  background-color: #0a5bff;
  padding: 0;
  cursor: pointer;
}
.outer-container {
  display: inline-block;
}
.sizeMd {
  width: 417px ;
  height: 72px ;
}
.empty {
  background-color: white;
  border-color: #0a5bff;
  color: #0a5bff;
  cursor: pointer;
}
.icon {
  display: inline-block;
  width: 36px;
  height: 36px;
  /* justify-self: center; */
  align-self: center;
}
.btn-text,
.icno {
  display: inline-block;
}
.btn-text {
  align-self: center;
  text-align: center;
}
.text-container {
  display: flex;
  justify-content: center;
}
.iconIsSet > div {
  /* display: flex; */
  /* margin-right: 45px; */
}
.iconIsSet > div > .btn-text {
  padding-right: 30px;
}
.simple {
  background-color: white;
  color: black;
  border: none;
}
.blueText div {
  color: #0a5bff;
}
.smSize {
  width: 200px;
}
.notAllowed {
  cursor: not-allowed;
}
.sizeFull{
  /* background-color: red; */
}

@media screen and (max-width: 700px) {
   .sizeFull{
      width: 100%;
  }
}
@media screen and (max-width: 600px) {
  button {
    height: 60px;
  }
  .btn-text {
    font-size: 14px;
  }
   .outer-container{
      width: 100%;
  }
}
@media screen and (max-width:450px) {
  .iconIsSet > div >.btn-text{
    padding-right: 10px;
  }
  
}
</style>