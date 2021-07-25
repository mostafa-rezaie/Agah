<template>
  <div :class="getClass"></div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    deactive: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    getClass() {
      return {
        deactive: this.deactive,
        active: this.active,
      };
    },
  },
};
</script>

<style scoped>
.deactive {
  height: 100px;
  width: 5px;
  background-color: grey;
  margin-right: 48px;
}

.active {
  background-color: blue;
}
@media screen and (max-width:1250px) {
  .deactive , .active {
    margin-right: 19px;
  }
  
}
@media screen and (max-width:1000px) {
  
  .deactive , .active {
    margin-right: 16px;
    height: 75px;
    margin-bottom: 10px;
  }
  
  
}
</style>