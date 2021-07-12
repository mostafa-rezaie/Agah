<template>
  <div class="wrapper" @click="clickHandler">
    <div class="inner-container row" :class="getClass">
      <div class="col-1 icon">
        <img :src="iconIsSet == true ? require  ('../../../assets/img/checked.svg') : require('../../../assets/img/circle-unchecked.svg')"
             alt=""/>
      </div>
      <div class="col-11 text-box-wrapper">
        <div class="title">{{ title }}</div>
        <br/>
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

    active: {
      type: Boolean,
      default: false
    },
    iconIsSet: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    getClass() {
      return {
        active: this.active,
        containerMd: this.containerMd,
      };
    },


  },
  methods: {
    clickHandler() {
      console.log('hey')
      this.$emit('clicked', true)
    },

  }

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
  font-size: 18px;
  box-sizing: content-box;
  font-weight: 300;
  display: inline-block;
  margin-top: 5px;
  margin-right: 10px;
  user-select: none;
}

.title {
  font-size: 24px;
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