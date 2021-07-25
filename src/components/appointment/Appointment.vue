<template>
  <div>
    <div class="container-box">
      <app-header></app-header>
      <app-jumbtron class="jumbtron"
      jumboClass="jumbotron-md jumbotron-lg"
      >
        <div class="element-container">
          <app-side-element
            :text="{
              title: 'قدم اول',
              subTitle: 'انتخاب شعبه',
            }"
            :iconSrc="require('../../assets/img/homeSideBar.svg')"
          ></app-side-element>
        </div>
      </app-jumbtron>
      <div class="line-container">
        <div class="vertical-line1-3"></div>
      </div>
      <div v-if="textContainerHandler" class="text-container">
        <div class="title">شهر مورد نظر را انتخاب کنید</div>
        <div class="subtitle">شعبه مورد نظر خود را انتخاب یا جستجو کنید</div>
      </div>
      <router-view></router-view>

      <app-side-bar></app-side-bar>
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
import SideBar from "./SideBar.vue";
import Jumbotron from "../Jumbotron.vue";
import SideElement from "./SideElement.vue";

export default {
  data() {
    return {
      inChooseCity: false,
    };
  },
  components: {
    appSideBar: SideBar,
    appHeader: Header,
    appJumbtron: Jumbotron,
    appSideElement: SideElement,
  },
  computed: {
    textContainerHandler() {
      return this.inChooseCity;
    },
  },
};
</script>

<style scoped>
.container-box {
  width: 80%;
  left: 0;
}
.text-container {
  margin-right: 97px;
  direction: rtl;
  margin-top: 82px;
}
.title {
  margin-bottom: 21px;
  font-size: 24px;
  font-weight: bolder;
}
.subtitle {
  margin-right: 8px;
  font-size: 20px;
}
.jumbtron {
  display: none;
}
.line-container{
  display: none;
  direction: rtl;
}

@media screen and (max-width: 700px) {
  .line-container{
    display: block;
    direction: rtl;
  }
  .container-box {
    width: 100%;
  }
  .jumbtron {
    display: block;
  }
  .element-container {
    padding-top: 50px;
  }
  .vertical-line1-3 {
  height: 5px;
  width: 33%;
  background-color: #0A5BFF;
}
.vertical-line2-3 {
  height: 5px;
  width: 66%;
  background-color: #0A5BFF;
}
.vertical-line3-3 {
  background-color: #0A5BFF;
  height: 5px;
  width: 100%;
}
}
@media screen and (max-width: 450px) {
  .element-container {
    padding-top: 25px;
  }
}
</style>