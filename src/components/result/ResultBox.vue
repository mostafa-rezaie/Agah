<template>
  <div>
    <div class="container">
      <div class="title">
        <slot :title="title"> </slot>
        {{ title }}
      </div>
      <div class="subtitle">
        <slot :subTitle="subTitle"> </slot>
        {{ subTitle }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  direction: rtl;
}
.container {
  width: 515px;
  height: 140px;
  margin-right: 278px;
  background-color: #F2F6FF;
  margin-bottom: 80px;
}

.title {
  color: #0a5bff;
  font-size: 18px;
  padding-top: 21px;
  padding-right: 21px;
}
.subtitle {
    padding-right: 21px;
    padding-top: 13px;
    font-size: 16px;
}
</style>