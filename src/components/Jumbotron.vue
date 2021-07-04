<template>
  <div :class="getTempClass">
    <div class="jumbotron">
      <div :class="getClass">
        <h1 :class="getTitleClass">{{ title }}</h1>
        <h3 :class="getSubTitleClass">{{ subTitle }}</h3>
      </div>
    </div>
    <button @click="jumboState++">clikc me!</button>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "subTitle",
    "jumboActiveClass",
    "titleClass",
    "subTitleClass",
    "tempClass",
  ],

  data() {
    return {
      // title: "title",
      // subTitle: "subtitle",
      jumboState: 0,
      //0 req not sent
      //1 sent no confirm
      //2 sent confirm
    };
  },
  methods: {
    // changeState() {
    //   this.jumboState++;
    // },
  },

  // watch:{
  //   checkState(){
  //     switch (this.jumboState){
  //       case 0 :
  //         this.title = 'کد ملی و شماره همراه خود را جهت ثبت نوبت احراز هویت وارد کنید'
  //         this.subTitle = 'نوبت دهی احراز هویت برای افرادی می باشد که قبلا در آگاه ثبت نام کرده اند و احراز هویت نشده اند'
  //         break
  //       case 1 :
  //         this.title = 'title1'
  //         this.subTitle = 'subtitle 2'
  //         break
  //       case 2 :
  //         this.title = 'کد ملی و شماره همراه خود را جهت ثبت نوبت احراز هویت وارد کنید'
  //         this.subTitle = 'نوبت دهی احراز هویت برای افرادی می باشد که قبلا در آگاه ثبت نام کرده اند و احراز هویت نشده اند'
  //         break

  //     }
  //   }
  // },
  watch: {
    changeText() {
      if (this.jumboState == 1) {
        this.titleText = "title changed";
      }
    },
  },
  computed: {
    titleText: {
      get() {
        return this.title;
      },
      set(value) {
        this.title = value;
      },
    },
    getClass() {
      return this.jumboActiveClass;
    },
    getTempClass() {
      return this.tempClass;
    },
    getSubTitleClass() {
      return this.subTitleClass;
    },
    getTitleClass() {
      return this.titleClass;
    },
  },
};
</script>
<style scoped>
* {
  direction: rtl;
}
.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 336px;
  color: white;
  height: 96px;
  padding: 77px;
}
.text-right {
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  direction: rtl;
  color: white;
  height: 92px;
  width: 803px;
  margin-right: 309px;
}
.jumbotron {
  margin-top: 0px;
  background-color: black;
  height: 250px;
  width: 100%;
}

.title-center {
  font-size: 33px;
  font-weight: 400;
}
.title-right {
  font-size: 24px;
  font-weight: 400;
}
.sub-title-center {
  margin-top: -10px;
  font-size: 18px;
  font-weight: 400;
  color: grey;
}
.sub-title-right {
  margin-top: 24px;
  font-size: 18px;
  font-weight: 400;
  color: grey;
}
.deactive {
  display: none;
}
.active {
}
</style>