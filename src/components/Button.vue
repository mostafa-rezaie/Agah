<template>
  <div class="outer-container">
    <div class="inner-container">
      <button :class="getClass">
        <div class="btn-container" >
          <div class="icon" v-if="iconIsSet">
            <img :src="icon" alt="gps icon" />
          </div>
          <div class="btn-text">
            {{ label }}
          </div>
        </div>
      </button>
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
  },
  data() {
    return {};
  },

  computed: {
    getClass() {
      return {
        active: this.active,
        sizeMd: this.sizeMd,
        empty: this.empty,
        iconIsSet :this.iconIsSet
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
}
.active {
  background-color: #0a5bff;
  padding: 0;
}
.outer-container {
  display: inline-block;
}
.sizeMd {
  width: 417px;
  height: 72px;
}
.empty {
  background-color: white;
  border-color: #0a5bff;
  color: #0a5bff;
}
.icon {
  display: inline-block;
  width: 36px;
  height: 36px;
  /* justify-self: center; */
  align-self: center;
}
.btn-text , .icno{
  display: inline-block;
}
.btn-text{
  align-self: center;
  text-align: center;
}
.btn-container {
  width:auto;
  height: auto;
}
.iconIsSet > div {
  display: flex;
  margin-right: 72px;
}
.iconIsSet > div>.btn-text{
  padding-right: 30px;
}
</style>