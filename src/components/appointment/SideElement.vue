<template>
  <div class="container">
    <div class="image">
      <img :src="iconSrc" alt="imgElement" />
    </div>
    <div class="text">
      <div class="title">{{ text.title }}</div>
      <div class="subTitle" :class="getSubTitleClass">{{ text.subTitle }}</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    text: {
      title: String,
      subTitle: String,
    },
    title: {
      type: String,
      default: "title",
    },
    subTitle: {
      type: String,
      default: "subtitle",
    },
    subTitleDeactive: {
      type: Boolean,
      default: false,
    },
    iconSrc : {
      type : String,
      
    }
  },
  computed: {
    getSubTitleClass() {
      return {
        subTitleDeactive: this.subTitleDeactive,
      };
    },
  },
};
</script>


<style scoped>
* {
  color: white;
  direction: rtl;
}
.image,
.text {
  display: inline-block;
}
.image {
  height: 62px;
  width: 62px;
}
.text {
  width: 150px;
  margin-bottom: 10px;
}

.image img {
  height: 30px;
  width: 36px;
  box-sizing: border-box;
  margin-right: 20px;
}
.title {
  margin-right: 16.8px;
  color: grey;
  font-size: 18px;
}
.subTitle {
  font-size: 20px;
  margin-right: 22px;
  color: white;
}
.container {
  height: 45px;
  margin-bottom: 20px;
}
.subTitleDeactive {
  color : gray
}
</style>