<template>
  <div >
    <div class="container">
      <div class="title">
        <slot :title="title"></slot>
        {{ title }}
      </div>
      <div class="subtitle">
        <slot :subTitle="subTitle"></slot>
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
  width: 520px;
  height: 140px;
  background-color: #F2F6FF;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 40px;
  padding-right: 0;
  padding-left: 0;
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
@media screen and (max-width: 600px) {
  .container{
    width: 100%;
    max-width: 551px;
    height: 116px;
  }
  .title{
    font-size: 14px;

  }
  .subtitle{
    font-size: 12px;
  }

}

</style>