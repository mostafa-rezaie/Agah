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
</style>