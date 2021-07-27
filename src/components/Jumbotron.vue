<template>
  <div :class="getTempClass">
    <div class="jumbotron" :class="getJumboClass">
  <slot></slot>
      <div :class="getClass">
        <h1 :class="getTitleClass">{{ title }}</h1>
        <h3 :class="getSubTitleClass">{{ subTitle }}</h3>
      </div>
    </div>
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
    "jumboClass",

  ],

  data() {
    return {
      jumboState: 0,
    };
  },
  methods: {},

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
    getJumboClass() {
      return this.jumboClass;
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
  margin-right: 16%;
}
.jumbotron {
  margin-top: 0px;
  background-color: black;
  height: 250px;
  width: 100%;
}

.title-center {
  font-size: 23px;
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

@media screen and (max-width: 500px) {
  .text-center {
    padding-right: 0;
    padding-left: 0;
    width: 242px;
  }}
  @media screen and (max-width: 1100px) {
    .text-right {
      margin-left:auto;
      margin-right:auto;
      width: 90%;

    }
    .sub-title-right,.title-right{
      font-size: 20px;
    }
  }
  @media screen and (max-width:700px) {
    .sub-title-right , .title-right , .title-center , .sub-title-center{

      font-size: 16px;
      }
      .jumbotron-lg{
        height: 150px;

      }
      .sub-title-right{
        margin-top: 5px;
      }
      .text-right{
        padding-top: 15px;
      }
      .text-center{
        padding-right: 0;
        padding-top: 0;
        padding-bottom: 0;
        padding-top: 25px;
        width: 90%;
        margin-right: 5%;
        margin-left: 5%;
      }
      
    
  }
  @media screen and (max-width:450px) {
    .sub-title-right , .title-right {
      font-size: 14px;
    }
    .jumbotron-md {
      height: 102px;
    }
  }
</style>