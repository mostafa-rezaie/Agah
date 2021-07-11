<template >
  <div class="wrapper">
    <div class="top-text-container">
      <div class="title">{{name}} گرامی</div>
      <div class="subtitle">در صورت موافقت، نوبت احراز هویت خود را تایید کنید</div>
    </div>
    <div class="summary-text-container">
      <div class="option-container">
        <div class="image-container">
          <img src="" alt="" />
        </div>
        <div class="title"></div>
        <div class="subtitle"></div>
      </div>
      <div class="option-container">
        <div class="image-container">
          <img src="" alt="" />
        </div>
        <div class="title"></div>
        <div class="subtitle"></div>
      </div>
      <div class="option-container">
        <div class="image-container">
          <img src="" alt="" />
        </div>
        <div class="title"></div>
        <div class="subtitle"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            name : 'عرفان محمدی'
        }
    },
};
</script>
<style scoped>
.wrapper{
    direction: rtl;
}
</style>