<template>
  <div>
      <app-header
   
    ></app-header>

    <app-jumbo
        title="سیستم نوبت دهی آگاه"
        subTitle="خدمات کارگزاری اگاه"
        jumboActiveClass='text-center'
        titleClass = 'title-center'
        subTitleClass="sub-title-center"
    ></app-jumbo>
    <app-card></app-card>
  </div>
</template>

<script>
import Jumbotron from '../Jumbotron.vue'
import Card from '../Card.vue'
import Header from '../Header.vue'

export default {
  components:{
    appJumbo : Jumbotron,
    appCard : Card,
    appHeader : Header,
  }
};
</script>

<style scoped>

</style>
