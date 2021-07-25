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
    iconSrc: {
      type: String,
    },
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
  color: gray;
}
@media screen and (max-width: 1250px) {
  .container {
    padding-right: 0;
    padding-left: 0;
  }
  .text {
    width: auto;
  }
  .image > img {
    margin-right: 5px;
  }

  .image {
    width: 18%;
  }
  .title,
  .subTitle {
    margin-right: 15px;
  }
}
@media screen and (max-width: 1000px) {
  .title,
  .subTitle {
    font-size: 13px;
  }
  .image > img {
    width: 25px;
  }
  .container {
    margin-bottom: 0;
  }
}
@media screen and (max-width: 700px) {
  .image > img {
    width: 55px;
    height: 48px;
  }

  .image {
    width: 11%;
    height: 60px;
  }
  .title,
  .subTitle {
    font-size: 19px;
  }
  .text {
    margin-right: 10px;
  }
  .title {
    margin-bottom: 5px;
  }
  .container{
    height: 100%;
    margin-right: 5%;
  }
}
@media screen and (max-width:450px) {
  
  .image > img {
    width: 36px;
    height: 30px;
  }
  .title,
  .subTitle {
    font-size: 15px;
  }
  .text {
    margin-right: 5px;
  }
}
</style>