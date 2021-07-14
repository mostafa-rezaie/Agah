<template>
  <div>
    <div class="card-text">
      <div class="title">
        <div class="title-right">

        {{ title }}
        </div>
        <div class="title-left">
          {{status}}
        </div>
      </div>
      <div class="subtitle-container">
        <div class="right-sub">
          <div class="key-text">
            {{ subtitleRightKeyText }}
          </div>
          <div class="value-text">
            {{ subtitleRightValueText }}
          </div>
        </div>
        <div class="left-sub">
          {{ subtitleLeft }}
        </div>
      </div>
      <div class="footer">
        <a :href="linkSrc" class="redirect-link">{{ linkText }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "نوبت احراز هویت",
    },
    subtitleRightKeyText: {
      type: String,
      default: "شعبه : ",
    },
    subtitleRightValueText: {
      type: String,
      default: " دفتر مرکزی تهران",
    },
    subtitleLeft: {
      type: String,
      default: "1399/07/17",
    },
    linkText: {
      type: String,
      default: "مشاهده جزییات",
    },
    linkSrc: {
      type: String,
      default: "#",
    },
    status:{
      type : String,
      default : ''
    }
  },
};
</script>
<style scoped>
.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 140px;
  margin: 15px 25px 15px 0;
}
.right-sub{
  margin-right: -10px;
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
.subtitle {
  font-size: 18px;
  font-weight: lighter;
  width: 400px;
  margin: 20px 0 0 0;
}

.subtitle-container{
  display: flex;
  justify-content: space-between;
  margin-top: -28px;
}

.key-text , .value-text , .title-left , .title-right{
  display: inline-block;
}
.footer{
  align-self: center;
}
a{
  text-decoration: none;
}
.left-sub , .key-text{
  color: rgb(119, 119, 119);
}
</style>