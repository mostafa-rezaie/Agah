<template>
  <div>
    <app-complex-modal
      :isHidden="false"
      :iconSrc="require('../../../assets/img/settings.svg')"
      modalText="قابلیت یافتن نزدیکترین شعبه بر اساس موقعیت کنونی شما
 .در آینده در دسترس قرار خواهند گرفت."
      buttonText="بازگشت"
      buttonLink="/appointment"
    ></app-complex-modal>
  </div>
</template>
<script>
import ComplexModal from "../../ComplexModal.vue";
export default {
  components: {
    appComplexModal: ComplexModal,
  },
};
</script>
<style scoped>
</style>