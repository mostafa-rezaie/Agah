<template >
  <div class="wrapper" :class="getClass" @click="clickHandler">
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "title",
    },
    isActivatedBefore: {
      type: Boolean,
      default: false,
    },
    textBoxActive : {
      type : Boolean,
      default : false
    }
  },
  data() {
    return {

    };
  },
  computed: {
    getClass() {
      return {
        active: this.textBoxActive,
      };
    },
  },
  methods: {
    clickHandler() {
      //check if it is activated before or not
     this.$emit('clicked',true)
    },
    changeState() {
      this.active = !this.active;
      this.$emit("passState", this.active);
    },
  },
};
</script>
<style scoped>
.wrapper {
  background-color: #f8f9fa;
  width: 248px;
  height: 46px;
  display: inline-block;
  text-align: center;
  box-sizing: content-box;
  border: 2px solid #f8f9fa;
  cursor: pointer;
}
.text {
  font-size: 20px;
  margin-top: 12px;
  font-weight: 300;
  user-select: none;
}
.active {
  border: solid #0a5bff 2px;
  background-color: #d0dfff;
}
</style>