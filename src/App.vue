<template>
  <div>
    <app-header></app-header>
    <router-view>

    </router-view>
    <!-- <app-home></app-home> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components:{
    appHeader : Header
  }
};
</script>

<style scoped>

</style>
