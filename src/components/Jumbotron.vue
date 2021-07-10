<template>
  <div :class="getTempClass">
    <div class="jumbotron">
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
  ],

  data() {
    return {
     
      jumboState: 0,
     
    };
  },
  methods: {
   
  },

  
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
</style>