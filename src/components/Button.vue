<template>
  <div>
    <div class="container">
      <button :class="getClass">{{ label }}</button>
    </div>
  </div>
</template>

<script>
export default {
  //   props: ["label", "classState"],
  props: {
    label: {
      type: String,
      default: "click me!",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  
  },
  data() {
    return {};
  },

  computed: {
    getClass() {
      return {
        active : this.active,
        disabled : this.disabled
      };
    },
  },
};
</script>

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
  /* border : 2 solid white; */
  margin-top: -20px;
}
.active {
  background-color: #0a5bff;
}
.deactive {
  background-color: #80aaff;
}
</style>