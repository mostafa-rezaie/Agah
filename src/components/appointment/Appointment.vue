<template>
  <div>
    <div class="container-box">
      <app-header></app-header>
        <router-view></router-view>
      <app-side-bar></app-side-bar>
    </div>
  </div>
</template>

<script>
import Header from "../Header.vue";
import SideBar from "./SideBar.vue";

export default {
  components: {
    appSideBar: SideBar,
    appHeader: Header,
  },
};
</script>

<style scoped>
.container-box {
  width: 80%;
  left: 0;
}

</style>