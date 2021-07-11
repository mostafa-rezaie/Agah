<template>
  <div>
    <div class="container-box">
      <app-header></app-header>
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
export default {
  data() {
    return {
      inChooseCity : false
    }
  },
  components: {
    appSideBar: SideBar,
    appHeader: Header,
  },
  computed: {
    textContainerHandler(){
      return this.inChooseCity;
    }
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
</style>