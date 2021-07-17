<template>
  <div>

    <div class="wrapper">
      <div class="top-text-container">
        <img src="../../../assets/img/checked.svg" alt="">
        <div class="title name ">نوبت شما در سامانه ثبت شد</div>
        <div class="top-subtitle">نوبت احراز هویت شما در دفتر مرکزی در بازه فلان تا فلان ثبت شد</div>
      </div>
      <div class="accept-text-container">
        <span>داشتن مدارک زیر الزامی است :</span>
        <ul>
          <li>اصل شناسنامه و کمی از تمام صفحات شناسنامه</li>
          <li>اصل کارت ملی و کمی شناسنامه</li>
          <li>کمی مدرک تحصیلی</li>
        </ul>
      </div>
    </div>

    <div class="btn-box">


      <!-- left button  -->
      <router-link to="/">

        <app-button
            active
            label="بازگشت به صفحه اصلی"></app-button>
      </router-link>
    </div>


  </div>

</template>
<script>
import Button from "../../Button.vue";

export default {
  data() {
    return {
      goBackIconSrc: require("../../../assets/img/go-back-icon.svg"),
    }
  },
  components: {
    appButton: Button,
  }
};
</script>
<style scoped>
.title {
  font-size: 20px;
}

.top-text-container > img {
  width: 76px;
  height: 56px;
}

.wrapper {
  margin-right: 86px;
  margin-top: 82px;
  direction: rtl;
}

.name {
  font-size: 24px;
  font-weight: bold;
  color: #0A5BFF;
}

.subtitle {
  margin-right: 5px;
  font-weight: 300;
}

.top-text-container {
  line-height: 30px;

}

.top-subtitle {
  margin-right: 20px;
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
}

.accept-text-container {
  margin-top: 102px;
}

.btn-box {
  direction: rtl;
  position: relative;
  bottom: -10px;

}
li {
  list-style: none;
  margin-bottom: 15px;
}
li::before{
  content: '• ';
  color: #0A5BFF;
}
ul{
  padding: 0;
}
</style>