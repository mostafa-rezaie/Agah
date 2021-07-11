<template >
  <div class="wrapper" @click="clickHandler">
    <div class="inner-container row" :class="getClass">
      <div class="col-1 icon">
        <img :src="getCheckedIcon" alt="" />
      </div>
      <div class="col-11 text-box-wrapper">
        <div class="title">{{ title }}</div>
        <br />
        <div class="subtitle">{{ subtitle }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    subtitle: {
      type: String,
      default: "subtitle",
    },
    containerMd: {
      type: Boolean,
      default: false,
    },
    isActivatedBefore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      iconAddrToggle: true,
      active: false,
      iconSrc: require("../../../assets/img/circle-unchecked.svg"),
    };
  },
  computed: {
    getClass() {
      return {
        active: this.active,
        containerMd: this.containerMd,
      };
    },
    getCheckedIcon() {
      return this.iconSrc;
    },
  },
  methods: {
    clickHandler() {
      //chech if it is activated before or not
      if (!this.isActivatedBefore) {
        this.active = !this.active;
        this.$emit("passState", this.active);
      } else {
        if (this.active) {
          this.active = !this.active;
          this.$emit("passState", this.active);
        }
      }
      if (this.active) {
        this.iconSrc = require("../../../assets/img/checked.svg");
      } else {
        this.iconSrc = require("../../../assets/img/circle-unchecked.svg");
      }
    },
  },
};
</script>
<style scoped>
.inner-container {
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  width: 820px;
  border: solid #f8f9fa 2px;
}
.icon {
  text-align: center;
}
.subtitle {
  font-size: 18;
  box-sizing: content-box;
  font-weight: 300;
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
  user-select: none;
}
.title {
  font-size: 24;
  user-select: none;
  font-weight: 600;
  display: inline-block;
}
.wrapper {
  margin-bottom: 24px;
  display: inline-block;
}
.active {
  background-color: #d0dfff;
  border: solid #0a5bff 2px;
  box-sizing: content-box;
}
.containerMd {
  width: 526px;
  height: 120px;
  padding: 10px;
}
</style>